import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteComment } from "../../actions/post";

const CommentItem = ({ comment, post }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {comment.text} by {comment.name}
      <button
        onClick={(e) => dispatch(deleteComment(comment._id, post._id))}
      ></button>
    </div>
  );
};
export default CommentItem;
