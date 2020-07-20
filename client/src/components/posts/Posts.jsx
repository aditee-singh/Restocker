import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/post";
import { Container, Row, Col } from "reactstrap";
import DropDown from "./DropDown";
import PostItem from "./PostItem";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, category } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  useEffect(() => {
    console.log(posts);
  }, [posts]);
  return (
    <Fragment>
      <Container>
        <div className="center">
          <DropDown></DropDown>
        </div>
        <h3 align="center">{category ? category : "All Posts"}</h3>;
        <Row>
          <Col sm={12} md={{ size: 6, offset: 3 }}>
            <section>
              {posts.map((post) => (
                <PostItem key={post._id} post={post}></PostItem>
              ))}
            </section>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Posts;
