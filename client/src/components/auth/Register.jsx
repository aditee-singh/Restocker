import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {
  Grow,
  Paper,
  Grid,
  Typography,
  Container,
  CardContent,
  InputAdornment,
  Card,
  Button,
  TextField,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import useStyle from "./registerStyles";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import { Redirect } from "react-router-dom";

const Register = () => {
  const classes = useStyle();
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
    <Grow in>
      <Container className={classes.mainContainer}>
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper>
              <Card>
                <CardContent>
                  <Typography align="center" variant="h5" gutterBottom>
                    Sign Up
                  </Typography>
                  <Container>
                    <form onSubmit={onSubmit}>
                      <TextField
                        label="Name"
                        fullWidth
                        name="name"
                        onChange={(e) => onChange(e)}
                        placeholder="Enter your name"
                        type="text"
                      />
                      <TextField
                        label="Email"
                        fullWidth
                        onChange={(e) => onChange(e)}
                        placeholder="something@example.com"
                        name="email"
                        type="email"
                      />
                      <Grid
                        container
                        spacing={1}
                        className={classes.inputContainer}
                      >
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          <TextField
                            type="password"
                            label="Password"
                            name="password"
                            onChange={(e) => onChange(e)}
                            placeholder="minimum 6 characters"
                            required
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          <TextField
                            type="password"
                            label="Confirm Password"
                            name="password2"
                            onChange={(e) => onChange(e)}
                            required
                            fullWidth
                          />
                        </Grid>
                      </Grid>
                      <TextField
                        label="Hostel"
                        fullWidth
                        onChange={(e) => onChange(e)}
                        placeholder="something@example.com"
                        name="hostel"
                        type="text"
                      />
                      <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        fullWidth
                        type="submit"
                        endIcon={<SendIcon />}
                      >
                        Submit
                      </Button>
                    </form>
                  </Container>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>

    // <Row className="my-5">
    //   <Col sm={12} md={{ size: 6, offset: 3 }}>
    //     <Card>
    //       <Container>
    //         <CardTitle>
    //           <h2 className="text-muted" align="center">
    //             SIGN UP
    //           </h2>
    //         </CardTitle>
    //         <Form onSubmit={(e) => onSubmit(e)}>
    //           <FormGroup row>
    //             <Label for="email" sm={2}>
    //               Email
    //             </Label>
    //             <Col sm={10}>
    //               <Input
    //                 type="email"
    //                 name="email"
    //                 value={email}
    //                 id="email"
    //                 onChange={(e) => onChange(e)}
    //                 placeholder="something@example.com"
    //               />
    //             </Col>
    //           </FormGroup>
    //           <FormGroup row>
    //             <Label for="name" sm={2}>
    //               Name
    //             </Label>
    //             <Col sm={10}>
    //               <Input
    //                 type="text"
    //                 name="name"
    //                 id="name"
    //                 value={name}
    //                 onChange={(e) => onChange(e)}
    //                 placeholder="Enter your name"
    //               />
    //             </Col>
    //           </FormGroup>
    //           <FormGroup row>
    //             <Label for="password" sm={2}>
    //               Password
    //             </Label>
    //             <Col sm={10}>
    //               <Input
    //                 type="password"
    //                 name="password"
    //                 id="password"
    //                 value={password}
    //                 onChange={(e) => onChange(e)}
    //                 placeholder="Min 6 characters"
    //               />
    //             </Col>
    //           </FormGroup>
    //           <FormGroup row>
    //             <Label for="password2" sm={2}>
    //               Confirm
    //             </Label>
    //             <Col sm={10}>
    //               <Input
    //                 type="password"
    //                 name="password2"
    //                 id="password"
    //                 value={password2}
    //                 onChange={(e) => onChange(e)}
    //               />
    //             </Col>
    //           </FormGroup>
    //           <FormGroup row>
    //             <Label for="hostel" sm={2}>
    //               Hostel
    //             </Label>
    //             <Col sm={10}>
    //               <Input
    //                 type="text"
    //                 name="hostel"
    //                 id="hostel"
    //                 value={hostel}
    //                 onChange={(e) => onChange(e)}
    //               />
    //             </Col>
    //           </FormGroup>
    //           <Button className="btn btn-dark btn-block" type="submit">
    //             Submit
    //           </Button>
    //         </Form>
    //       </Container>
    //     </Card>
    //   </Col>
    // </Row>
  );
};

export default Register;
