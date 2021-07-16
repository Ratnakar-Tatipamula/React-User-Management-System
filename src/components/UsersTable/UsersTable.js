import React from "react";
import "./index.css";

const UsersTable = (props) => {
  return (
    <div className="right">
      <table>
        <caption>Users Table</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <tr key={user.id}>
              <td data-label="Name">{user.name}</td>
              <td data-label="Username">{user.username}</td>
              <td data-label="Actions">
                <button onClick={() => props.editUser(user)}>Update</button>
                <button onClick={() => props.deleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
