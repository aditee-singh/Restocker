import React from "react";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import {
  Paper,
  Typography,
  Card,
  Container,
  CardContent,
  Box,
  CardHeader,
  CardTitle,
  Grid,
  CardMedia,
  Grow,
} from "@material-ui/core";
import "./img.css";
import useStyles from "./PostItemStyles";
import { Link } from "react-router-dom";

const PostItem = ({
  post: { _id, title, description, imageUrl, date, trade, likes, user },
}) => {
  // const { trade } = useSelector((state) => state.post.post.trade);
  console.log(title);
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Grow in>
      <Container>
        <Paper elevation={3}>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/posts/${_id}`}
          >
            <Card>
              <CardHeader title={title}>
                <Typography>{description}</Typography>
                <Moment format="YYYY/MM/DD">{date}</Moment>
              </CardHeader>
              <CardMedia
                className={classes.media}
                image={
                  imageUrl ||
                  "https://cdn.pixabay.com/photo/2020/06/15/15/16/the-caucasus-5302236_960_720.jpg"
                }
                title={title}
              />
              <CardContent>
                <Typography paragraph>{description}</Typography>
              </CardContent>
              <CardContent className={classes.lowerSection}>
                <Typography>{trade.trade}</Typography>
                <Box>
                  Interested: <span>{likes?.length}</span>
                </Box>
              </CardContent>
            </Card>
          </Link>
        </Paper>
      </Container>
    </Grow>
  );
};
export default PostItem;
