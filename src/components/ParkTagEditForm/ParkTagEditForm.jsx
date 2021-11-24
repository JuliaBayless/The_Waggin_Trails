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

function ParkTagEditForm({ dogPark, newTags }) {
    // local state to keep track of user input
    const [tag, setTag] = useState('');

    // set up hooks
    const history = useHistory();
    const dispatch = useDispatch();

    // Grab the parkTags from the store
    const parkTags = useSelector(store => store.tagReducer);
    const updatedTags = useSelector(store => store.parkReducer)


    // grab all tags to render
    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_TAGS' });
    }, []);


    //send the edited dog tags to reducer
    const editTags = () => {
        console.log('updated tags', updatedTags.addTagsToDogPark);
        // dispatch({
        //     type: 'EDIT_PARK_TAGS',
        //     payload: updatedTags.addTagsToDogPark
        // })
    }

    // delete park tag from reducer
    const deleteParkTag = (parkTag) => {
        dispatch({ type: 'DELETE_TAG', payload: parkTag });
    };

    //add park tag to reducer 
    const addParkTag = (parkTag) => {
        dispatch({ type: 'ADD_TAG', payload: parkTag })
    }


console.log(newTags, dogPark)
    return (
        <Container sx={{ mt: '20px', display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
            <Typography variant="h6">
                Update Tags
            </Typography>
            <Stack direction="row" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {parkTags.allTags?.map((parkTag) => (
                    <ParkTagEditChip
                        key={parkTag.id}
                        parkTag={parkTag}
                        deleteParkTag={deleteParkTag}
                        addParkTag={addParkTag} />
                ))}
            </Stack>
            <ButtonGroup
                sx={{ display: 'flex', justifyContent: 'right', mt: '40px' }}>
                <Button
                    variant="contained"
                    color="error"
                    onClick={() => {editTags}}>
                    Return
                </Button>
            </ButtonGroup>
        </Container>
    );
}

export default ParkTagEditForm;