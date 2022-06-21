import { Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import Mobile from '../assets/mobile.png'

const useStyles = makeStyles({
    img: {
        width: 1000,
        marginTop: 200,
        marginRight: 100
    },
    conatiner: {
        backgroundColor: '#fbb03b',
        display: 'flex',
        alignItems: 'center',
        height: '75vh',
        marginTop: 50,
        justifyContent: 'center'
    },
    textContainer: {
        alignItems: 'flex-end',
        display: 'flex',
        flexDirection: 'column',
        width: 350,
    }
})

function DownloadApp() {

    const classes = useStyles()

    return (
        <div className={classes.conatiner}>
            <div>
                <img className={classes.img} src={Mobile} alt="mobile" />
            </div>
            <div className={classes.textContainer}>
                <Typography style={{ fontSize: 45, color: '#fff', fontWeight: 'bold' }}>DOWNLOAD</Typography>
                <Typography style={{ fontSize: 45, color: '#fff' }}>MIBI APP NOW!</Typography>
                <Typography style={{ fontSize: 13, color: '#fff' }}>All it takes is 30 seconds to Download</Typography>
                <Typography style={{ fontSize: 13, color: '#fff' }}>Fast, Simple and Delightful</Typography>
            </div>
        </div>
    )
}

export default DownloadApp
