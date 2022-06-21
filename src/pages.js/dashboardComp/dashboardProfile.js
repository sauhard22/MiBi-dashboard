import React, { useState, useEffect } from 'react'
import {
    makeStyles,
    Typography,
    TextField
} from '@material-ui/core'
import Plus from '../../assets/plus.svg'
import Minus from '../../assets/Minus.svg'
import Line from '../../assets/VerticalLine.svg'
import Arrow from '../../assets/arrowDashPost.svg'
import { useRouteMatch } from 'react-router'
import { Link, useHistory } from 'react-router-dom'
import { Redirect } from 'react-router'
import imageDP from '../../assets/imageDP.png'
import edit from '../../assets/editProfile.svg'
import axios from 'axios'


const useStyles = makeStyles({
    root: {
        marginTop: 130,
        backgroundColor: '#fff',
        marginBottom: 50,
        marginLeft: 30,
        marginRight: 30,
        width: '100vw',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'row',
    }
})

function DashboardProfile({ url }) {
    const classes = useStyles();

    let [counter, setCounter] = useState(0)

    const [role, setRole] = useState('Add You Designation')

    const [click, setClick] = useState(false)

    const [data, setData] = useState({})

    const handleChange = () => {
        setClick(true)
    }
    const handleEnter = () => {
        setClick(false)
    }

    const history = useHistory()

    const jwt = window.localStorage.getItem('jwt')

    const handleSignOut = () => {
        localStorage.removeItem('jwt');
        localStorage.setItem('isVerified', false);
        // <Redirect to="/login" />
        window.location.reload()
    }

    const handleSaveData = () => {
        var detailsData = new FormData();
        var detailsArr = Object.keys(data)
        for (let i = 0; i < detailsArr.length; i++) {
            detailsData.append(`${detailsArr[i]}`, data[detailsArr[i]])
        }
        console.log(data)
        axios({
            method: 'post',
            url: 'http://65.0.74.9/api/user/update/profile/',
            data: detailsData,
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': `Bearer ${jwt}`
            },
        }).then(res => console.log(res))

    }

    const [userData, setUserData] = useState({})



    useEffect(() => {
        axios.get('http://65.0.74.9/api/command/get_user_profile', {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        }).then(res => { console.log(res.data); setUserData(res.data) })
    }, [jwt])

    return (
        <div className={classes.root}>
            <div style={{ width: '20%', height: '100%', display: 'flex', flexDirection: 'column', marginLeft: '3rem', marginRight: '3rem', alignItems: 'center' }}>
                <img style={{ width: '10rem', borderRadius: '5rem' }} src={imageDP} alt="DP" />
                <div style={{ marginTop: 20 }}>
                    {!click ?
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <Typography>{role}</Typography>
                            <img onClick={handleChange} style={{ width: 30, marginTop: 20, cursor: 'pointer' }} src={edit} alt="edit" />
                        </div>
                        :
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <TextField
                                placeholder={role}
                                size="small"
                                id="outlined-basic"
                                variant="outlined"
                                onChange={(e) => setRole(e.target.value)}
                            />
                            <Typography
                                onClick={handleEnter}
                                style={{
                                    width: 100,
                                    height: 50,
                                    backgroundColor: '#FEC547',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 10,
                                    marginTop: 30
                                }}>Enter</Typography>
                        </div>
                    }
                </div>

            </div>
            <div style={{ width: '40%', height: '100%', display: 'flex', flexDirection: 'column', marginLeft: '6vw', marginRight: '2rem' }}>
                <div style={{ marginTop: 20 }}>
                    <Typography>Full Name</Typography>
                    <TextField placeholder={userData.fullname} onChange={e => setData(c => { return { ...c, fullname: e.target.value } })} style={{ width: '25vw', marginTop: 15 }} size="small" id="outlined-basic" variant="outlined" />
                </div>
                <div style={{ marginTop: 20 }}>
                    <Typography>E-Mail Address</Typography>
                    <TextField onChange={e => setData(c => { return { ...c, email: e.target.value } })} style={{ width: '25vw', marginTop: 15 }} placeholder={userData.email} size="small" id="outlined-basic" variant="outlined" />
                </div>
                <div style={{ marginTop: 20 }}>
                    <Typography>Contact</Typography>
                    <TextField style={{ width: '25vw', marginTop: 15 }} size="small" id="outlined-basic" variant="outlined" />
                </div>
                <div style={{ marginTop: 20 }}>
                    <Typography>Company Name</Typography>
                    <TextField placeholder={userData.company_name} onChange={e => setData(c => { return { ...c, company_name: e.target.value } })} style={{ width: '25vw', marginTop: 15 }} size="small" id="outlined-basic" variant="outlined" />
                </div>
                {/*<div style={{ marginTop: 20 }}>
                    <Typography>Compamy Address</Typography>
                    <TextField multiline rows={4} size="small" id="outlined-basic" variant="outlined" placeholder="" style={{ width: '20rem', marginTop: 10 }} />
                </div>*/}
            </div>
            <div>
                <img src={Line} alt="line" />
            </div>
            <div style={{ width: '40%', height: '100%', display: 'flex', flexDirection: 'column', marginLeft: '6vw', justifyContent: 'space-between' }}>
                <div>
                    <div style={{ marginTop: 20 }}>
                        <Typography>Compamy Description</Typography>
                        <TextField defaultValue={userData.company_description} onChange={e => setData(c => { return { ...c, company_description: e.target.value } })} multiline rows={6} size="small" id="outlined-basic" variant="outlined" placeholder="" style={{ width: '20vw', marginTop: 10 }} />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <Typography>Compamy Logo</Typography>
                        <TextField multiline rows={6} size="small" id="outlined-basic" variant="outlined" placeholder="" style={{ width: '20vw', marginTop: 10 }} />
                    </div>
                    <div>
                        <Typography style={{
                            marginTop: '3rem',
                            width: '10rem',
                            height: '3rem',
                            backgroundColor: '#FFC749',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            cursor: 'pointer'
                        }}
                            onClick={handleSaveData}>Save Data
                        </Typography>
                    </div>
                </div>
                <div>
                    <Typography style={{
                        width: '6rem',
                        height: '2rem',
                        backgroundColor: '#e7e7e7',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        float: 'right',
                        cursor: 'pointer'
                    }}
                        onClick={handleSignOut}>Sign Out
                    </Typography>
                </div>
            </div>

        </div>
    )
}

export default DashboardProfile
