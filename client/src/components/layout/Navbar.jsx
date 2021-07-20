import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Container,
  NavLink,
} from "reactstrap";
// import { AppBar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./Navbar.css";

import { logout } from "../../actions/auth";

const Example = () => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();

  const guestLink = (
    <Nav className="mr-auto" navbar>
      <NavItem className="mx-3">
        <Link to="/login">Login</Link>
      </NavItem>
      <NavItem className="mx-3">
        <Link to="/register">Register</Link>
      </NavItem>
    </Nav>
  );
  const authLink = (
    <Nav className="mr-auto" navbar>
      <NavItem>
        <Link to="/posts">PRODUCTS</Link>
      </NavItem>
      <NavItem>
        <Link to="/new-post">New Post</Link>
      </NavItem>
      <NavItem onClick={() => dispatch(logout())}>
        <Link> LOGOUT</Link>
      </NavItem>
      {!loading && isAuthenticated && user && (
        <NavItem style={{ textDecoration: "!important none", color: "#FFF" }}>
          {user.name}
        </NavItem>
      )}
    </Nav>
  );
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">
        R E S T O C K E R <i className="fas fa-shopping-cart"></i>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="navbar-text" />
      <Collapse isOpen={isOpen} navbar>
        {!loading && (
          <Fragment>{isAuthenticated ? authLink : guestLink}</Fragment>
        )}
      </Collapse>
    </Navbar>
  );
};

export default Example;
