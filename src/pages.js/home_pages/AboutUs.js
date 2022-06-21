import React from 'react'
import img1 from '../../assets/AboutUs/Shiva.jpeg'
import img2 from '../../assets/AboutUs/Niraj.jpg'
import img3 from '../../assets/AboutUs/Sanchit.jpg'
import { Typography, makeStyles, SvgIcon } from '@material-ui/core';

const useStyles = makeStyles({
    icon: {
        width: '20rem',
        height: '20rem',
        marginBottom: '1.5rem',
        borderRadius: 15
    }
})

const CustomCard = ({ classes, icon, price, type, details1, details2, details3, width, priceSize, iconColor }) => {
    return (
        <div style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '2rem'

        }}>
            <img src={icon} alt="img" className={classes.icon} />
            <Typography style={{ color: '#00000', fontSize: '1.5rem', fontWeight: 'bold' }}>{details1}</Typography>
            <Typography style={{ color: '#aaaaaa', fontSize: '1.2rem' }}>{details2}</Typography>
            <Typography style={{ color: '#aaaaaa', fontSize: '1rem' }}>{details3}</Typography>
        </div>
    )
}

function AboutUs() {

    const classes = useStyles()

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '3rem', justifyContent: 'center' , marginBottom: '5rem'}}>
                <CustomCard
                    classes={classes}
                    iconColor="#fe397a"
                    width='10rem'
                    icon={img1}
                    priceSize="1rem"
                    type="Partners"
                    price="free"
                    details1="Shiva Sharma"
                    details2="Co-Founder and CEO"
                    details3="IIT Indore"
                />
                <CustomCard
                    classes={classes}
                    iconColor="#fe397a"
                    icon={img2}
                    width='10rem'
                    priceSize="1rem"
                    type="Partners"
                    price="free"
                    details1="Niraj Saini"
                    details2="Co-Founder and CMO"
                    details3="IIT Indore"
                />
                <CustomCard
                    classes={classes}
                    iconColor="#fe397a"
                    icon={img3}
                    width='10rem'
                    priceSize="1rem"
                    type="Partners"
                    price="free"
                    details1="Sanchit Arora"
                    details2="Co-Founder and CTO"
                    details3="IIIT Hyderabad"
                />
            </div>
            <div style={{ paddingLeft: '10rem', paddingRight: '10rem', paddingTop: '4rem', paddingBottom: '4rem', backgroundColor: '#f6f6f6' }}>
                <Typography style={{ textAlign: 'left', color: '#f9b53c', fontSize: '3rem' }}>About MiBi</Typography>
                <div>
                    <Typography style={{ textAlign: 'left', marginTop: '1rem' , fontSize: '1.3rem' }}>MiBi upskills the blue-collar workers with training courses and then connects with recruiters for matching jobs with all documentation handled by MiBi. With complete monitoring of worker's salary & needs, MiBi makes them financially literate by helping them manage their finances and makes it super easy to save, invest, or take a loan with MiBi's app.</Typography>
                    <Typography style={{ textAlign: 'left', marginTop: '1rem' , fontSize: '1.3rem' }}>Also, MiBi is a one-stop solution for recruiters where they can hire workers from the unorganised sector and manage their salaries, attendance, holidays, etc. Moreover, they can employ properly trained and Background-checked workers or train existing employees according to their industry needs.</Typography>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
