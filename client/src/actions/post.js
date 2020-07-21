import axios from "axios";
import {
  GET_POSTS,
  POST_ERROR,
  GET_POST,
  ADD_POST,
  DELETE_COMMENT,
  ADD_COMMENT,
  UPDATE_LIKES,
  UPDATE_CATEGORY,
  DELETE_POST,
} from "./types";
import { setAlert } from "./alert";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
    });
  }
};

export const getPost = (postId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/${postId}`);
    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
    });
  }
};

export const getPostByCategory = (category) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/category/${category}`);
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
    dispatch({
      type: UPDATE_CATEGORY,
      payload: category,
    });
  } catch (error) {}
};

export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const res = await axios.post("/api/posts", formData, config);
    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: POST_ERROR });
  }
};

export const addComment = (text, postId) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const comment = JSON.stringify(text);
  try {
    const res = await axios.put(
      `/api/posts/comment/${postId}`,
      comment,
      config
    );
    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
    dispatch(setAlert("Comment Added", "success"));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
    });
    dispatch(setAlert("Something went wrong", "danger"));
  }
};

export const deleteComment = (commentId, postId) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/posts/comment/${postId}/${commentId}`);
    dispatch({
      type: DELETE_COMMENT,
      payload: commentId,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
    });
    dispatch(setAlert("Something went wrong", "danger"));
  }
};

export const addLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/like/${postId}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: res.data,
    });
    dispatch(setAlert("Like updated", "success"));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
    });
    dispatch(setAlert("Something went wrong", "danger"));
  }
};

export const removeLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/unlike/${postId}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: res.data,
    });
    dispatch(setAlert("Like updated", "success"));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
    });
    dispatch(setAlert("Something went wrong", "danger"));
  }
};
export const deletePost = (postId, history) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/posts/${postId}`);
    dispatch({
      type: DELETE_POST,
      payload: postId,
    });
    history.push("/posts");
    dispatch(setAlert("Post Deleted", "success"));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
    });
    dispatch(setAlert("Something went wrong", "danger"));
  }
};
