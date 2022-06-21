import React, { useEffect, useState } from 'react'
import {
    Typography,
    Switch
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Redirect } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';

const drawerWidth = 200

// const theme = createTheme({
//     mixins: {
//         toolbar: {
//             minHeight: 56
//         },
//     }
// })

const data = [
    {
        name: 'Plumber',
        status: 'Active',
        applicationStatus: 13,

    },
    {
        name: 'Electrician',
        status: 'Active',
        applicationStatus: 13,

    },
    {
        name: 'Data Entry Operator',
        status: 'Active',
        applicationStatus: 13,

    }
]


const useStyles = makeStyles({
    drawer: {
        width: drawerWidth,
        height: '100vh'
    },
    appbar: {
        width: `calc(100% - ${drawerWidth}px)`,
        backgroundColor: '#F4EEDF',
        height: 80,
        display: 'flex',
        justifyContent: 'center',
    },
    listItem: {
        textAlign: 'left',
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 15,
        marginRight: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    root: {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#F4EEDF'
    },
    mainContent: {
        marginTop: 80
    },
    contentNav: {
        display: 'flex',
        flex: 'row',
        width: `calc(100vw - ${drawerWidth}px)`,
        justifyContent: 'space-between',
        marginTop: 40
    },
    content: {
        marginLeft: 80,
        marginRight: 80,
        marginTop: 60,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10
    },
    contentMain: {
        display: 'flex',
        flexDirection: 'row',
        width: `calc(100vw - ${drawerWidth}px)`,
        justifyContent: 'space-evenly',
        overflowX: 'none'
    }
}
)


function DashboardHome({ children, setIsVerified, isVerified, url }) {
    const classes = useStyles()
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const [jobList, setJobList] = useState([])

    const jwt = window.localStorage.getItem('jwt')

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://65.0.74.9/api/command/get_posted_jobs',
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        }).then(res => { console.log(res.data); setJobList(res.data) })
    }, [jwt])

    const isLoggedIn = window.localStorage.getItem('isVerified') === "true"

    if (!isLoggedIn) {
        console.log(localStorage.getItem('jwt'))
        return <Redirect to="/login" />
    }



    return (
        <div className={classes.root}>
            <div className={classes.mainContent}>
                <div className={classes.contentNav}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 80
                    }}>
                        <Typography style={{ backgroundColor: '#fff', height: '2rem', display: ' flex', flexDirection: 'row', alignItems: 'center', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>Filter by: <span style={{ marginLeft: 10 }}>None</span></Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginRight: 80 }}>
                        <Typography>Show Active jobs only </Typography>
                        <Switch
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'checkbox' }}
                            color="default"
                        />
                    </div>
                </div>
                <div className={classes.content}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#FEC547', height: 50, alignItem: 'center', borderRadius: 10 }}>
                        <Typography style={{ width: 180, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Job Profile</Typography>
                        <Typography style={{ width: 80, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Status</Typography>
                        <Typography style={{ width: 150, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Applications</Typography>
                        <Typography style={{ width: 80, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Edit</Typography>
                    </div>
                    <div style={{ marginTop: 20 }}>
                        {
                            jobList.map(item => (
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                                    <Typography style={{ width: 180, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.category}</Typography>
                                    <Typography style={{ width: 80, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2C9C05' }}>Active</Typography>
                                    <Link to={`${url}/applications/${item.job_id}`}><Typography style={{
                                        width: 150,
                                        textAlign: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#777',
                                        color: '#fff',
                                        height: '1.5rem',
                                        borderRadius: 10
                                    }}>Applications ({item.applicationStatus})</Typography></Link>
                                    <Typography style={{ width: 80, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MoreVertIcon /></Typography>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome
