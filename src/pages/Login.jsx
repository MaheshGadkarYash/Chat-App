import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Mahi Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="submit">Sign In</button>
        </form>
        <p>Yoy do have an account?Register</p>
      </div>
    </div>
  );
};

export default Login;
