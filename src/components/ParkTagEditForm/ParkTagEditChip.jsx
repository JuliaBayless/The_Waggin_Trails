import { Chip } from '@mui/material';
import { useEffect, useState } from 'react'

function ParkTagEditChip({ deleteParkTag, parkTag, addParkTag, newTags }) {
    const [chipStatus, setChipStatus] = useState(false)
    //conditional render 

    useEffect(() => {
      changeChipStatus()
    }, [])

    const changeChipStatus = () => {
        for (let tag of newTags) {
            if (tag.tag_id === parkTag.id) {
                setChipStatus(true)
            }
        }
    }

    // console.log('==========', newTags, parkTag.id)
    return (
        <>
            {chipStatus ?
                <Chip
                    color="success"
                    label={parkTag.tag}
                    onClick={() => { setChipStatus(!chipStatus), deleteParkTag(parkTag.id) }}
                /> :
                <Chip
                    label={parkTag.tag}
                    onClick={() => { setChipStatus(!chipStatus), addParkTag(parkTag.id) }}
                />
            }
        </>
    );
}

export default ParkTagEditChip;