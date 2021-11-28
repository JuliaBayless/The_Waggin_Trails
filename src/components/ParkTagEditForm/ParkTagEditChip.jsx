import { Chip } from '@mui/material';
import { useEffect, useState } from 'react'

//import components
import useStyles from '../styles/styles'


//FOR EDIT MODE**
//component that handles each category for the dog tags associated with parks
function ParkTagEditChip({ deleteParkTag, parkTag, addParkTag, newTags }) {
    //hooks
    const classes = useStyles();

    const [chipStatus, setChipStatus] = useState(false)
    const [stateStatus, setState] = useState('')



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


    return (
        <>
            {chipStatus ?
                <Chip
                    color="success"
                    // className={classes.chipsLayout}
                    label={parkTag.tag}
                    onClick={() => { setChipStatus(!chipStatus), deleteParkTag(parkTag) }}
                /> :
                <Chip
                    label={parkTag.tag}
                    // className={classes.chipsLayout}
                    onClick={() => { setChipStatus(!chipStatus), addParkTag(parkTag) }}
                />
            }
        </>
    );
}

export default ParkTagEditChip;