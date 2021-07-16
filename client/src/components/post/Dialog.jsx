import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { deletePost } from "../../actions/post";
const Dialogue = ({ open, setOpen, id }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You're about to delete your listing.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={() => {
            dispatch(deletePost(id, history));
            setOpen(false);
          }}
        >
          Delete
        </Button>
        <Button color="secondary" onClick={() => setOpen(false)} autoFocus>
          Changed my mind
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Dialogue;
