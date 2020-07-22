import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { addPost } from "../../actions/post";
import Axios from "axios";
import { Redirect } from "react-router-dom";
const PostForm = ({ history }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    trade: "Buy and Sell",
  });
  const [file, setFile] = useState();
  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
    console.log(data)
    Axios.post("/api/posts", data)
      .then((res) => {
        console.log(res);
        history.push("/posts");
      })
      .catch((err) => console.log(err));
  };
  return (
    <Fragment>
      <Form onSubmit={(e) => onSubmit(e)}>
        <FormGroup>
          <Label for="title">Email</Label>
          <Input type="text"
            name="title"
            value={title}
            id="title"
            onChange={(e) => handleChange(e)} placeholder="Enter a title" />
        </FormGroup>
        <FormGroup>
          <Label for="description">Describe</Label>
          <Input type="text"
            value={description}
            name="description"
            id="description"
            onChange={(e) => handleChange(e)} placeholder="Describe your product" />
        </FormGroup>
        <FormGroup>
          <Label for="category">Select</Label>
          <Input type="select" name="category" id="category" value={category} onChange={(e) => handleChange(e)} >
            <option value="Books">Books</option>
            <option value="Clothes">Clothes</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="file">Image</Label>
          <Input type="file"
            name="image"
            id="image"
            onChange={(e) => {
              const file = e.target.files[0];
              console.log(e.target.files);
              setFile(file);
            }} />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </Fragment>

  );
};

export default PostForm;
