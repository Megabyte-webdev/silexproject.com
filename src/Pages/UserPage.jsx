import React, { useContext } from "react";
import { AuthContext } from "../Authentications/AuthContext";
import { useNavigate } from "react-router-dom";
const UserPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const handleLogout = () => {
    alert("Logged Out!");
    navigate("/");
    console.clear();
    setUser(null);
  };
  return (
    <div className="relative h-screen flex flex-col items-center justify-center max-w-[1200px] w-full mx-auto">
      <h1 className="text-2xl text-black font-bold">
        Welcome{" "}
        <span className="text-2xl text-blue-800">
          {user?.data?.user?.username}
        </span>
      </h1>

      <button
        onClick={handleLogout}
        className="bg-blue-600 text-white text-xl py-3 px-8 my-4"
      >
        Logout
      </button>
    </div>
  );
};

export default UserPage;
