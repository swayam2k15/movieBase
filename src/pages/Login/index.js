import React from 'react';
import './index.css';
// import loginLogo from '../../assets/loginLogo'

export default function Login() {
    return (
        <div className='loginWrapper'>
            <div className='loginScreen'>
                <div className='logoPanel'>
                    {/* <img className='loginImage' src={loginLogo}></img> */}
                </div>
            <form>
                <h3>Member Login</h3>
                <div className="form-group">
                    <input type="email" className="inputBoxPadding inputBox" placeholder=" Email" ></input>
                </div>
                <div className="form-group">
                    <input type="password" className="inputBoxPadding inputBox" placeholder="Password" ></input>
                </div>
                <button type="submit" className="loginButton inputBox">Login</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">Username / Password?</a>
                </p>
            </form>

                
            </div>
        </div>
    )
}