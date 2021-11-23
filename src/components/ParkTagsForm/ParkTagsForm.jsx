import { useEffect, useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  FormControl,
  TextField,
  ButtonGroup,
  Button,
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


  // grab all tags on page render
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
      dispatch({ type: 'ADD_TAG', payload: parkTag })
  }

  console.log(`in ParkTagsForm and tags = `, );
  return (
    <Container sx={{ mt: '20px', display: 'flex', justifyContent: 'center' }}>
      <Paper
        elevation={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
        //   justifyContent: 'space-between',
          width: '600px',
          p: '30px',
        }}
      >
        <Typography variant="h5">Add Tag</Typography>
        <FormControl>
          <TextField
            sx={{ m: '10px' }}
            type="text"
            variant="standard"
            label="Add Tag"
            required
            value={tag}
            onChange={(event) => setTag(event.target.value)}
          />
        </FormControl>
        <ButtonGroup
          sx={{ display: 'flex', justifyContent: 'right', mt: '40px' }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch({
                type: 'ADD_TAG',
                payload: tag,
              });
              // reset the input field
              setTag('');
            }}
          >
            Add Tag
          </Button>
        </ButtonGroup>
        <Typography variant="h4" sx={{ mt: '40px', mb: '40px' }}>
          Remove Tags
        </Typography>
        <Stack direction="row" sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {parkTags.allTags?.map((parkTag) => (
            <ParkTagChip key={parkTag.id} parkTag={parkTag} deleteParkTag={deleteParkTag} />
          ))}
        </Stack>
        <ButtonGroup
          sx={{ display: 'flex', justifyContent: 'right', mt: '40px' }}
        >
          <Button
            variant="contained"
            color="error"
            onClick={() => history.push('/')}
          >
            Return
          </Button>
        </ButtonGroup>
      </Paper>
    </Container>
  );
}

export default ParkTagsForm;