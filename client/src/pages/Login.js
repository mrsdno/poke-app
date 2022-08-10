import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import './pages.css';
import '../App.css'
import PikaCute from '../assets/pikachu.png'
import EeveeCute from '../assets/eevee.png'

import Auth from '../utils/auth';
  

const Login = (props) => {

  const [formState, setFormState] = useState({ email: '', password: ''});
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
      email: '',
      password: '',
    });

    // redirect user to homepage
    this.props.history.push('/')
      .catch((err) => { console.log(err) });
  };

  return (
    <div className='loginStyle'>
      <div className="container-v">

        <div className='container-h'>
          <img className="pika-cute" src={PikaCute} alt="pikachu-cute"/> 

          <div className='container-v'>

            <h3 className="card-title red-text">Login</h3>
        
            <form action="login" className="login-form" onSubmit={handleFormSubmit}>

              {/* EMAIL Input */}
              <input 
                className="form-1"
                type="email"
                id="user-login"
                name="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={handleChange}
              />

                <br></br>

              {/* password Input */}
              <input 
                className="form-1"
                type="password"
                id="password-login"
                name="password"
                placeholder="Password"
                value={formState.password}
                onChange={handleChange}
              />

              <br></br>

              <button className="btn-3" type="submit">Login</button>

            </form>

            
            
            {/* Shows error if Login fails */}
            {error && <div>Login Failed </div>}

          </div>

          <img className='eevee-cute' src={EeveeCute} alt="pikachu-cute" />

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
            <form action="signup" className="signup-form">
              <input className="margin-input" type="text" id="username-signup" name="username" placeholder="Username"/>
              <input className="margin-input" type="password" id="password-signup" name="password" placeholder="Password"/>
              <button className="signup-btn btn btn-dark" type="submit">Sign Up</button>

            </form>
          </div>
        </div>
      </div> */}
      
    </div>
  )
}

export default Login;