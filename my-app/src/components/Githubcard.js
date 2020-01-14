import React from "react";

const UserCard = props => {
  return (
    <div className="git-user-card">
      <h3>{props.login}</h3>
      <img src={props.avatar_url} alt={"A picture of the user"} />
    </div>
  );
};

export default UserCard;
