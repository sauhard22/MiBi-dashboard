import React, { useState } from 'react'
import { makeStyles, Typography, TextField, createTheme } from '@material-ui/core'
import Logo from '../assets/Logo.png'
import ThinkImg from '../assets/signUpImg.svg'
import Facebook from '../assets/facebook.svg'
import Linkedin from '../assets/linkedin.svg'
import Instagram from '../assets/instagram.svg'
import Line from '../assets/line.svg'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link, Redirect, useHistory } from 'react-router-dom'
import axios from 'axios'

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
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FDBF44',
        opacity: 0.8,
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    subContainer3: {
        width: '50vw',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FDBF44',
        opacity: 0.8,
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    }
})

// const url = "http://65.0.74.9/api"
const url = " http://65.0.74.9/api"

function SignUp({ isVerified, setIsVerified }) {

    const classses = useStyles()

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        city: '',
        state: '',
        email: '',
        phone: '',
        pincode: '',
        company: '',
        industry: '',
        password: '',
        confirmPassword: '',
    })

    const [otp, setOtp] = useState('')

    const [clicked, setClicked] = useState('signup')

    // var bodyFormData = new FormData()

    // bodyFormData.append('firstname', formData.firstname)
    // bodyFormData.append('lastname', formData.lastname)
    // bodyFormData.append('city', formData.city)



    const history = useHistory()

    const formSubmit = () => {

        var bodyFormData = new FormData();

        var fullName = formData.firstname + ' ' + formData.lastname

        bodyFormData.append('fullname', fullName);
        bodyFormData.append('email', formData.email);
        bodyFormData.append('company_name', formData.company);
        bodyFormData.append('password', formData.password);

        axios({
            method: "post",
            url: 'http://65.0.74.9/api/user/signup_recruiter/',
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        }).then(res => { console.log(res); getToken(); }).catch(e => console.log(e))
    }

    const getToken = () => {
        var tokenData = new FormData();
        tokenData.append('username', formData.email)
        tokenData.append('password', formData.password)

        axios({
            method: "post",
            url: `${url}/user/gettoken/`,
            data: tokenData,
            headers: { "Content-Type": "multipart/form-data" },
        }).then(res => { console.log(res.data); localStorage.setItem('jwt', res.data.access); localStorage.setItem('isVerified', true); history.push('/dashboard/home') }).catch(e => console.log(e))

    }

    const handleSubmit = () => {
        console.log(window.innerWidth);
        console.log(formData);
        if (formData.confirmPassword === formData.password) {
            formSubmit();
        }

        // setClicked('verify')
    }

    const verify = () => {

        console.log(formData.phone, otp)

        var otpData = new FormData()
        otpData.append('contact', formData.phone)
        otpData.append('token', otp)



        // axios.post({
        //     method: "post",
        //     url: `${url}/user/otp/verify/`,
        //     // url: 'http://65.0.74.9/api/user/otp/verify/',
        //     data: otpData,
        //     config: {headers: { "Content-Type": "multipart/form-data" }},
        // })


        axios({
            method: 'post',
            url: `${url}/user/otp/verify/`,
            data: otpData,
            headers: { "Content-Type": "multipart/form-data" }
        }).then(res => res.data.status).then(status => {

            if (status) {
                getToken();
                // setIsVerified(status)
                localStorage.setItem('isVerified', status);
                if (status) {
                    history.push('/dashboard/home')
                }
            }
            else {
                alert('enter otp again')
            }
        }).catch(e => console.log(e))



        // if (localStorage.getItem('jwt')) {
        //     <Redirect to="/dashboard/home" />
        // } else {
        //     alert('enter otp again')
        // }
    }

    const handleVerify = () => {
        verify();

    }

    const isLoggedIn = window.localStorage.getItem('isVerified') === "true"

    if (isLoggedIn) {
        return <Redirect to="/dashboard/home" />
    }

    return (
        <div className={classses.container}>
            <div className={classses.subContainer}>
                <div>
                    <img src={Logo} alt="logo" style={{ width: 100, marginTop: 30, marginLeft: 30 }} />
                </div>
                <div>
                    <Typography style={{ textAlign: 'center', fontFamily: 'poppins', fontWeight: 700, fontSize: 40 }}>Just one step away to join us!</Typography>
                    <Typography style={{ textAlign: 'center', fontFamily: 'poppins', fontSize: 35 }}>Please get registered and start hiring.</Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography style={{ textAlign: 'center', width: 500, marginTop: 20, fontFamily: 'poppins', fontSize: 18 }}>Amet minim mollit non deserunt
                        ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.</Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={ThinkImg} alt="think" />
                </div>
                <div>
                    <Typography style={{ textAlign: 'center', marginBottom: 50, fontFamily: 'poppins', fontSize: 20 }}>Already have an account ? <span style={{ color: '#FDBF44', cursor: 'pointer' }}> <Link to="/login"> Click here </Link> </span></Typography>
                </div>
            </div>
            {clicked === 'signup' ?
                <div className={classses.subContainer2}>
                    <form>
                        <div>
                            <Typography style={{ textAlign: 'center', fontFamily: 'poppins', fontWeight: 500, fontSize: 30, marginTop: 40 }}>Hiring workers is easy now</Typography>
                        </div>
                        <div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 75, marginRight: 75, marginBottom: 50, marginTop: 30 }}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="First Name"
                                    variant="outlined"
                                    autoFocus={true}
                                    style={{ width: '48%' }}
                                    onChange={(event) => setFormData(e => { return { ...e, firstname: event.target.value } })}
                                />
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Last Name"
                                    variant="outlined"
                                    autoFocus={true}
                                    style={{ width: '48%' }}
                                    onChange={(event) => setFormData(e => { return { ...e, lastname: event.target.value } })}
                                />
                            </div>
                            <div style={{ justifyContent: 'center', display: 'flex', marginLeft: 75, marginRight: 75, marginBottom: 50 }}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Company Name"
                                    variant="outlined"
                                    autoFocus={true}
                                    style={{ width: '100%' }}
                                    onChange={(event) => setFormData(e => { return { ...e, company: event.target.value } })}
                                />
                            </div>
                            <div style={{ justifyContent: 'center', display: 'flex', marginLeft: 75, marginRight: 75, marginBottom: 50 }}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Industry"
                                    variant="outlined"
                                    autoFocus={true}
                                    style={{ width: '100%' }}
                                    onChange={(event) => setFormData(e => { return { ...e, industry: event.target.value } })}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 75, marginRight: 75, marginBottom: 50 }}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Email ID"
                                    variant="outlined"
                                    autoFocus={true}
                                    style={{ width: '48%' }}
                                    onChange={(event) => setFormData(e => { return { ...e, email: event.target.value } })}
                                />
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Phone"
                                    variant="outlined"
                                    autoFocus={true}
                                    style={{ width: '48%' }}
                                    onChange={(event) => setFormData(e => { return { ...e, phone: event.target.value } })}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 75, marginRight: 75 }}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Password"
                                    variant="outlined"
                                    autoFocus={true}
                                    style={{ width: '48%' }}
                                    type="password"
                                    onChange={(event) => setFormData(e => { return { ...e, password: event.target.value } })}
                                />
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Confirm Password"
                                    variant="outlined"
                                    autoFocus={true}
                                    style={{ width: '48%' }}
                                    type="password"
                                    onChange={(event) => setFormData(e => { return { ...e, confirmPassword: event.target.value } })}
                                />
                            </div>
                            {formData.password !== formData.confirmPassword && formData.confirmPassword !== '' ? <Typography style={{ marginLeft: 75, marginTop: 30 }}>Password doesn't match</Typography> : null}
                        </div>
                        <div>
                            <Typography style={{
                                textAlign: 'center',
                                fontFamily: 'poppins',
                                fontWeight: 300,
                                fontSize: 16,
                                marginBottom: 30,
                                marginTop: 30
                            }}>
                                By signing up you agree to MiBi services <span style={{ color: '#fff', fontWeight: 700 }}>
                                    Terms of Service </span> and <span style={{ color: '#fff', fontWeight: 700 }}>Privacy Policy.</span></Typography>
                            <div>
                                <Typography style={{
                                    marginLeft: 75,
                                    width: 120,
                                    height: 50,
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: '#000',
                                    color: '#fff',
                                    borderRadius: 10,
                                    marginBottom: 35,
                                    paddingLeft: 20,
                                    cursor: 'pointer'
                                }}
                                    onClick={handleSubmit}
                                >Sign Up<ArrowForwardIcon style={{ marginLeft: 20 }} /></Typography>
                            </div>
                        </div>
                    </form>
                </div> :
                <div className={classses.subContainer3}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 75, marginRight: 75 }}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Enter Otp"
                            variant="outlined"
                            autoFocus={true}
                            style={{ width: '75%', marginTop: 50 }}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                    </div>
                    <div>
                        <Typography style={{
                            marginLeft: 75,
                            width: 120,
                            height: 50,
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: '#000',
                            color: '#fff',
                            borderRadius: 10,
                            marginBottom: 35,
                            paddingLeft: 20,
                            cursor: 'pointer',
                            marginTop: 50
                        }}
                            onClick={(e) => { handleVerify(); }}
                        >Verify<ArrowForwardIcon style={{ marginLeft: 20 }} /></Typography>
                    </div>
                </div>}

        </div>
    )
}

export default SignUp