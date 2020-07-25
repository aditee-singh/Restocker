import React, { useEffect, Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactAlert from "./components/layout/Alert";
import Register from "./components/auth/Register";
import { loadUser } from "./actions/auth";
import store from "./store";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/routing/PrivateRoute";
import Posts from "./components/posts/Posts";
import setToken from "./utils/setAuthToken";
import Landing from "./components/layout/Landing";
import Post from "./components/post/Post";
import PostForm from "./components/posts/PostForm";
import { Container } from "reactstrap";
const App = () => {
  if (localStorage.token) {
    setToken(localStorage.token);
  }
  useEffect(async () => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Fragment>
        <Navbar></Navbar>
        <Route path="/" exact component={Landing}></Route>
        <ReactAlert></ReactAlert>
        <Switch>
          <Container style={{ height: "90vh" }}>
            <Route path="/register" exact component={Register}></Route>
            <Route path="/login" exact component={Login}></Route>
            <PrivateRoute path="/new-post" exact component={PostForm}></PrivateRoute>
            <PrivateRoute path="/posts" exact component={Posts}></PrivateRoute>
            <PrivateRoute
              path="/posts/:id"
              exact
              component={Post}
            ></PrivateRoute>
          </Container>
        </Switch>
      </Fragment>
    </Router>
  );
};
export default App;
