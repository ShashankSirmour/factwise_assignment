import React from 'react';
import {
  Backdrop,
  Button,
  ButtonBase,
  Grid,
  Modal,
  Stack,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { CloseOutlined } from '@mui/icons-material';

type DeleteConfirmationModelProps = {
  open: boolean;
  handleClose: () => void;
  handleDelete: () => void;
};

const sx = {
  boxStyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,

    bgcolor: 'background.paper',
    border: '1px solid rgba(0,0,0,0.2)',
    borderRadius: 5,
    p: 2,
  },
};

const DeleteConfirmationModel: React.FC<DeleteConfirmationModelProps> = ({
  open,
  handleClose,
  handleDelete,
}) => (
  <Modal
    open={open}
    onClose={handleClose}
    BackdropComponent={Backdrop}
    BackdropProps={{
      sx: {
        backgroundColor: 'rgba(111, 126, 140, 0.5)',
        backdropFilter: 'blur(3px)',
      },
    }}
  >
    <Box sx={sx.boxStyle}>
      <Grid container direction="column" wrap="nowrap" sx={{ height: '100%' }}>
        <Grid item container justifyContent="flex-end">
          <ButtonBase
            sx={{ borderRadius: '1000px', p: 0.5 }}
            onClick={handleClose}
          >
            <CloseOutlined />
          </ButtonBase>
        </Grid>
        <Typography sx={{ mb: 4 }}>Are you sure you want to delete</Typography>
        <Grid item sx={{ flexGrow: 1 }} />
        <Grid
          wrap="nowrap"
          item
          container
          justifyContent="flex-end"
          spacing={0.5}
        >
          <Grid item>
            <Button
              variant="outlined"
              sx={{
                border: '1px solid rgba(0,0,0,0.5)',
                color: '#000',
                borderRadius: 2.5,
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'red',
                color: '#fff',
                borderRadius: 2.5,
              }}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </Modal>
);

DeleteConfirmationModel.defaultProps = {
  open: false,
  handleClose: () => {},
  handleDelete: () => {},
};

export default DeleteConfirmationModel;
