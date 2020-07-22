import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteComment } from "../../actions/post";
import {
  Card,
  Row,
  Col,
  Media,
  Container,
  CardFooter,
  Button,
} from "reactstrap";
const CommentItem = ({ comment, post }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  {
    console.log(comment, post);
  }
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <Card>
            <Media>
              <Media body>
                <Media heading>{comment.name}</Media>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span>{comment.text}</span>{" "}
                  {(!auth.loading &&
                    comment.user.toString() === auth.user._id.toString()) ||
                  post.user._id.toString() === auth.user._id.toString() ? (
                    <Button
                      color="danger"
                      onClick={() =>
                        dispatch(deleteComment(post._id, comment._id))
                      }
                    >
                      X
                    </Button>
                  ) : null}
                </div>
              </Media>
            </Media>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default CommentItem;
