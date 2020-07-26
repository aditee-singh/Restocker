import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { getPostByCategory } from "../../actions/post";
const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const dispatch = useDispatch();
  return (
    <Dropdown isOpen={dropdownOpen} size={"sm"} toggle={toggle}>
      <DropdownToggle caret>Categories</DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => dispatch(getPostByCategory("Books"))}>
          Books
        </DropdownItem>
        <DropdownItem onClick={() => dispatch(getPostByCategory("Clothes"))}>
          Clothes
        </DropdownItem>
        <DropdownItem onClick={() => dispatch(getPostByCategory("Others"))}>
          Others
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Example;
