import React from 'react'
import {
    Button,
    Typography,
    AppBar,
    Toolbar,
    makeStyles,
    IconButton
} from '@material-ui/core'
import Logo from '../assets/Logo.png'
import { Link, useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    nav: {
        backgroundColor: 'rgba(0,0,0,0)',
        boxShadow: 'none',
    },
    img: {
        height: '3.8rem',
        padding: '20px 0px 20px',
    },
    navContainer: {
        padding: '0px 40px 0 40px'
    },
    navContent: {
        color: '#222222',
    },
    optionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '32rem',
        justifyContent: 'space-between'
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '42rem'
    },
    button1: {
        color: '#fff',
        backgroundColor: '#fbb03b',
        width: '8rem',
        height: '3rem',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '1.25vw',
        textDecoration: 'none',
        cursor: 'pointer'
    }
})

function Navbar() {

    const classes = useStyles()

    const history = useHistory()

    const handleClick = () => {
        history.push('/signup')
        window.location.reload()
    }

    return (
        <div>
            <AppBar className={classes.nav} position="static">
                <Toolbar className={classes.navContainer}>
                    <div style={{ flexGrow: 1, display: 'flex' }}>
                        <img src={Logo} alt="MiBi" className={classes.img} />
                    </div>
                    <div className={classes.contentContainer}>
                        <div className={classes.optionsContainer}>
                            <Link to="/home/main"><Typography className={classes.navContent}>Home</Typography></Link>
                            <Link to="/home/partners"><Typography className={classes.navContent}>Our Partners</Typography></Link>
                            <Link to="/home/pricing"><Typography className={classes.navContent}>Pricing</Typography></Link>
                            <Link to="/home/about-us"><Typography className={classes.navContent}>About Us</Typography></Link>
                            <Typography className={classes.navContent}>Contact Us</Typography>
                        </div>
                        <Typography onClick={handleClick} className={classes.button1}>Hire Now!</Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
