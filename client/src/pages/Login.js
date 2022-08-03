import React from 'react'

function Login() {
  return (
    <div>
      <div>

        <img className="pika-cute" src="https://pixy.org/src/108/1088380.png" alt="pikachu-cute"/> 

        <div className="login card mx-auto login-card" style="width: 18rem;">

          <div className="card-body ">

            <h3 className="card-title red-text">Login</h3>
          
            <form action="login" class="login-form">
              <input class="margin-input" type="text" id="user-login" name="user-login" placeholder="Username"/>
              <input class="margin-input" type="password" id="password-login" name="password-login" placeholder="Password"/>

              <br></br>

              <button class="login-btn btn btn-dark" type="submit">Login</button>

            </form>
          </div>
        </div>
      </div>

    
      <div class="signup card mx-auto signup-card" style="width: 18rem;">
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
      </div>
      
    </div>
  )
}

export default Login;