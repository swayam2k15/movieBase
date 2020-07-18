
import React, { useState, useCallback } from 'react';

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    return (
        <div>
                <h3 className='memLoginHeader'>Member Login</h3>
                <div className="form-group">
                    <input value={email} onChange={e => setEmail(e.target.value)}type="email" className="inputBoxPadding inputBox" placeholder=" Email" ></input>
                </div>
                <div className="form-group">
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="inputBoxPadding inputBox" placeholder="Password" ></input>
                </div>
                <button  onClick={() => onLogin({ email, password })} disabled={!(email.length > 0 && password.length > 0)} type="submit" className="loginButton inputBox">Login</button>
                <p className="forgotPassword text-right">
                    Forgot <a href="#">Username / Password?</a>
                </p>


        </div>
    )
}

export default LoginForm;