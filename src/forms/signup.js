import React, { useContext } from "react";
import axios from "axios";
import AuthContext from "../hooks/auth-hook";

export default function SignUp({ data, change }) {
  const auth = useContext(AuthContext);
  async function submitHandler(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);

    try {
      const sendData = await axios.post(
        "http://localhost:5000/api/users/signup",
        formData
      );
      console.log(sendData);
      auth.login(sendData.data.token);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          value={data.username}
          onChange={(e) => change(e)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          value={data.email}
          onChange={(e) => change(e)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={data.password}
          id="password"
          placeholder="password"
          onChange={(e) => change(e)}
        />

        <label htmlFor="cnfirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={data.confirmPassword}
          id="cnfirmPassword"
          placeholder="Confirm Password"
          onChange={(e) => change(e)}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
