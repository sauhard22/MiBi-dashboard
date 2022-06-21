import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import img1 from '../../assets/Partners/1.png'
import img2 from '../../assets/Partners/img2.png'
import img3 from '../../assets/Partners/img3.png'
import img4 from '../../assets/Partners/img4.png'
import img5 from '../../assets/Partners/img5.png'
import img6 from '../../assets/Partners/img6.png'
import img7 from '../../assets/Partners/img7.png'
import img8 from '../../assets/Partners/img8.png'
import img9 from '../../assets/Partners/img9.jpeg'
import img10 from '../../assets/Partners/img10.png'
import img11 from '../../assets/Partners/img11.png'
import img12 from '../../assets/Partners/img12.png'
import img13 from '../../assets/Partners/img13.png'
import img14 from '../../assets/Partners/img14.png'
import img15 from '../../assets/Partners/img15.jpeg'
import img16 from '../../assets/Partners/img16.jpeg'

const imageData = [
    {
        0: [
            { image: img1, name: "" },
            { image: img2, name: "" },
            { image: img3, name: "" },
            { image: img4, name: "" },
        ]
    },
    {
        1: [
            { image: img5, name: "" },
            { image: img6, name: "" },
            { image: img7, name: "" },
            { image: img8, name: "" },
        ]
    },
    {
        2: [
            { image: img9, name: "" },
            { image: img10, name: "" },
            { image: img11, name: "" },
            { image: img12, name: "" },
        ]
    },
    {
        3: [
            { image: img13, name: "" },
            { image: img14, name: "" },
            { image: img15, name: "" },
            { image: img16, name: "" }
        ]
    }
]


function Partners() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {
                imageData.map((item, index) => (
                    <Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        {
                            item[index].map(e => (
                                <Grid item style={{ borderStyle: 'solid', borderWidth: 1, borderColor: '#efefef', padding: '1rem', width: '15rem', margin: '1rem' }}>
                                    <img style={{ width: '10rem' }} src={e.image} alt={`${e.image}`} />
                                </Grid>
                            ))
                        }
                    </Grid>
                ))
            }
            {/*<Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item style={{ borderStyle: 'solid', borderWidth: 1, borderColor: '#efefef', padding: '1rem', width: '15rem', margin: '1rem' }}>
                    <img style={{ width: '10rem' }} src={img1} alt="img1" />
                    <Typography>NARAYANI FOUNDATION</Typography>
                </Grid>
                <Grid item style={{ borderStyle: 'solid', borderWidth: 1, borderColor: '#efefef', padding: '1rem', width: '15rem', margin: '1rem' }}>
                    <img style={{ width: '10rem' }} src={img1} alt="img1" />
                    <Typography>NARAYANI FOUNDATION</Typography>
                </Grid>
                <Grid item style={{ borderStyle: 'solid', borderWidth: 1, borderColor: '#efefef', padding: '1rem', width: '15rem', margin: '1rem' }}>
                    <img style={{ width: '10rem' }} src={img1} alt="img1" />
                    <Typography>NARAYANI FOUNDATION</Typography>
                </Grid>
                <Grid item style={{ borderStyle: 'solid', borderWidth: 1, borderColor: '#efefef', padding: '1rem', width: '15rem', margin: '1rem' }}>
                    <img style={{ width: '10rem' }} src={img1} alt="img1" />
                    <Typography>NARAYANI FOUNDATION</Typography>
                </Grid>
        </Grid>*/}
        </div>
    )
}

export default Partners
