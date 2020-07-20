import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteComment } from "../../actions/post";
import { Card, Row, Col, Media, Container } from "reactstrap";
const CommentItem = ({ comment, post }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Row>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <Card>
            <Media>
              <Media body>
                <Media heading>{comment.name}</Media>
                {comment.text}
              </Media>
            </Media>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default CommentItem;
