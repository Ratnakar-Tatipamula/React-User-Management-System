import React, { useState } from "react";
import "./index.css";
const AddUser = (props) => {
  const userInitialState = {
    id: null,
    name: "",
    username: ""
  };

  const [user, setUser] = useState(userInitialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addUser(user);
    setUser(userInitialState);
  };

  return (
    <div className="left">
      <h3>Add User</h3>
      <form onSubmit={handleSubmit}>
        <div className="control">
          <label for="">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <label for="">Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <button className="add-button">Add</button>
      </form>
    </div>
  );
};

export default AddUser;
