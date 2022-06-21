import React, { useEffect } from 'react'
import {
    Drawer,
    Typography,
    AppBar,
    Toolbar,
    TextField,
    Switch
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../assets/Logo.png'
import DP from '../assets/dashboardDP.png'
import { createTheme } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PostAJob from '../assets/postAJob.svg'
import Vouch from '../assets/vouchDashboard.svg'
import Scheduler from '../assets/schedulerDashboard.svg'
import Messages from '../assets/messagesDashboard.svg'
import Home from '../assets/homeDashboard.svg'
import {
    BrowserRouter as Router,
    Switch as Switch2,
    Route,
    Link,
    useParams,
    useRouteMatch,
} from "react-router-dom";
import { Redirect } from 'react-router'
import DashboardHome from './dashboardComp/dashboardHome'
import DashboardPost from './dashboardComp/dashboardPost'
import DashboardPostSub from './dashboardComp/dasboardPostSub'
import DashboardVouch from './dashboardComp/dashboardVouch'
import DashboardProfile from './dashboardComp/dashboardProfile'
import SignUp from './SignUp'
import axios from 'axios'
import DashboardApplication from './dashboardComp/dashboardApplication'

const drawerWidth = 200

// const theme = createTheme({
//     mixins: {
//         toolbar: {
//             minHeight: 56
//         },
//     }
// })

const data = [1]

const drawerList = [
    {
        icon: Home,
        name: 'Home'
    },
    {
        icon: PostAJob,
        name: 'Post A Job'
    },
    {
        icon: Vouch,
        name: 'Vouch'
    },
    {
        icon: Scheduler,
        name: 'Scheduler'
    },
    {
        icon: Messages,
        name: 'Messages'
    },
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
        height: 'auto',
        width: '100vw',
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


function Dashboard({ setIsVerified, isVerified }) {
    const classes = useStyles()
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const [userData, setUserData] = React.useState({})

    const [postJob, setPostJob] = React.useState({
        category: '',
        jobType: '',
        no_of_openings: '',
        min_salary: '',
        max_salary: '',
        expectedSalary: '',
        startDate: '',
        duration: '',
        job_city: '',
        company_name: '',
        companyDescription: '',
        skills: [],
        workingHoursFrom: '',
        workingHoursTo: '',
        experience: '',
        job_description: '',
        lastDateToApply: '',
    })

    const jwt = window.localStorage.getItem('jwt')

    useEffect(() => {
        axios.get('http://65.0.74.9/api/command/get_user_profile', {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        }).then(res => { setUserData(res.data); console.log(res.data) })
    }, [jwt])

    let { path, url } = useRouteMatch();
    const { pageID } = useParams();

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const isLoggedIn = window.localStorage.getItem('isVerified') === "true"

    // if (!isLoggedIn) {
    //     return <Redirect to="/login" />
    // }

    return (
        <Router>
            <div className={classes.root}>
                <AppBar className={classes.appbar}>
                    <Toolbar>
                        <div style={{ flexGrow: 1 }}>
                            <TextField style={{ width: 250 }} size="small" placeholder="search" variant="outlined" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ height: 50, width: 150, backgroundColor: '#76C2FC', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                                <Typography><Link to={`${url}/Post`}>+ Post a Job</Link></Typography>
                            </div>
                            <div>
                                <Link to={`${url}/Profile`}>
                                    <div style={{ marginLeft: 30, display: 'flex', backgroundColor: '#fff', width: 'auto', height: 50, alignItems: 'center', borderRadius: 5 }}>
                                        <img style={{ width: 40, height: 40, marginLeft: 10 }} src={DP} alt="dp" />
                                        <div style={{ marginLeft: 20, marginRight: 20 }}>
                                            <Typography style={{ color: "#000" }}>{userData.fullname}</Typography>
                                            <Typography style={{ color: '#000' }}>{userData.company_name}</Typography>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    anchor="left"
                    className={classes.drawer}
                    classes={{ paper: classes.drawer }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 100, marginTop: 40 }}>
                        <img src={Logo} alt="logo" style={{ width: 150 }} />
                    </div>
                    <div style={{ flexGrow: 1 }}>
                        {drawerList.map(item => (
                            <Link to={item.name === 'Post A Job' ? `${url}/Post` : `${url}/${item.name}`}><Typography className={classes.listItem}><img style={{ width: '1.8rem', height: '1.8rem' }} src={item.icon} alt="icon" /><span style={{ marginLeft: 40 }}>{item.name}</span></Typography></Link>
                        ))
                        }
                    </div>

                    <Typography style={{ marginLeft: 40, marginBottom: 30 }}>Settings</Typography>
                </Drawer>
                {/*<DashboardHome>
                {children}
            </DashboardHome>*/}
                {data.length === 0 ?
                    <div style={{ marginTop: 150, marginLeft: 80 }}>
                        <Typography style={{ width: 200, height: 60, backgroundColor: '#FEC547', display: ' flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10, color: '#fff', cursor: 'pointer' }}> Complete Your Profile</Typography>
                    </div>
                    :
                    <Switch2>
                        <Route exact path={`${path}/home`}>
                            <DashboardHome url={url} isVerified={isVerified} setIsVerified={setIsVerified} />
                        </Route>
                        <Route path={`${path}/Post`}>
                            <DashboardPost url={url} postJob={postJob} setPostJob={setPostJob} />
                        </Route>
                        <Route path={`${path}/PostCont`}>
                            <DashboardPostSub postJob={postJob} setPostJob={setPostJob} />
                        </Route>
                        <Route path={`${path}/Vouch`}>
                            <DashboardVouch />
                        </Route>
                        <Route path={`${path}/Profile`}>
                            <DashboardProfile />
                        </Route>
                        <Route path={`${path}/applications/:job_id`}>
                            <DashboardApplication />
                        </Route>
                    </Switch2>
                }
            </div>
        </Router>
    )
}

export default Dashboard
