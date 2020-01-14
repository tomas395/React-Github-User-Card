import React from "react";

const UserCard = props => {
  return (
    <div className="git-user-card">
      <p>{props.html_url}</p>
      <p>{props.login}</p>
      <p>{props.email}</p>
      <p>{props.location}</p>
      <img src={props.avatar_url} alt={"A picture of the user"} />
    </div>
  );
};

export default UserCard;
