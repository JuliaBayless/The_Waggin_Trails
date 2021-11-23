import { Chip } from '@mui/material';

function ParkTagChip({ deleteParkTag, parkTag }) {
    const [chipStatus, SetChipStatus] = useState(false)
   
    return (
        {chipStatus?
        <Chip
            color="success"
            label={parkTag.tag}
            sx={{ m: '10px' }}
            onClick={() => deleteGenre(parkTag.id)}
        /> :
    );
}

export default ParkTagChip;