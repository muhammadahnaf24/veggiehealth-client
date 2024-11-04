import React from "react";
import { logoutUser } from "../services/api";

const UserProfile = () => {
  const handleLogout = () => {
    logoutUser();
    window.location.href = "/login";
  };
  return (
    <button onClick={handleLogout} className="bg-red-700 mt-4">
      Logout
    </button>
  );
};

export default UserProfile;
