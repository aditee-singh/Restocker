import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/post";
import { Container } from "@material-ui/core";
import DropDown from "./DropDown";
import PostItem from "./PostItem";
import Masonry from "react-masonry-css";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, category } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <Fragment>
      <div className="mt-3">
        <DropDown></DropDown>
      </div>
      <h3 align="center">{category ? category : "Products"}</h3>

      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {posts.map((post) => (
          <PostItem key={post._id} post={post}></PostItem>
        ))}
      </Masonry>
    </Fragment>
  );
};
export default Posts;
