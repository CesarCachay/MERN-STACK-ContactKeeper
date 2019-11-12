import React, { useState } from "react";

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = loginUser;

  const loginChange = e => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const loginSubmit = e => {
    e.prevenDefault();
    console.log("Register submitted!");
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={loginSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={loginChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={loginChange}
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Login;
