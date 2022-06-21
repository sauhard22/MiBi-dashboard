import React, { useState } from 'react'
import {
    makeStyles,
    Typography,
    TextField
} from '@material-ui/core'
import Plus from '../../assets/plus.svg'
import Minus from '../../assets/Minus.svg'
import Line from '../../assets/VerticalLine.svg'
import Arrow from '../../assets/arrowDashPost.svg'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
    root: {
        marginTop: 130,
        backgroundColor: '#fff',
        marginBottom: 50,
        marginLeft: 30,
        marginRight: 30,
        width: '100%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'row',
    },
    jobType: {
        marginRight: '2rem',
        backgroundColor: '#F1F1F1',
        width: '6rem',
        textAlign: 'center',
        eight: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        cursor: 'pointer'
    },
    jobType2: {
        marginRight: '2rem',
        backgroundColor: '#777777',
        width: '6rem',
        textAlign: 'center',
        eight: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        cursor: 'pointer',
        color:'#fff'
    }
})

function DashboardPost({ url, postJob, setPostJob }) {
    const classes = useStyles();

    const [jobType, setJobType] = useState({
        b1: false,
        b2: false,
        b3: false,
        b4: false
    })

    let [counter, setCounter] = useState(0)

    return (
        <div className={classes.root}>
            <div style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography style={{ fontSize: 24, fontWeight: 'bold' }}>Job Details</Typography>
                <div style={{ marginTop: 20 }}>
                    <Typography>Job Profile</Typography>
                    <TextField style={{ width: '25rem', marginTop: 15 }} size="small" id="outlined-basic" variant="outlined" onChange={(event) => setPostJob(e => { return { ...e, category: event.target.value } })} />
                </div>
                <div style={{ marginTop: 20 }}>
                    <Typography>Job Type</Typography>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                        <Typography onClick={() => { setPostJob(e => { return { ...e, jobType: 'Temporary' } }); setJobType({b1: !jobType.b1})}} className={jobType.b1 ? classes.jobType2 : classes.jobType}>Temporary</Typography>
                        <Typography onClick={() => { setPostJob(e => { return { ...e, jobType: 'Permanent' } });setJobType({b2: !jobType.b2}) }} className={jobType.b2 ? classes.jobType2 : classes.jobType}>Permanent</Typography>
                        <Typography onClick={() => { setPostJob(e => { return { ...e, jobType: 'Contract' } }); setJobType({b3: !jobType.b3})}} className={jobType.b3 ? classes.jobType2 : classes.jobType}>Contract</Typography>
                        <Typography onClick={() => { setPostJob(e => { return { ...e, jobType: 'Part Time' } }); setJobType({b4: !jobType.b4})}} className={jobType.b4 ? classes.jobType2 : classes.jobType}>Part Time</Typography>
                    </div>
                </div>
                <div style={{ marginTop: 20 }}>
                    <Typography>Number of Positions</Typography>
                    <div style={{ width: '8rem', borderWidth: 1, borderColor: '#777', borderStyle: 'solid', borderRadius: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'center' }}>
                        <img src={Minus} alt="minus" style={{ cursor: 'pointer' }} onClick={() => { counter > 0 ? setCounter(e => e = e - 1) : setCounter(0); setPostJob(e => { return { ...e, no_of_openings: counter } }) }} />
                        <Typography>{counter}</Typography>
                        <img src={Plus} alt="Plus" style={{ cursor: 'pointer' }} onClick={() => { setCounter(e => e = e + 1); setPostJob(e => { return { ...e, no_of_openings: counter } }) }} />
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20, alignItems: 'center', width: '30rem', justifyContent: 'space-between' }}>
                    <div>
                        <Typography>Salary</Typography>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '18rem', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                            <TextField size="small" id="outlined-basic" variant="outlined" placeholder="from" style={{ width: '8rem' }} onChange={(event) => setPostJob(e => { return { ...e, min_salary: event.target.value } })} />
                            <Typography>-</Typography>
                            <TextField size="small" id="outlined-basic" variant="outlined" placeholder="to" style={{ width: '8rem' }} onChange={(event) => setPostJob(e => { return { ...e, max_salary: event.target.value } })} />
                        </div>
                    </div>
                    <Typography>or</Typography>
                    <div>
                        <Typography>Fixed Salary</Typography>
                        <TextField size="small" id="outlined-basic" variant="outlined" placeholder="from" style={{ width: '8rem', marginTop: 10 }} onChange={(event) => setPostJob(e => { return { ...e, expectedSalary: event.target.value } })} />
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20, width: '25rem', justifyContent: 'space-between' }}>
                    <div>
                        <Typography>Start Date</Typography>
                        <TextField
                            id="date"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            size="small"
                            variant="outlined"
                            style={{ width: '10rem', marginTop: 10 }}
                            onChange={(event) => setPostJob(e => { return { ...e, startDate: event.target.value } })}
                        />
                    </div>
                    <div>
                        <Typography>Duration</Typography>
                        <TextField onChange={(event) => setPostJob(e => { return { ...e, duration: event.target.value } })}
                            size="small" id="outlined-basic" variant="outlined" placeholder="from" style={{ width: '8rem', marginTop: 10 }} />
                    </div>
                </div>
            </div>
            <div>
                <img src={Line} alt="line" />
            </div>
            <div style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', marginLeft: '6rem', justifyContent: 'space-between' }}>
                <div>
                    <div style={{ marginTop: 20 }}>
                        <Typography>Job Location</Typography>
                        <TextField onChange={(event) => setPostJob(e => { return { ...e, job_city: event.target.value } })}
                            size="small" id="outlined-basic" variant="outlined" placeholder="Eg. Lucknow" style={{ width: '20rem', marginTop: 10 }} />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <Typography>Compamy Name</Typography>
                        <TextField onChange={(event) => setPostJob(e => { return { ...e, company_name: event.target.value } })}
                            size="small" id="outlined-basic" variant="outlined" placeholder="" style={{ width: '20rem', marginTop: 10 }} />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <Typography>Compamy Description</Typography>
                        <TextField onChange={(event) => setPostJob(e => { return { ...e, companyDescription: event.target.value } })}
                            multiline rows={4} size="small" id="outlined-basic" variant="outlined" placeholder="" style={{ width: '20rem', marginTop: 10 }} />
                    </div>
                </div>
                <div>
                    <div style={{
                        float: 'right',
                        width: '6rem',
                        height: '6rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#FFC749',
                        borderRadius: '6rem'
                    }}>
                        <Link to={`${url}/PostCont`}><img src={Arrow} alt="arrow" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPost
