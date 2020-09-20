import React from 'react';
import './login.css';
import Nav from '../home/nav/nav';
import Image from '../../grand-canyon.jpg';

const Login = () => {
    return (
        <div className = 'Login'>
            <Nav />

            <div className = 'form'>
                <form>
                    <h3 id = 'login-title'>LOGIN</h3>

                    <div id = 'form-var'>
                        {/* <label for = 'username'>Username</label> */}
                        <input name = 'username' type = 'text' placeholder = 'Username' />
                    </div>
                    <div id = 'form-var'>
                        {/* <label for = 'password'>Password</label> */}
                        <input name = 'password' type = 'password' placeholder = 'Password' />
                    </div>
                    <button>SUBMIT</button>
                </form>
            </div>

            <img src = { Image } id = 'background' alt = 'The grand canyon' /> 

            
        </div>
    )
}

export default Login;