import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    dispatch(addComment({ text }, postId));
    setText("");
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default CommentForm;
