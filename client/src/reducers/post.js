import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_LIKES,
  UPDATE_CATEGORY,
  DELETE_POST,
} from "../actions/types";

const initialState = {
  post: null,
  posts: [],
  loading: true,
  category: null,
  error: {},
};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case UPDATE_CATEGORY: {
      return {
        ...state,
        category: payload,
      };
    }
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: payload },
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        post: null,
        posts: state.posts.filter(
          (post) => post._id.toString() !== payload.toString()
        ),
        loading: false,
      };
    case DELETE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
      };

    case UPDATE_LIKES:
      return {
        ...state,
        post: {
          ...state.post,
          likes: payload,
        },
      };
    default:
      return { ...state };
  }
};
export default postReducer;
