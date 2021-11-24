import { Chip } from '@mui/material';
import { useState } from 'react'

function ParkTagChips({ deleteParkTag, parkTag, addParkTag }) {
    const [chipStatus, setChipStatus] = useState(false)
    //conditional render 
    return (
        <>
            {chipStatus ?
                <Chip
                    color="success"
                    label={parkTag.tag}
                    onClick={() => {setChipStatus(!chipStatus), deleteParkTag(parkTag.id)}}
                /> : 
                <Chip
                    label={parkTag.tag}
                    onClick={() => {setChipStatus(!chipStatus), addParkTag(parkTag.id)}}
                />
            }
        </>
    );
}

export default ParkTagChips;