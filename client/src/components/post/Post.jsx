import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../actions/post";

import PostItem from "../posts/PostItem";
import { Spinner } from "reactstrap";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
const Post = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(match.params.id));
  }, [dispatch]);

  const { loading, post } = useSelector((state) => state.post);

  return !loading && post !== null ? (
    <Fragment>
      <PostItem post={post}></PostItem>
      <CommentForm postId={post._id}></CommentForm>
      {post.comments.map((comment) => (
        <CommentItem
          key={comment._id}
          post={post}
          comment={comment}
        ></CommentItem>
      ))}
    </Fragment>
  ) : (
    <Spinner></Spinner>
  );
};
export default Post;
