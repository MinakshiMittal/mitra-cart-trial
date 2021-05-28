import { useState } from "react";
import { useAuth } from "../Context/auth-context";
import "./Login.css";

export const Login = () => {
  const { loginUserWithCredentials } = useAuth();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const loginHandler = () => {
    loginUserWithCredentials(username, password);
  };

  return (
    <div className="Login">
      <input
        placeholder="username"
        onChange={(event) => setUsername(event.target.value)}
        type="email"
      />
      <input
        placeholder="password"
        onChange={(event) => setPassword(event.target.value)}
        type="password"
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};
