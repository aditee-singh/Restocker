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

import { logout } from "../../actions/auth";

const Example = () => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();

  const guestLink = (
    <Nav className="mr-auto" navbar>
      <NavItem className="mx-3">
        <Link
          to="/login"
          style={{ textDecoration: "!important none", color: "#FFF" }}
        >
          Login
        </Link>
      </NavItem>
      <NavItem>
        <Link
          to="/register"
          style={{ textDecoration: "!important none", color: "#FFF" }}
        >
          Register
        </Link>
      </NavItem>
    </Nav>
  );
  const authLink = (
    <Nav className="mr-auto" navbar>
      <NavItem>
        <NavLink href="/posts">PRODUCTS</NavLink>
      </NavItem>
      <NavItem onClick={() => dispatch(logout())}>
        <NavLink>LOGOUT</NavLink>
      </NavItem>
      {!loading && isAuthenticated && user && (
        <NavbarText>{user.name}</NavbarText>
      )}
    </Nav>
  );
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">
        R E S T O C K E R <i className="fas fa-shopping-cart"></i>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        {!loading && (
          <Fragment>{isAuthenticated ? authLink : guestLink}</Fragment>
        )}
      </Collapse>
    </Navbar>
  );
};

export default Example;
