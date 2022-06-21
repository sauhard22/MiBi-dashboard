import React from 'react'
import { makeStyles, Typography, TextField, createTheme } from '@material-ui/core'
import Logo from '../assets/Logo.png'
import ThinkImg from '../assets/signUpImg.svg'
import Facebook from '../assets/facebook.svg'
import Linkedin from '../assets/linkedin.svg'
import Instagram from '../assets/instagram.svg'
import Line from '../assets/line.svg'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LoginImg from '../assets/loginImg.svg'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router'

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 960,
            md: 1280,
            lg: 1440,
            xl: 1920,
        },
    },
})

const useStyles = makeStyles({
    container: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            width: '100vw'
        }
    },
    subContainer: {
        width: '50vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            visibility: 'hidden',
            display: 'none'
        }
    },
    subContainer2: {
        width: '50vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FDBF44',
        opacity: 0.8,
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    }
})


function Login({ isVerified, setIsVerified }) {
    const classses = useStyles()

    const [pageState, setPageState] = React.useState(null)

    const [loginData, setLoginData] = React.useState({
        email: '',
        password: ''
    })

    var loginFormData = new FormData()

    const history = useHistory('')

    const getToken = () => {
        var tokenData = new FormData();
        tokenData.append('username', loginData.email)
        tokenData.append('password', loginData.password)

        axios({
            method: "post",
            url: `http://65.0.74.9/api/user/gettoken/`,
            data: tokenData,
            headers: { "Content-Type": "multipart/form-data" },
        }).then(res => {
            if (res.status === 401) {
                alert('wrong password')
            } else {
                console.log(res);
                localStorage.setItem('jwt', res.data.access); localStorage.setItem('isVerified', true); handleLogin();
            }
        })
            .catch(e => {
                if (e.response) {
                    console.log(e.response.status)
                    alert('wrong email/password')
                }
            })

    }

    const handleLogin = () => {

        loginFormData.append('email', loginData.email)
        loginFormData.append('password', loginData.password)

        axios({
            method: 'post',
            url: 'http://65.0.74.9/api/user/login_recruiter/',
            data: loginFormData,
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': `Bearer ${window.localStorage.getItem('jwt')}`
            },
        }).then(res => {
            console.log(res.data);
            if (res.data.status) {
                setIsVerified(true)
                history.push('/dashboard/home')
            } else {
                alert('wrong password')
            }
        })
    }
    const isLoggedIn = window.localStorage.getItem('isVerified') === "true"

    if (isLoggedIn) {
        return <Redirect to="/dashboard/home" />
    }

    return (
        <div className={classses.container}>
            <div className={classses.subContainer}>
                <div >
                    <img src={Logo} alt="logo" style={{ width: 100, marginTop: 30, marginLeft: 30 }} />
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                        <Typography style={{ textAlign: 'center', fontFamily: 'poppins', fontSize: 35, fontWeight: 700 }}>Happy to see you again</Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 70 }}>
                        <img src={LoginImg} alt="img" />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
                    <Typography style={{ width: 500, textAlign: 'center', fontFamily: 'poppins', fontSize: 20 }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </Typography>
                </div>
                <div>
                    <Typography style={{ textAlign: 'center', marginBottom: 50, fontFamily: 'poppins', fontSize: 20 }}>New? <span style={{ color: '#FDBF44', cursor: 'pointer' }}> <Link to="/signup"> Sign Up </Link> </span></Typography>
                </div>
            </div>
            <div className={classses.subContainer2}>
                {pageState === "send otp" ?
                    <div style={{ width: '60%' }}>
                        <div>
                            <Typography style={{ fontFamily: 'poppins', fontSize: 20, fontWeight: 'bold', marginTop: 30 }}>Login With Phone</Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Enter Otp"
                                variant="outlined"
                                style={{ width: '100%', marginTop: 30 }}
                            />
                        </div>
                        <div>
                            <Link to="/dashboard/home"><Typography
                                style={{
                                    fontFamily: 'poppins',
                                    width: 100,
                                    height: 50,
                                    backgroundColor: '#fff',
                                    marginTop: 20,
                                    borderRadius: 20,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                Verify Otp
                            </Typography></Link>
                        </div>
                    </div>
                    :
                    <div style={{ width: '60%' }}>
                        <div style={{ marginTop: 50 }}>
                            <Typography style={{ fontFamily: 'poppins', fontSize: 20, fontWeight: 'bold' }}>Login With Password</Typography>
                        </div>
                        <div style={{ height: 500, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ marginTop: 50 }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Email"
                                        variant="outlined"
                                        style={{ width: '100%', marginBottom: 20 }}
                                        onChange={e => setLoginData(c => { return { ...c, email: e.target.value } })}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        onChange={e => setLoginData(c => { return { ...c, password: e.target.value } })}
                                    />
                                </div>
                            </div>
                            <Typography style={{ fontFamily: 'poppins', marginTop: 30 }}>Remember Me</Typography>
                            <div>
                                <Typography style={{
                                    fontFamily: 'poppins',
                                    width: 100,
                                    height: 50,
                                    backgroundColor: '#fff',
                                    marginTop: 20,
                                    borderRadius: 20,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }}
                                    onClick={getToken}>Login</Typography>
                            </div>
                            {/*<Typography style={{ textAlign: 'center', fontFamily: 'poppins', fontSize: 30 }}>or</Typography>
                            <div>
                                <div>
                                    <Typography style={{ fontFamily: 'poppins', fontSize: 20, fontWeight: 'bold', marginTop: 30 }}>Login With Phone</Typography>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Phone Number"
                                        variant="outlined"
                                        style={{ width: '100%', marginTop: 30 }}
                                    />
                                </div>
                                <div onClick={() => setPageState("send otp")}>
                                    <Typography style={{ fontFamily: 'poppins', width: 100, height: 50, backgroundColor: '#fff', marginTop: 20, borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} >Send Otp</Typography>
                                </div>
                            </div>*/}
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default Login
