import React from 'react'
import './Login.css'

function Login() {
    return (
        <div>
            <div className="login_form">
                <div class="left">
                    <img src="image/logshoes.png" />
                </div>

                <div class="right">
                    <h1>Welcome Back!</h1>

                    <form action="#" method="post">
                        <p>User Name</p>
                        <div class="user">
                            <i class="fa-solid fa-user"></i>
                            <input type="text" name="user" placeholder="User Name" class="username" />
                        </div>

                        <p class="passworg_tag">Password</p>
                        <div class="password">
                            <i class="fa-solid fa-lock"></i>
                            <input type="text" name="password" placeholder="Password" />
                        </div>

                        <p class="forget">Forget Password ?</p>

                        <button type="submit">Login</button>
                        <div class="loging_icon">
                            <a href="#"><img src="image/google.png" /></a>
                            <a href="#"><img src="image/facebook.png" /></a>
                            <a href="#"><img src="image/twitter.png" /></a>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default Login