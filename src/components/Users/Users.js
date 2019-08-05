import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

import githubContext from "../../context/github/GithubContext";

const Users = () => {
  const gitHubcontext = useContext(githubContext);
  const { loading, users } = gitHubcontext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default Users;
