import React, { Fragment } from "react";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
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

const PostItem = ({
  post: { _id, title, description, imageUrl, date, trade, likes, user },
}) => {
  // const { trade } = useSelector((state) => state.post.post.trade);
  console.log(title);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <Container>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/posts/${_id}`}
        >
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
                People interested in this: <span>{likes.length}</span>
              </div>
            </CardFooter>
          </Card>
        </Link>
      </Container>
    </Fragment>
  );
};
export default PostItem;
