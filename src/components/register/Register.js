import React, { useState } from "react";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <form class="form signUp" action="" method="get">
      <div class="formGroup">
        <input
          type="text"
          id="userName"
          placeholder="User Name"
          autocomplete="off"
        />
      </div>
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
      <div class="formGroup">
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          required
          autocomplete="off"
        />
      </div>

      <div class="formGroup">
        <input
          type="file"
          id="avatar"
          placeholder="Choose your avatar"
          required
          autocomplete="off"
        />
      </div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
        >
          Already have an account? Login here.
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

export default Register;
