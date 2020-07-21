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

import { login } from "../../actions/auth";
import { Redirect } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { password, email } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await dispatch(login(formData));
  };
  const { isAuthenticated } = useSelector((state) => state.auth);
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
                SIGN IN
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
export default Login;
