import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { Container, Paper, Box, makeStyles } from '@material-ui/core';
import { Typography, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';



//component handling favorites

export default function Favorite (props) {
   
    //hooks
    const dispatch = useDispatch();

    //useState for toggleFav
    const [toggleFav, setToggleFav] = useState(false)


    return (
        <>
 <FavoriteBorderIcon
                fontSize="large"
                sx={{ color: pink[300] }}
                        />  


        </>
    )
} //end Favorites