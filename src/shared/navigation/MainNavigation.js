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

      {!auth.isLoggedIn && <NavLink to="/login">Login</NavLink>}

      {auth.isLoggedIn && auth.isAdmin && (
        <NavLink to="/mkproduct">Make Product</NavLink>
      )}

      {auth.isLoggedIn ? (
        <NavLink to="/logut">Logout</NavLink>
      ) : (
        <NavLink to="/signup">signup</NavLink>
      )}
    </>
  );
}
