import { useEffect, useState } from 'react';
import {
    Container,
    Typography,
    Stack,
    ButtonGroup,
    Button,
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ParkTagEditChip from './ParkTagEditChip';


//FOR EDIT MODE***
//component to parent each dog tag and handles delete/add
function ParkTagEditForm({ newTags, dogParkDetails }) {

    // set up hooks
    const history = useHistory();
    const dispatch = useDispatch();

    // Grab the parkTags from the store
    const parkTags = useSelector(store => store.tagReducer);
    const updatedTags = useSelector(store => store.parkReducer)
    const [tags, setTags] = useState('')

    // grab all tags to render
    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_TAGS' });
    }, []);

    // delete park tag from reducer
    const deleteParkTag = (parkTag) => {
        console.log('==In DELETE==', parkTag.id, dogParkDetails)
        dispatch({
            type: 'DELETE_TAG_IN_EDIT_MODE',
            payload: {
                tag_id: parkTag.id,
                dog_park_id: dogParkDetails
            }
        })
    };

    //add park tag to reducer 
    const addParkTag = (parkTag) => {
        console.log('==In ADD==', parkTag, dogParkDetails)
        dispatch({
            type: 'ADD_TAG_IN_EDIT_MODE',
            payload: {
                tag_id: parkTag.id,
                dog_park_id: dogParkDetails
            }
        })
    }


    return (
        <Container sx={{ mt: '20px', display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
            <Typography variant="h6">
                Update Tags
            </Typography>
            <Stack direction="row"
                sx={{
                    display: 'flex', flexWrap: 'wrap',
                    justifyContent: 'center', gap: '10px'
                }}>
                {parkTags.allTags?.map((parkTag) => (
                    <ParkTagEditChip
                        key={parkTag.id}
                        parkTag={parkTag}
                        deleteParkTag={deleteParkTag}
                        addParkTag={addParkTag}
                        newTags={newTags} />
                ))}
            </Stack>
        </Container>
    );
}

export default ParkTagEditForm;