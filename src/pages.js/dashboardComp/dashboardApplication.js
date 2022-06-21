import React, { useEffect, useState } from 'react'
import { Card, Typography } from '@material-ui/core'
import { useParams } from 'react-router'
import axios from 'axios'

const CustomCard = ({ id }) => {
    return (
        <Card style={{ width: '25rem', height: '15rem', display: 'flex', flexDirection: 'row', margin: '1rem' }}>
            <div style={{ width: '35%', backgroundColor: '#FFC749' }}>
                <Typography>{id}</Typography>
            </div>
            <div style={{ width: '65%', backgroundColor: '#efefef' }}>
                <Typography>2</Typography>
            </div>
        </Card>
    )
}

const drawerWidth = 200

function DashboardApplication() {

    const { job_id } = useParams()

    const jwt = window.localStorage.getItem('jwt')

    const [application, setApplications] = useState()

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://65.0.74.9/api/command/get_applicants_by_job_id',
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        }).then(res => { console.log(res.data); setApplications(res.data) })
    }, [])

    return (
        <div style={{ marginTop: 80 }}>
            <div style={{ width: `calc(100vw - ${drawerWidth}px)` }}>
                <div style={{ marginLeft: '10rem', marginRight: '10rem', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                    <CustomCard id={job_id} />
                    <CustomCard id={job_id} />
                    <CustomCard id={job_id} />
                    <CustomCard id={job_id} />
                    <CustomCard id={job_id} />
                </div>
            </div>
        </div>
    )
}

export default DashboardApplication
