import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Card,
  Container,
  CardTitle,
} from "reactstrap";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import { Redirect } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    hostel: "",
  });
  const { name, email, password, password2, hostel } = formData;
  const { isAuthenticated } = useSelector((state) => state.auth);
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (password2 !== password) {
      dispatch(setAlert("Passwords do not match", "danger"));
    } else {
      console.log(formData);
      dispatch(register(formData));
    }
  };
  if (isAuthenticated) {
    return <Redirect push to="/posts"></Redirect>;
  }
  return (
    <Row className="my-5">
      <Col sm={12} md={{ size: 6, offset: 3 }}>
        <Card>
          <Container>
            <CardTitle>
              <h2 className="text-muted" align="center">
                SIGN UP
              </h2>
            </CardTitle>
            <Form onSubmit={(e) => onSubmit(e)}>
              <FormGroup row>
                <Label for="email" sm={2}>
                  Email
                </Label>
                <Col sm={10}>
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    id="email"
                    onChange={(e) => onChange(e)}
                    placeholder="something@example.com"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="name" sm={2}>
                  Name
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => onChange(e)}
                    placeholder="Enter your name"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="password" sm={2}>
                  Password
                </Label>
                <Col sm={10}>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                    placeholder="Min 6 characters"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="password2" sm={2}>
                  Confirm
                </Label>
                <Col sm={10}>
                  <Input
                    type="password"
                    name="password2"
                    id="password"
                    value={password2}
                    onChange={(e) => onChange(e)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="hostel" sm={2}>
                  Hostel
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="hostel"
                    id="hostel"
                    value={hostel}
                    onChange={(e) => onChange(e)}
                  />
                </Col>
              </FormGroup>
              <Button className="btn btn-dark btn-block" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
