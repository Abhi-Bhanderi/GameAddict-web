import React, { useState } from "react";
import "./Login.css";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <form class="form login" action="" method="get">
      <div class="formGroup">
        <input
          type="email"
          placeholder="Email ID"
          name="email"
          required
          autocomplete="off"
        />
      </div>
      <div class="formGroup">
        <input
          type="password"
          id="password"
          placeholder="Password"
          required
          autocomplete="off"
        />
      </div>
      <div class="checkBox">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <span class="text">Keep me signed in on this device</span>
      </div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register here.
        </button>
      </div>
      <div class="formGroup">
        <button type="button" class="btn2">
          REGISTER
        </button>
      </div>
    </form>
  );
};
export default Login;

// onClick={() => props.onFormSwitch("register")}
