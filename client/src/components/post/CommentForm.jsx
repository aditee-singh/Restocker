import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../../actions/post";
import { Input, Form, FormGroup } from "reactstrap";
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
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormGroup>
        <Input
          type="text"
          name="text"
          value={text}
          id="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Join the convo"
        />
      </FormGroup>
    </Form>
  );
};
export default CommentForm;
