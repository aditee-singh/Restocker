import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Card,
  Paper,
  CardContent,
  Button,
  Box,
  Container,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./landingStyles";
const Landing = () => {
  const auth = useSelector((state) => state.auth);
  const classes = useStyles();
  if (auth.isAuthenticated) {
    return <Redirect to="/posts"></Redirect>;
  }
  return (
    <Box className={classes.mainBox}>
      <div className={classes.bannerImage}></div>
      <Container
        className={classes.banner}
        maxWidth="xs"
        style={{ paddingTop: "5rem" }}
      >
        <Paper className={classes.paper}>
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              background: "transparent",
              alignItems: "center",
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
          >
            <Link to="/register" className={classes.button}>
              Sign Up
            </Link>

            <Link to="/login" className={classes.button}>
              Login
            </Link>
          </Card>
        </Paper>
      </Container>
    </Box>
  );
};
export default Landing;
