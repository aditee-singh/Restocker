import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  Grid,
  Grow,
  Paper,
  TextField,
  Typography,
  Button,
  MenuItem,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import Radio from "@material-ui/icons/Radio";
// import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import { addPost } from "../../actions/post";

const PostForm = ({ history }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    trade: "",
  });
  const [file, setFile] = useState();
  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.toString(),
    });

  const { title, description, category, trade } = formData;
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("category", category);
    data.append("trade", trade);
    data.append("image", file);
    console.log(data);
    console.log(formData);
    dispatch(addPost(data, history));
  };
  return (
    <Grow in>
      <Container maxWidth="sm">
        <Paper>
          <Container>
            <Typography variant="h3" align="center" gutterBottom>
              List your item
            </Typography>
            <TextField label="Title" fullWidth />
            <TextField label="Description" fullWidth multiline />
            <Grid container justify="stretch" spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  select
                  label="Category"
                  value={category || "Okay"}
                  helperText="Select a Tyoe"
                  fullWidth
                >
                  <MenuItem value="Books">Books</MenuItem>
                  <MenuItem value="Clothes">Clothes</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <TextField
                  select
                  label="Category"
                  value={category || "Okay"}
                  helperText="Select a Tyoe"
                  fullWidth
                >
                  <MenuItem value="Books">Books</MenuItem>
                  <MenuItem value="Clothes">Clothes</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Container>
    </Grow>
    // <Fragment>
    //   <Form onSubmit={(e) => onSubmit(e)}>
    //     <FormGroup>
    //       <Label for="title">Title</Label>
    //       <Input
    //         type="text"
    //         name="title"
    //         value={title}
    //         id="title"
    //         onChange={(e) => handleChange(e)}
    //         placeholder="Enter a title"
    //       />
    //     </FormGroup>
    //     <FormGroup>
    //       <Label for="description">Describe</Label>
    //       <Input
    //         type="text"
    //         value={description}
    //         name="description"
    //         id="description"
    //         onChange={(e) => handleChange(e)}
    //         placeholder="Describe your product"
    //       />
    //     </FormGroup>
    //     <Row form>
    //       <Col md={6}>
    //         <FormGroup>
    //           <Label for="category">Type</Label>
    //           <Input
    //             type="select"
    //             name="category"
    //             id="category"
    //             value={category || "choose"}
    //             onChange={(e) => handleChange(e)}
    //           >
    //             <option defaultValue="Choose">Choose</option>
    //             <option value="Books">Books</option>
    //             <option value="Clothes">Clothes</option>
    //             <option value="Others">Others</option>
    //           </Input>
    //         </FormGroup>
    //       </Col>
    //       <Col md={6}>
    //         <FormGroup>
    //           <Label for="trade">Trade</Label>
    //           <Input
    //             type="select"
    //             name="trade"
    //             id="trade"
    //             value={trade}
    //             onChange={(e) => handleChange(e)}
    //           >
    //             <option defaultValue="Choose">Choose</option>
    //             <option value="Buy and Sell">Buy and Sell</option>
    //             <option value="Donation">Donation</option>
    //             <option value="Exchange">Exchange</option>
    //           </Input>
    //         </FormGroup>
    //       </Col>
    //     </Row>
    //     <FormGroup>
    //       <Label for="file">Image</Label>
    //       <Input
    //         type="file"
    //         name="image"
    //         id="image"
    //         onChange={(e) => {
    //           const file = e.target.files[0];
    //           console.log(e.target.files);
    //           setFile(file);
    //         }}
    //       />
    //     </FormGroup>
    //     <Button type="submit">Submit</Button>
    //   </Form>
    // </Fragment>
  );
};

export default PostForm;
