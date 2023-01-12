import React from "react";
import UserCard from "./UserCard";

function UserList(props) {

  const handleUserSelect = (id) => {
    props.handleUserChange(id);
  }

  return (
    <div className="ui cards">
      {props.users.map((user) => (
        <UserCard
          key={user.id}
          handleUserClick={handleUserSelect}
          {...user}
        />
      ))}
    </div>
  );
}

export default UserList;
