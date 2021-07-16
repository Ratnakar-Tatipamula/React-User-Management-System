import React, { useState } from "react";

const EditUser = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateUser(user);
  };

  return (
    <div className="left">
      <h3>Update User</h3>
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
        <button type="submit" className="add-button">
          Update
        </button>
        <button onClick={() => props.setEditing(false)}>Cancel</button>
      </form>
    </div>
  );
};

export default EditUser;
