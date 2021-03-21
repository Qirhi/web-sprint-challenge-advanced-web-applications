import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialCredentialValue = {
  username: "",
  password: ""
}

const initialFormErrors = {
  isError: false,
  message: 'Username or Password not valid.',
}

const Login = () => {
  const [credentials, setCredentials] = useState(initialCredentialValue);
  const [formErrors, setFormErrors] = useState(initialFormErrors); // errors

  const history = useHistory();

  const handleChange = e => {
    const userLoginInfo = {...credentials, [e.target.name]: e.target.value}
    setCredentials(userLoginInfo);
  };

  const doLogin = () => {
    console.log("doLogin fired")
    console.log("credentials: ", credentials)
    axios.post("http://localhost:5000/api/login", credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem("authToken", res.data.payload);
      // redirect to logged in homepage
      history.push("/bubbles");
    })
    .catch(err => {
      setFormErrors({
        ...initialFormErrors,
        isError: true
      })
      console.log(err)
    });
  }

  const handleSubmit = (e) => {
    console.log("handleSubmit fired")
    e.preventDefault();
    doLogin(credentials);
  };

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });

  
  return (
    <>

      <div className="login-container">
        <h1>
          Welcome to the Bubble App!
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            id="username" 
            label="Username" 
            name="username" 
            placeholder="Username"
            value={credentials.username} 
            onChange={handleChange}
          />
          <input 
            id="password" 
            label="Password" 
            name="password" 
            placeholder="Password"
            value={credentials.password} 
            onChange={handleChange}
          />
          <button 
            type="submit"
          >
            Login
          </button>
          <div>{formErrors.isError? formErrors.message : ""}</div>
        </form>

      </div>

    </>
  );
};

export default Login;
