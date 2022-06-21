import { Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import getWork from '../assets/getWork.png'
import income from '../assets/growYourIncome.png'
import financial from '../assets/financial.png'

const useStyles = makeStyles({
    title: {
        fontSize: '3rem',
        color: '#fbb03b'
    },
    subTitle: {
        color: '#777777'
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '5rem',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10rem'
    },
    img: {
        width: '3vw'
    },
    imgTitle: {
        fontSize: '1.5rem',
        padding: 10,
        color: '#777',
    },
    titleContainer: {
        width: '50%'
    },
    imgTitleContainer: {
        width: '25rem'
    }
})

function WhyToChoose() {

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.titleContainer} >
                <Typography className={classes.title}>Why To Choose Us</Typography>
                <Typography className={classes.subTitle}>First And Final We Are The Best</Typography>
            </div>
            <div className={classes.subContainer}>
                <div className={classes.imgTitleContainer}>
                    <img className={classes.img} src={getWork} alt="getWork" />
                    <Typography className={classes.imgTitle}>Get Work</Typography>
                </div>
                <div className={classes.imgTitleContainer}>
                    <img className={classes.img} src={income} alt="income" />
                    <Typography className={classes.imgTitle}>Grow Your Income</Typography>
                </div>
                <div className={classes.imgTitleContainer}>
                    <img className={classes.img} src={financial} alt="financial" />
                    <Typography className={classes.imgTitle}>Financial Inclusions</Typography>
                </div>
            </div>
        </div>
    )
}

export default WhyToChoose
