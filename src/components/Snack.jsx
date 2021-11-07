import React from 'react';
import {Alert, Snackbar} from "@material-ui/core";

const Snack = ({isOpen,handleClose}) => {
  return (
    <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
      <Alert severity='success'>Item added in box !</Alert>
    </Snackbar>
  );
};

export default Snack;