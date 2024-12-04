import React from "react";
import { useContext } from "react";

import { NavLink } from "react-router-dom";
import AuthContext from "../../hooks/auth-hook";

export default function MainNavigation() {
  const auth = useContext(AuthContext);
  return (
    <>
      <NavLink to="/">Home</NavLink>
      {auth.isLoggedIn && <NavLink to="/cart">Cart</NavLink>}
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">signup</NavLink>
    </>
  );
}
