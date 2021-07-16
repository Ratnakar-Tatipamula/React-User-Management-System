import "./styles.css";
import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import EditUser from "./components/EditUser/EditUser";
import UsersTable from "./components/UsersTable/UsersTable";

export default function App() {
  const [editing, setEditing] = useState(false);
  const initialFormState = {
    id: null,
    name: "",
    username: ""
  };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const usersInitialState = [
    { id: 1, name: "David", username: "David45" },
    { id: 2, name: "Mike", username: "Mike45" }
  ];

  const [users, setUsers] = useState(usersInitialState);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    });
  };

  const updateUser = (updatedUser) => {
    // console.log(updatedUser.id);
    setEditing(false);
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  return (
    <div className="App">
      <div class="title">CRUD Operations</div>
      <div className="main">
        {editing ? (
          <EditUser
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        ) : (
          <AddUser addUser={addUser} />
        )}
        <UsersTable users={users} deleteUser={deleteUser} editUser={editUser} />
      </div>
    </div>
  );
}
