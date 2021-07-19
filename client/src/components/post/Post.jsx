import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../actions/post";
import { Grid, Container } from "@material-ui/core";
import { Spinner } from "reactstrap";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import PostShow from "./PostShow";
const Post = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(match.params.id));
  }, [dispatch]);

  const { loading, post } = useSelector((state) => state.post);

  return !loading && post !== null ? (
    <Fragment>
      <PostShow post={post}></PostShow>
    </Fragment>
  ) : (
    <Spinner></Spinner>
  );
};
export default Post;
