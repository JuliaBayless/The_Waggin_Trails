import { Chip } from '@mui/material';
import { useState } from 'react'

function ParkTagChip({ deleteParkTag, parkTag, addParkTag }) {
    const [chipStatus, setChipStatus] = useState(false)
    //conditional render 
    console.log(chipStatus)
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

export default ParkTagChip;