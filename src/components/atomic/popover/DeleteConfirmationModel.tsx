import React from 'react';
import { Backdrop, Button, Fade, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';

type DeleteConfirmationModelProps = {
  open: boolean;
  handleClose: () => void;
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
    p: 4,
  },
};

const DeleteConfirmationModel: React.FC<DeleteConfirmationModelProps> = ({
  open,
  handleClose,
}) => (
  <Modal
    open={open}
    onClose={handleClose}
    BackdropComponent={Backdrop}
    BackdropProps={{
      sx: {
        backgroundColor: 'rgba(111, 126, 140, 0.00)',
        backdropFilter: 'blur(3px)',
      },
    }}
  >
    <Box sx={sx.boxStyle}>
      <Typography id="transition-modal-title" variant="h6" component="h2">
        Text in a modal
      </Typography>
      <Button variant="outlined">Cancel</Button>
      <Button variant="contained">Delete</Button>
    </Box>
  </Modal>
);

DeleteConfirmationModel.defaultProps = {
  open: false,
  handleClose: () => {},
};

export default DeleteConfirmationModel;
