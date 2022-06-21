import { Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import BannerImg from '../assets/BannerImg.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5rem',
    },
    bannerTitle: {
        fontSize: '2.5vw',
        lineHeight: '2.5vw',
        textAlign: 'left',
        marginRight: '5vw',
        marginBottom: '0.9vw',
        width: '29vw'
    },
    bannerSubTitle: {
        fontSize: '1vw',
        textAlign: 'left',
        marginBottom: '1vw'
    },
    bannerButton: {
        backgroundColor: '#fbb03b',
        width: '8vw',
        height: '2.3vw',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 50,
        color : '#FFF'
    },
    bannerButton2: {
        backgroundColor: '#fbb03b',
        width: '10vw',
        height: '2.3vw',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 50,
        color : '#FFF'
    },
    titleContainer: {
        
    }
})

function Banner() {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Carousel  width ='50vw' showIndicators={false} showArrows={false} autoPlay={true} interval = {2000} infiniteLoop={true}>
                <div className={classes.titleContainer}>
                    <Typography className={classes.bannerTitle}><span style={{ fontWeight: 'bold' }}>MiBi</span>: Get A Job</Typography>
                    <Typography className={classes.bannerSubTitle}>An initiative to organise the unorganised</Typography>
                    <Typography className={classes.bannerButton2}><Link style={{color: '#fff', textDecoration: 'none'}} to="/signup">Download the App now</Link></Typography>
                </div>
                <div className={classes.titleContainer}>
                    <Typography className={classes.bannerTitle}><span style={{ fontWeight: 'bold' }}>Or</span> Hire Workers Easily</Typography>
                    <Typography className={classes.bannerSubTitle}>An initiative to organise the unorganised</Typography>
                    <Typography className={classes.bannerButton}><Link style={{color: '#fff', textDecoration: 'none'}} to="/signup">Hire Now!</Link></Typography>
                </div>
                <div className={classes.titleContainer}>
                    <Typography className={classes.bannerTitle}><span style={{ fontWeight: 'bold' }}>Or</span> become a partner</Typography>
                    <Typography className={classes.bannerSubTitle}>An initiative to organise the unorganised</Typography>
                    <Typography className={classes.bannerButton}><Link style={{color: '#fff', textDecoration: 'none'}} to="/signup">Sign Up!</Link></Typography>
                </div>
            </Carousel>
            <div>
                <img style={{ width: '30vw' }} src={BannerImg} alt="BannerImg" />
            </div>
        </div>
    )
}

export default Banner
