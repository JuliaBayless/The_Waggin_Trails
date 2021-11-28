import { Chip } from '@mui/material';
import { useState } from 'react'


//component
import useStyles from '../styles/styles';

//FOR ADD PARK FORM**
//component housing single chip associated with dog tags for the parks

function ParkTagChips({ deleteParkTag, parkTag, addParkTag }) {
    const [chipStatus, setChipStatus] = useState(false)

    //hooks
    const classes = useStyles();

    //conditional render 
    return (
        <>
            {chipStatus ?
                <Chip
                    color="success"
                    className={classes.chipsLayout}
                    label={parkTag.tag}
                    onClick={() => {setChipStatus(!chipStatus), deleteParkTag(parkTag.id)}}
                /> : 
                <Chip
                    label={parkTag.tag}
                    className={classes.chipsLayout}
                    onClick={() => {setChipStatus(!chipStatus), addParkTag(parkTag.id)}}
                />
            }
        </>
    );
}

export default ParkTagChips;