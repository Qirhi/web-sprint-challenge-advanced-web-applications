import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialCredentialValue = {
  username: "",
  password: ""
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState(initialCredentialValue);

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
      history.push("/protected");
    })
    .catch(err => console.log(err));
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
            value={credentials.username} 
            onChange={handleChange}
          />
          <input 
            id="password" 
            label="Password" 
            variant="filled" 
            name="password" 
            value={credentials.password} 
            onChange={handleChange}
          />
          <button 
            type="submit"
          >
            Login
          </button>
        </form>

      </div>

    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.