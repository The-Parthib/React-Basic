import React, { useContext } from "react";
import userContext from "../context/userContext";

const Profile = () => {
  const { user } = useContext(userContext);

  return (
    <div>
      <li>wecome {user?.username}</li>
      <li>password : {user?.password}</li>
    </div>
  );
};

export default Profile;
