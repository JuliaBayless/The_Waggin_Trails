import { Chip } from '@mui/material';

function ParkTagChip({ deleteParkTag, parkTag }) {
  console.log(`in ParkTagChip, parkTag is`, parkTag);
  return (
    <ParkTagChip
      label={parkTag.name}
      sx={{ m: '10px' }}
      onClick={() => deleteGenre(parkTag.id)}
    />
  );
}

export default ParkTagChip;