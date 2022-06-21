import React, { useState } from 'react'
import {
    makeStyles,
    Typography,
    TextField,
    Checkbox
} from '@material-ui/core'
import Plus from '../../assets/plus.svg'
import Minus from '../../assets/Minus.svg'
import Line from '../../assets/VerticalLine.svg'
import Arrow from '../../assets/arrowDashPost.svg'
import Arrow2 from '../../assets/LeftArrowDash.svg'
import axios from 'axios'

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
        height: 'auto'
    },
    workingHours: {
        marginLeft: 10,
        backgroundColor: '#F1F1F1',
        borderRadius: 10,
        width: '2rem',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    workingHours2: {
        marginLeft: 10,
        backgroundColor: '#777777',
        borderRadius: 10,
        width: '2rem',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        cursor: 'pointer'
    }
})

function DashboardPostSub({ postJob, setPostJob }) {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: true,
    });

    const [fromTime, setFromTime] = React.useState({
        am: false,
        pm: false,
    })

    const [toTime, setToTime] = React.useState({
        am: false,
        pm: false,
    })

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    let [counter, setCounter] = useState(0)

    const jwt = window.localStorage.getItem('jwt')

    const handlePublish = () => {
        var postData = new FormData()
        let forLength = Object.keys(postJob)
        for (let i = 0; i < forLength.length; i++) {
            postData.append(`${forLength[i]}`, postJob[forLength[i]])
        }
        console.log(postJob)
        axios({
            method: 'post',
            url: 'http://65.0.74.9/api/recruiter/job/',
            data: postData,
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': `Bearer ${jwt}`
            },
        }).then(res => console.log(res))
    }

    return (
        <div className={classes.root}>
            <div style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography style={{ fontSize: 24, fontWeight: 'bold' }}>Requirements</Typography>
                <div style={{ marginTop: 20 }}>
                    <Typography>Working Days</Typography>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10, }}>
                        <Typography style={{ width: '4rem', marginRight: 10, textAlign: 'center', backgroundColor: '#f1f1f1', color: '#000', borderRadius: 10 }}>Sun</Typography>
                        <Typography style={{ width: '4rem', marginRight: 10, textAlign: 'center', backgroundColor: '#f1f1f1', color: '#000', borderRadius: 10 }}>Mon</Typography>
                        <Typography style={{ width: '4rem', marginRight: 10, textAlign: 'center', backgroundColor: '#f1f1f1', color: '#000', borderRadius: 10 }}>Tue</Typography>
                        <Typography style={{ width: '4rem', marginRight: 10, textAlign: 'center', backgroundColor: '#f1f1f1', color: '#000', borderRadius: 10 }}>Wed</Typography>
                        <Typography style={{ width: '4rem', marginRight: 10, textAlign: 'center', backgroundColor: '#f1f1f1', color: '#000', borderRadius: 10 }}>Thu</Typography>
                        <Typography style={{ width: '4rem', marginRight: 10, textAlign: 'center', backgroundColor: '#f1f1f1', color: '#000', borderRadius: 10 }}>Fri</Typography>
                        <Typography style={{ width: '4rem', marginRight: 10, textAlign: 'center', backgroundColor: '#f1f1f1', color: '#000', borderRadius: 10 }}>Sat</Typography>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20, alignItems: 'center', width: '30rem', justifyContent: 'space-between' }}>
                    <div>
                        <Typography>Working Hours</Typography>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '18rem', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <TextField onChange={(event) => setPostJob(e => { return { ...e, workingHoursFrom: event.target.value } })}
                                    size="small" id="outlined-basic" variant="outlined" placeholder="from" style={{ width: '4rem' }} />
                                <Typography onClick={() => setFromTime({ am: !fromTime.am })} className={fromTime.am ? classes.workingHours2 : classes.workingHours}>AM</Typography>
                                <Typography onClick={() => setFromTime({ pm: !fromTime.pm })} className={fromTime.pm ? classes.workingHours2 : classes.workingHours}>PM</Typography>
                            </div>
                            <Typography>-</Typography>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <TextField onChange={(event) => setPostJob(e => { return { ...e, workingHoursTo: event.target.value } })}
                                    size="small" id="outlined-basic" variant="outlined" placeholder="to" style={{ width: '4rem' }} />
                                <Typography onClick={() => setToTime({ am: !toTime.am })} className={toTime.am ? classes.workingHours2 : classes.workingHours}>AM</Typography>
                                <Typography onClick={() => setToTime({ pm: !toTime.pm })} className={toTime.pm ? classes.workingHours2 : classes.workingHours}>PM</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: 20 }}>
                    <Typography>Skills</Typography>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                        <Typography style={{ marginRight: '2rem', backgroundColor: '#F1F1F1', width: '6rem', textAlign: 'center', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>Add Skills</Typography>
                    </div>
                </div>
                <div style={{ marginTop: 20 }}>
                    <Typography>Add Experience</Typography>
                    <div style={{ width: '8rem', borderWidth: 1, borderColor: '#777', borderStyle: 'solid', borderRadius: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'center' }}>
                        <img src={Minus} alt="minus" style={{ cursor: 'pointer' }} onClick={() => { counter >= 0 ? setCounter(e => e = e - 1) : setCounter(0); setPostJob(e => { return { ...e, experience: counter } }) }} />
                        <Typography>{counter}</Typography>
                        <img src={Plus} alt="Plus" style={{ cursor: 'pointer' }} onClick={() => { setCounter(e => e = e + 1); setPostJob(e => { return { ...e, experience: counter } }) }} />
                    </div>
                </div>
                <div style={{ marginTop: 20 }}>
                    <Typography>Skills</Typography>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                        <Typography style={{ marginRight: '2rem', backgroundColor: '#F1F1F1', width: '6rem', textAlign: 'center', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>Add Skills</Typography>
                    </div>
                </div>
                <div style={{ marginTop: 20 }}>
                    <Typography>Description (Optional)</Typography>
                    <TextField onChange={(event) => setPostJob(e => { return { ...e, description: event.target.value } })}
                        multiline rows={4} size="small" id="outlined-basic" variant="outlined" placeholder="" style={{ width: '20rem', marginTop: 10 }} />
                </div>
            </div>
            <div>
                <img src={Line} alt="line" />
            </div>
            <div style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'column', marginLeft: '6rem', justifyContent: 'space-between' }}>
                <div>
                    <div style={{ marginTop: 20 }}>
                        <Typography>Last Date to Apply</Typography>
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
                        />
                    </div>
                    <div style={{ marginTop: 20 }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Checkbox
                                checked={state.checkedA}
                                onChange={handleChange}
                                name="checkedA"
                                style={{ color: '#FFC749' }}
                            />
                            <Typography>Suggest to matching profile only</Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Checkbox
                                checked={state.checkedA}
                                onChange={handleChange}
                                name="checkedA"
                                style={{ color: '#FFC749' }}
                            />
                            <Typography>Notify former employers</Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Checkbox
                                checked={state.checkedA}
                                onChange={handleChange}
                                name="checkedA"
                                style={{ color: '#FFC749' }}
                            />
                            <Typography>Notify saved profile</Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Checkbox
                                checked={state.checkedA}
                                onChange={handleChange}
                                name="checkedA"
                                style={{ color: '#FFC749' }}
                            />
                            <Typography>Share my contact details with job description</Typography>
                        </div>
                    </div>
                    <div style={{ marginTop: 20, display: ' flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div>
                            <Typography>Last Date to Apply</Typography>
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
                            />
                        </div>
                        <Typography style={{
                            marginLeft: '8rem',
                            width: '10rem',
                            height: '3rem',
                            backgroundColor: '#FFC749',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            cursor: 'pointer'
                        }}>Publish Later</Typography>
                    </div>
                    <div>
                        <Typography style={{
                            marginTop: '3rem',
                            width: '10rem',
                            height: '3rem',
                            backgroundColor: '#FFC749',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            cursor: 'pointer'
                        }}
                            onClick={handlePublish}>Publish Now
                        </Typography>
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
                        borderRadius: '6rem',
                        cursor: 'pointer'
                    }}>
                        <img src={Arrow2} alt="arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPostSub
