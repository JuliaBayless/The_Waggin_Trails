import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';

//styles
import { pink } from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


//component handling favorites
export default function Favorite({ dogParkId, favArray, user }) {


    //hooks
    const dispatch = useDispatch();

    //useState for toggleFav
    const [toggleFav, setToggleFav] = useState(false)
    const [render, setRender] = useState(favArray)

    useEffect(() => {
        changeToggleStatus()
      }, [render])
  
      const changeToggleStatus = () => {
          for (let fav of favArray) {
              if (fav.user_id === user && fav.dog_park_id === dogParkId) {
                  setToggleFav(true)
                  setRender(fav.dog_park_id)
              }
          }
      }


    // console.log('======== FAVS ==', dogParkId, user, favArray)
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
        <div>
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
        </div>
    )
} //end Favorites