import { Add } from '@mui/icons-material';
import { Fab, Tooltip } from '@mui/material';

const AddPostBtn = () => {
  return (
    <Tooltip
      title='Add'
      sx={{
        position: 'fixed',
        bottom: 20,
        left: { xs: 'calc(50% - 25px)', md: 30 },
      }}
    >
      <Fab color='primary' aria-label='add'>
        <Add />
      </Fab>
    </Tooltip>
  );
};

export default AddPostBtn;
