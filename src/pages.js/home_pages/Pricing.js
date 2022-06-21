import React from 'react'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import RowingSharpIcon from '@material-ui/icons/RowingSharp';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';

import { Typography, makeStyles, SvgIcon } from '@material-ui/core';

const useStyles = makeStyles({
    icon: {
        width: '3rem',
        height: '3rem',
        marginBottom: '1.5rem'
    }
})

const CustomCard = ({ classes, icon, price, type, details1, details2, details3, width, priceSize, iconColor }) => {
    return (
        <div style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            width: '15rem',
            height: '25rem',
            justifyContent: 'center',
            borderStyle: 'solid',
            borderColor: '#efefef',
            borderWidth: 1,
            margin: '1rem'

        }}>
            <SvgIcon component={icon} className={classes.icon} style={{ color: iconColor }} />
            <Typography style={{
                fontSize: '2rem',
                marginBottom: '1rem'
            }}>{type}</Typography>
            <Typography style={{
                fontWeight: 'bold',
                fontSize: priceSize,
                marginBottom: '2rem'
            }}>{price}</Typography>
            <Typography style={{color: '#303132'}}>{details1}</Typography>
            <Typography style={{color: '#303132'}}>{details2}</Typography>
            <Typography  style={{ width: width }}>{details3}</Typography>
        </div>
    )
}

function Pricing() {

    const classes = useStyles()

    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '3rem', justifyContent: 'center'}}>
            <CustomCard classes={classes} iconColor="#fe397a" width='10rem' icon={PeopleOutlineIcon} priceSize="1rem" type="Partners" price="free" details1="(for Partners)" details2="Get Associated" details3="Earn up to 10k-20k commission" />
            <CustomCard classes={classes} iconColor="#10bb87" width='13rem' icon={RowingSharpIcon} priceSize="1rem" type="Workers" price="₹ 12" details1="(for Workers)" details2="Get listed for a year" details3="Avail basic introductory courses for 1 year" />
            <CustomCard classes={classes} iconColor="#5d78ff" icon={PermIdentityOutlinedIcon} type="Partners" priceSize="1rem" price="5% Of Workers Salary" details1="(for Recruiters)" details2="5% of the worker's Salary"
                details3="On demand skilled workers Management Services" />
        </div>
    )
}

export default Pricing
