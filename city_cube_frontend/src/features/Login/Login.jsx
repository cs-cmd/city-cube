import "./Login.css";
import { useState } from "react";

export default function Login({ userStore, setPageType }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginClick() {
    fetch('http://localhost:3000/api/account/login', {
      method: "POST",
    })
    .then(res => {
      console.log(res);
      return res;
    }) 
    .then(json => {
      console.log(json);
    })
    .catch(err => console.log(err));
  }

  return (
    <div className="account-login">
      <h1>Login</h1>
      <input
        type="text"
        className="page-input"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type='password'
        className="page-input"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLoginClick}
        className="page-button">
        Login
      </button>
      <p>Don&apos;t have an account? <button className='link reactive-link' onClick={() => setPageType()}>Sign up here!</button></p>
    </div>
  );
}
