import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SendIcon from "@material-ui/icons/Send";
import {
  Button,
  Grow,
  Grid,
  Paper,
  Typography,
  TextField,
  Container,
} from "@material-ui/core";
import useStyles from "./loginStyles";
import { login } from "../../actions/auth";
import { Redirect } from "react-router-dom";

const Login = () => {
  const classes = useStyles();
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
    <Grow in>
      <Container>
        <Paper className={classes.paperContainer} elevation={2}>
          <Typography
            align="center"
            className={classes.heading}
            variant="h4"
            gutterBottom
          >
            Sign In
          </Typography>
          <Grid container style={{ justifyContent: "center" }}>
            <Grid item md={12} lg={12} sm={12}>
              <form noValidate autoComplete="off" onSubmit={(e) => onSubmit(e)}>
                <TextField
                  className={classes.fields}
                  variant="outlined"
                  fullWidth
                  name="email"
                  label="Email"
                  value={email}
                  onChange={(e) => {
                    onChange(e);
                  }}
                ></TextField>
                <TextField
                  className={classes.fields}
                  variant="outlined"
                  fullWidth
                  name="password"
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => {
                    onChange(e);
                  }}
                ></TextField>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  fullWidth
                  className={classes.button}
                  disableElevation
                  endIcon={<SendIcon />}
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      {/* <Col sm={12} md={{ size: 6, offset: 3 }}>
          <Paper>
            <Container>
              <Typography variant="h4" align="center">
                SIGN IN
              </Typography>
              <Form onSubmit={(e) => onSubmit(e)}>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
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
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
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
          </Paper>
        </Col> */}
    </Grow>
  );
};
export default Login;
