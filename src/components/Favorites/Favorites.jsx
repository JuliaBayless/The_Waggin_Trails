import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { Container, Paper, Box, makeStyles } from '@material-ui/core';
import { Typography, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';



//component handling favorites

export default function Favorite({ dogParkId, favArray, user }) {


    //hooks
    const dispatch = useDispatch();

    //useState for toggleFav
    const [toggleFav, setToggleFav] = useState(false)


    useEffect(() => {
        dispatch({
            type: 'FETCH_ALL_FROM_FAVORITES_TABLE'
        })
        changeToggleStatus()
      }, [])
  
      const changeToggleStatus = () => {
          for (let fav of favArray) {
              if (fav.user_id === user && fav.dog_park_id === dogParkId) {
                  setToggleFav(true)
              }
          }
      }


    console.log('======== FAVS ==', dogParkId, user, favArray)
    //when value it toggled to TRUE, insert row into favorites table
    const handleToggleTrue = () => {
        dispatch({
            type: 'ADD_TO_FAVORITES_TABLE',
            payload: {dog_park_id : dogParkId}
        })
        setToggleFav(true)
    }

    //when value it toggled to FALSE, insert row into favorites table
    const handleToggleFalse = () => {
        dispatch({
            type: 'DELETE_FROM_FAVORITES_TABLE',
            payload: {dog_park_id : dogParkId }
        })
        setToggleFav(false)
    }

    return (
        <>
            {toggleFav ?
                <FavoriteIcon
                    fontSize="large"
                    sx={{ color: pink[300] }}
                    onClick={handleToggleFalse} />
                :
                <FavoriteBorderIcon
                    fontSize="large"
                    sx={{ color: pink[300] }}
                    onClick={handleToggleTrue} />
            }
        </>
    )
} //end Favorites