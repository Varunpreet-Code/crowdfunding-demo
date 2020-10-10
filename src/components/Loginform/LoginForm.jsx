import React, { useState } from "react";
import {Link, useHistory } from "react-router-dom";
import "./LoginForm.css";



function LoginForm() {
  // variables
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();
  //methods
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        if (response.token != null) {
          history.push("/");
        }
      });
    }
  };

  const SignupLink = ({inUpClick}) => (
    <div className="signup-link">
      <p className="set-up"> 
        Don't have an account? {" "}
        <a href="#" onClick={inUpClick}>Sign Up Here</a>
      </p>
    </div>
);

  return (
    <form className = "login">
      <h1>Login Page</h1>
      <p>Please add your username and password below:</p>


      <div className = "enterdetails">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
      <div className = "enterdetails">
        <label htmlFor="password">password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          onChange={handleChange}/>
      </div>

      
      <button classname ="submit-button" type="submit" onClick={handleSubmit}>
        Login
      </button>
      <div className= "set-up">
        <label> Don't have a account?</label>
        <Link  to="/signup/">  Sign Up </Link>
      </div>
    </form>
  );
}

export default LoginForm;
