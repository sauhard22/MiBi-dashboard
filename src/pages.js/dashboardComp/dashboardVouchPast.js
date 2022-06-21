import React from 'react'
import {
    Typography,
    Switch,
    Radio
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import MoreVertIcon from '@material-ui/icons/MoreVert';

const drawerWidth = 200

// const theme = createTheme({
//     mixins: {
//         toolbar: {
//             minHeight: 56
//         },
//     }
// })

const data = [
    {
        name: 'Sunita',
        role: 'Data Entry',
        duration: '6 Months',
    },
    {
        name: 'Rakesh',
        role: 'Data Entry',
        duration: '6 Months',

    },
]


const useStyles = makeStyles({
    drawer: {
        width: drawerWidth,
        height: '100vh'
    },
    appbar: {
        width: `calc(100% - ${drawerWidth}px)`,
        backgroundColor: '#F4EEDF',
        height: 80,
        display: 'flex',
        justifyContent: 'center',

    },
    listItem: {
        textAlign: 'left',
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 15,
        marginRight: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    root: {
        display: 'flex',
        height: '100vh',
        backgroundColor: '#F4EEDF'
    },
    mainContent: {
        marginTop: 80
    },
    contentNav: {
        display: 'flex',
        flex: 'row',
        width: `calc(100vw - ${drawerWidth}px)`,
        justifyContent: 'space-between',
        marginTop: 40,
    },
    content: {
        marginLeft: 80,
        marginRight: 80,
        marginTop: 60,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10
    },
    contentMain: {
        display: 'flex',
        flexDirection: 'row',
        width: `calc(100vw - ${drawerWidth}px)`,
        justifyContent: 'space-evenly',
        overflowX: 'none'
    }
}
)

function DashboardVouchPast() {

    const classes = useStyles()
    
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const [selectedValue, setSelectedValue] = React.useState('a');

    return (
        <div>
        <div className={classes.content}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#FEC547', height: 50, alignItem: 'center', borderRadius: 10 }}>
            <Typography style={{ width: 80, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Select</Typography>
            <Typography style={{ width: 180, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Name</Typography>
            <Typography style={{ width: 80, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Role</Typography>
            <Typography style={{ width: 150, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Duration</Typography>
            <Typography style={{ width: 150, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Actions</Typography>
        </div>
        <div style={{ marginTop: 20 }}>
            {
                data.map(item => (
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                        <div style={{ width: 80, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Radio
                                checked={selectedValue === 'a'}
                                onChange={handleChange}
                                value="a"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                        </div>
                        <Typography style={{ width: 180, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.name}</Typography>
                        <Typography style={{ width: 80, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2C9C05' }}>{item.role}</Typography>
                        <Typography style={{ width: 150, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.duration}</Typography>
                        <div style={{ width: 150, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                            <Typography style={{ width: '6rem', height: '2rem', display: ' flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F1F1F1', borderRadius: 10 }}>Submit</Typography>
                            <Typography style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 20 }}><MoreVertIcon /></Typography>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
        </div>
    )
}

export default DashboardVouchPast
