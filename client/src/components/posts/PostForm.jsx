import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addPost } from "../../actions/post";
import Axios from "axios";
import { Redirect } from "react-router-dom";
const PostForm = ({ history }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Books",
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
    Axios.post("/api/posts", data)
      .then((res) => {
        console.log(res);
        history.push("/posts");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          name="title"
          value={title}
          id="title"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          value={description}
          name="description"
          id="description"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="file"
          name="image"
          id="image"
          onChange={(e) => {
            const file = e.target.files[0];
            console.log(e.target.files);
            setFile(file);
          }}
        />
        <button type="submit">sybmit</button>
      </form>
    </div>
  );
};

export default PostForm;
