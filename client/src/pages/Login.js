import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';
  

const Login = (props) => {

  const [formState, setFormState] = useState({ username: '', password: ''});
  const [login, { error }] = useMutation(LOGIN_USER);

  // updates state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });

    console.log(formState);
  };

  // submit form
  const handleFormSubmit = async(event) => {
    event.preventDefault();

    try{
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    }
    catch(e) {
      console.error(e);
    }

    // clear the values from the form
    setFormState({
      username: '',
      password: '',
    });
  };

  return (
    <div>
      <div>

        <img className="pika-cute" src="https://pixy.org/src/108/1088380.png" alt="pikachu-cute"/> 

        <div className="login card mx-auto login-card"
        // keep getting error 'Style prop value must be an object'
        //  style="width: 18rem;"
         >

          <div className="card-body ">

            <h3 className="card-title red-text">Login</h3>
          
            <form action="login" className="login-form" onSubmit={handleFormSubmit}>
              {/* Username Input */}
              <input 
              className="margin-input"
              type="text"
              id="user-login"
              name="username"
              placeholder="Username"
              value={formState.username}
              onChange={handleChange}
              />

              {/* password Input */}
              <input 
              className="margin-input"
              type="password"
              id="password-login"
              name="password"
              placeholder="Password"
              value={formState.password}
              onChange={handleChange}
              />

              <br></br>

              <button class="login-btn btn btn-dark" type="submit">Login</button>

            </form>

            {/* Shows error if Login fails */}
            {error && <div>Login Failed </div>}

          </div>
        </div>
      </div>

{/*     
      <div class="signup card mx-auto signup-card" 
      // keep getting error 'Style prop value must be an object'
      // style="width: 18rem;"
      >
        <div class="card-body ">
          <h3 class="card-title red-text">Sign Up</h3>
          <div>
            <form action="signup" class="signup-form">
              <input class="margin-input" type="text" id="username-signup" name="username" placeholder="Username"/>
              <input class="margin-input" type="password" id="password-signup" name="password" placeholder="Password"/>
              <button class="signup-btn btn btn-dark" type="submit">Sign Up</button>

            </form>
          </div>
        </div>
      </div> */}
      
    </div>
  )
}

export default Login;