import React, { useContext } from "react";
import axios from "axios";
import AuthContext from "../hooks/auth-hook";

export default function Login({ data, change }) {
  const auth = useContext(AuthContext);

  async function handleLogin(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    const sendData = await axios.post(
      `http://localhost:5000/api/users/login`,
      formData
    );

    auth.login(sendData.data.token);
    console.log(sendData.data.token);
  }
  return (
    <>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          value={data.email}
          name="email"
          onChange={(e) => change(e)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          value={data.password}
          name="password"
          onChange={(e) => change(e)}
        />

        <button type="submit">Login</button>
      </form>
    </>
  );
}
