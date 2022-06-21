import { Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import Laptop from '../assets/laptop.png'

const useStyles = makeStyles({
    conatiner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#fbb03b',
        height: 420,
        marginTop: 50,
    },
    subTextWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    textWrapper: {
        padding: 10,
        margin: 50
    }
})

function Facts() {
    
    const classes = useStyles()

    return (
        <div className={classes.conatiner}>
            <div>
                <img src={Laptop} alt="laptop" />
            </div>
            <div className={classes.textWrapper}>
                <Typography style={{fontSize: 50, color: '#fff'}}>Some Statistical Facts</Typography>
                <div className={classes.subTextWrapper}>
                    <div>
                        <Typography style={{fontSize: 30, color: '#fff', fontWeight: 'bold', textAlign: 'left'}}>1000+</Typography>
                        <Typography style={{fontSize: 20, color: '#fff'}}>Workers</Typography>
                    </div>
                    <div>
                        <Typography style={{fontSize: 30, color: '#fff', fontWeight: 'bold', textAlign: 'left'}}>20+</Typography>
                        <Typography style={{fontSize: 20, color: '#fff'}}>Recruiters</Typography>
                    </div>
                    <div>
                        <Typography style={{fontSize: 30, color: '#fff', fontWeight: 'bold', textAlign: 'left'}}>10+</Typography>
                        <Typography style={{fontSize: 20, color: '#fff'}}>Categories</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facts
