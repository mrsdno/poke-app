import React from 'react'

function Login() {
  return (
    <div>
      <div>

        <img className="pika-cute" src="https://pixy.org/src/108/1088380.png" alt="pikachu-cute"/> 

        <div className="login card mx-auto login-card">

          <div className="card-body">

            <h3 className="card-title red-text">Login</h3>
          
            <form action="login" className="login-form">
              <input className="margin-input" type="text" id="user-login" name="user-login" placeholder="Username"/>
              <input className="margin-input" type="password" id="password-login" name="password-login" placeholder="Password"/>

              <br></br>

              <button className="login-btn btn btn-dark" type="submit">Login</button>

            </form>
          </div>
        </div>
      </div>

    
      <div className="signup card mx-auto signup-card">
        <div className="card-body ">
          <h3 className="card-title red-text">Sign Up</h3>
          <div>
            <form action="signup" className="signup-form">
              <input className="margin-input" type="text" id="username-signup" name="username" placeholder="Username"/>
              <input className="margin-input" type="password" id="password-signup" name="password" placeholder="Password"/>
              <button className="signup-btn btn btn-dark" type="submit">Sign Up</button>

            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Login;