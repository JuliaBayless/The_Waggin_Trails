import { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Stack,
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ParkTagChips from './ParkTagChips';

//FOR ADD PARK FORM**
//parent component for each chip associated with dog tags
//also handles delete and add to reducer for POST
function ParkTagsForm() {
  // local state to keep track of user input
  const [tag, setTag] = useState('');

  // set up hooks
  const history = useHistory();
  const dispatch = useDispatch();

  // Grab the parkTags from the store
  const parkTags = useSelector((store) => store.tagReducer);


  // grab all tags to render
  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_TAGS' });
  }, []);

  // delete this parkTag on the server
  const deleteParkTag = (parkTag) => {
    dispatch({ type: 'DELETE_TAG', payload: parkTag });
  };

  const addParkTag = (parkTag) => {
      dispatch({ type: 'ADD_TAG', payload: parkTag})
  }

  return (
    <Container sx={{ mt: '20px', display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
        <Typography variant="h5" sx={{ mt: '40px', mb: '40px' }}>
          Add Tags
        </Typography>
        <Stack direction="row" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px'}}>
          {parkTags.allTags?.map((parkTag) => (
            <ParkTagChips 
            key={parkTag.id} 
            parkTag={parkTag} 
            deleteParkTag={deleteParkTag} 
            addParkTag={addParkTag}/>
          ))}
        </Stack>
    </Container>
  );
}

export default ParkTagsForm;