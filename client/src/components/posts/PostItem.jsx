import React, { Fragment } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import "./img.css";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardFooter,
} from "reactstrap";
import { Link } from "react-router-dom";
import { addLike, removeLike } from "../../actions/post";
const PostItem = ({
  post: { _id, title, description, imageUrl, date, trade, likes, user },
}) => {
  // const { trade } = useSelector((state) => state.post.post.trade);
  console.log(title);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Container>
        <Link to={`/posts/${_id}`}>
          <Card style={{ textDecoration: "!important none" }} className="my-3">
            <h3>
              <CardHeader
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>{description}</div>
                <Moment format="YYYY/MM/DD">{date}</Moment>
              </CardHeader>
            </h3>
            <CardBody>
              {user && (
                <Fragment>
                  {user.name} {user.email}
                </Fragment>
              )}
              <img
                src={
                  imageUrl ||
                  "https://cdn.pixabay.com/photo/2020/06/15/15/16/the-caucasus-5302236_960_720.jpg"
                }
                width="100%"
                height="288px"
              ></img>
              <CardText>{description}</CardText>
            </CardBody>
            <CardFooter
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {trade.trade}
              <div>
                <button
                  type="button"
                  onClick={() => dispatch(addLike(_id))}
                  className="btn btn-light"
                >
                  <i className="fas fa-thumbs-up"></i>
                  <span>{likes.length > 0 && likes.length}</span>
                  People interested in this:
                </button>
                <button
                  type="button"
                  onClick={() => dispatch(removeLike(_id))}
                  className="btn btn-light"
                >
                  <i className="fas fa-thumbs-down"></i>
                </button>
              </div>
            </CardFooter>
          </Card>
        </Link>
      </Container>
    </Fragment>
  );
};
export default PostItem;
