import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardText,
  Input,
  CardFooter,
  Row,
  Label,
  Media,
  Col,
  Form,
  FormGroup,
} from "reactstrap";
import { addLike, removeLike } from "../../actions/post";
const PostShow = ({
  post: {
    _id,
    title,
    description,
    imageUrl,
    date,
    trade: { trade },
    likes,
    user,

    category: { category },
  },
}) => {
  const dispatch = useDispatch();
  return (
    <Container className="my-5">
      <Card>
        <CardHeader
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h4>{title}</h4>
          <h4>{category}</h4>
        </CardHeader>
        <img
          width="90%"
          className="mx-auto my-2"
          src={
            imageUrl ||
            "https://cdn.pixabay.com/photo/2020/06/15/15/16/the-caucasus-5302236_960_720.jpg"
          }
          alt="Card image cap"
          height="350px"
        />
        <hr></hr>
        <CardBody>
          <CardText>
            <i>
              <strong>Owner:</strong> {user.name} <br />
              <strong>Contact:</strong> {user.email} <br></br>
            </i>
            {description}
          </CardText>
        </CardBody>
        <CardFooter
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h6>{trade}</h6>
          <div>
            <span>People interested:</span>
            <span>{likes.length > 0 && likes.length}</span>
            {"  "}
            <button
              type="button"
              onClick={() => dispatch(addLike(_id))}
              className="btn btn-light"
            >
              <i className="fas fa-thumbs-up"></i>
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
    </Container>
  );
};

export default PostShow;