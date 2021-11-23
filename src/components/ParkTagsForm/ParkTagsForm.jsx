import { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Stack,
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ParkTagChip from '../ParkTagChips/ParkTagChips';

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
    console.log('in delete tags, tag is', parkTag);
    dispatch({ type: 'DELETE_TAG', payload: parkTag });
  };

  const addParkTag = (parkTag) => {
      console.log('in add tag, tag is', parkTag);
      dispatch({ type: 'ADD_TAG', payload: parkTag})
  }

  return (
    <Container sx={{ mt: '20px', display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
        <Typography variant="h5" sx={{ mt: '40px', mb: '40px' }}>
          Add Tags
        </Typography>
        <Stack direction="row" sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {parkTags.allTags?.map((parkTag) => (
            <ParkTagChip 
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