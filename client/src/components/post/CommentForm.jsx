import React, { useState } from "react";
import { useDispatch } from "react-redux";

import SendIcon from "@material-ui/icons/Send";
import {
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from "@material-ui/core";
const CommentForm = ({ handleComment, text, setText }) => {
  return (
    <form onSubmit={(e) => handleComment(e)} style={{ width: "100%" }}>
      <Input
        type="text"
        name="text"
        value={text}
        id="text"
        fullWidth
        endAdornment={
          <IconButton onClick={(e) => handleComment(e)}>
            <InputAdornment position="end">
              <SendIcon />
            </InputAdornment>
          </IconButton>
        }
        onChange={(e) => setText(e.target.value)}
        placeholder="Join the convo"
      />
    </form>
  );
};
export default CommentForm;
