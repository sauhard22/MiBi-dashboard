import { Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import Logo from '../assets/Logo.png'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: 100
    },
    subContainer: {
        width: '50vw',
        background: '#fff',
        height: '50vh'
    },
    subContainer2: {
        width: '50vw',
        background: '#fff',
        height: '50vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

function Footer() {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.subContainer2}>
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <img src={Logo} style={{ width: 200 }} alt="logo" />
                    <div>
                        <Typography style={{ width: 250, textAlign: 'left', fontSize: '1rem', marginTop: 30, marginBottom: 30, color: '#777' }}>
                            1. Incubation Center IIT Indore, Simrol, Indore, Madhya Pradesh 452020.
                        </Typography>
                        <Typography style={{ width: 250, textAlign: 'left', fontSize: '1rem', marginTop: 30, marginBottom: 30, color: '#777' }}>
                            2. Ward No. 3, Via-Khuri, Sikar, Rajasthan 332315
                        </Typography>
                        <Typography style={{ width: 250, textAlign: 'left', fontSize: '1rem', marginTop: 30, marginBottom: 30, color: '#777' }}>
                            +91 6265700389
                        </Typography>
                        <Typography style={{ width: 250, textAlign: 'left', fontSize: '1rem', marginTop: 30, marginBottom: 30, color: '#777' }}>
                            Support@Mibiservice.Com
                        </Typography>
                    </div>
                </div>
                <div style={{marginLeft: 50}}>
                    <Typography style={{ textAlign: 'left', marginTop: 50, marginBottom: 30, fontSize: '1.5rem', width: 250 }}>App & Integration</Typography>
                    <div>
                        <Typography style={{ textAlign: 'left', marginTop: 25, marginBottom: 25, color: '#777' }}>Home</Typography>
                        <Typography style={{ textAlign: 'left', marginTop: 25, marginBottom: 25, color: '#777' }}>Our Partners</Typography>
                        <Typography style={{ textAlign: 'left', marginTop: 25, marginBottom: 25, color: '#777' }}>About</Typography>
                        <Typography style={{ textAlign: 'left', marginTop: 25, marginBottom: 25, color: '#777' }}>Contact Us</Typography>
                        <Typography style={{ textAlign: 'left', marginTop: 25, marginBottom: 25, color: '#777' }}>Download App</Typography>
                    </div>
                </div>
                <div style={{width: 500}}>
                    <Typography style={{ textAlign: 'left', marginTop: 50, marginBottom: 30, fontSize: '1.5rem' }}>About MiBi</Typography>
                    <Typography style={{ textAlign: 'left', marginTop: 30, marginBottom: 30, width: 500, fontSize: '1rem', color: '#777' }}>We Serve The Unorganized Sector Workforce By Upskilling, Hiring, And Personalized Financial Literacy And Management Solutions Like Saving, Investing, Etc., Through A Seamless AI-Powered Platform</Typography>
                </div>
            </div>
        </div>
    )
}

export default Footer
