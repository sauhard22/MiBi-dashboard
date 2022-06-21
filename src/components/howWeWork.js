import { Typography, makeStyles, CircularProgress } from '@material-ui/core'
import React from 'react'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles({
    subTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 35
    }
})

function HowWeWork() {
     const classes = useStyles()
    return (
        <div>
            <Typography style={{ marginTop: 25, fontSize: 25 }}>How Mibi Services Work</Typography>
            <Typography style={{ marginTop: 30, fontSize: 30, color: '#fbb03b'  }}>Job Seeker</Typography>
            <div className={classes.subTitle}>
            
                <Typography style={{ width: 180, fontSize: 20, color: '#777777', display: 'flex', alignItems: 'center', justifyContent: 'center'  }}><CheckCircleOutlineIcon style={{color:"#fbb03b"}}/>Register</Typography>
                <Typography style={{ width: 180, fontSize: 20, color: '#777777', display: 'flex', alignItems: 'center', justifyContent: 'center'  }}><CheckCircleOutlineIcon style={{color:"#fbb03b"}}/>Skill Mapping</Typography>
                <Typography style={{ width: 180, fontSize: 20, color: '#777777', display: 'flex', alignItems: 'center', justifyContent: 'center'  }}><CheckCircleOutlineIcon style={{color:"#fbb03b"}}/>Listed</Typography>
                <Typography style={{ width: 180, fontSize: 20, color: '#777777', display: 'flex', alignItems: 'center', justifyContent: 'center'  }}><CheckCircleOutlineIcon style={{color:"#fbb03b"}}/>Hired</Typography>
            </div>
            <Typography style={{ marginTop: 40, fontSize: 30, color: '#fbb03b' }}>For Recruiter</Typography>
            <div className={classes.subTitle}>
                <Typography style={{ width: 180, fontSize: 20, color: '#777777', display: 'flex', alignItems: 'center', justifyContent: 'center'  }}><CheckCircleOutlineIcon style={{color:"#fbb03b"}}/>Register</Typography>
                <Typography style={{ width: 180, fontSize: 20, color: '#777777', display: 'flex', alignItems: 'center', justifyContent: 'center'  }}><CheckCircleOutlineIcon style={{color:"#fbb03b"}}/>Post Job</Typography>
                <Typography style={{ width: 180, fontSize: 20, color: '#777777', display: 'flex', alignItems: 'center', justifyContent: 'center'  }}><CheckCircleOutlineIcon style={{color:"#fbb03b"}}/>Find Best</Typography>
            </div>
        </div>
    )
}

export default HowWeWork
