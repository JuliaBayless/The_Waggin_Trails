import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

//styles
import { TextField } from '@mui/material';

//components
import useStyles from '../styles/styles'


export default function SearchBar() {
  // hooks
  const dispatch = useDispatch();
  const classes = useStyles();

  // user input values
  const [search, setSearch] = useState('');

  // 

  useEffect(() => {
    dispatch({ type: 'SEARCH_FOR_DOG_PARK', payload: search });
  }, [search]);


  return (
    <TextField
      sx={{ m: '10px', width: '300px' }}
      className={classes.searchInput}
      type="text"
      required
      variant="outlined"
      label="Search"
      size="small"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
  );
}
