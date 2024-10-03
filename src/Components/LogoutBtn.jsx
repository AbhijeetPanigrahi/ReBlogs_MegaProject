import React from "react";
import { useDispatch } from "react-redux";
import authService, { AuthService } from "../appwrite/auth";
import { logout } from "../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="inline-bock px-6 py-2 text-2xl duration-200 text-teal-100 hover:bg-black rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
