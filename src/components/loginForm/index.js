
import React, { useState } from 'react';
import {validatePassword , validateEmail} from '../../helpers/validation'

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    return (
        <div>
                <h3 className='memLoginHeader'>Member Login</h3>
                <div className="form-group">
                    <input value={email} onChange={e => setEmail(e.target.value)}type="email" className="inputBoxPadding inputBox" placeholder=" Email" ></input>
                   {email && validateEmail(email) &&  <p className='invalid'>
                        Invalid Email
                    </p>}
                </div>
                <div className="form-group">
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="inputBoxPadding inputBox" placeholder="Password" ></input>
                    {password && validatePassword(password) &&  <p className='invalid'>
                        Invalid Password
                    </p>}
                </div>
                <button type='button' onClick={() => onLogin({ email, password })} disabled={!(email.length > 0 && password.length > 0)} type="submit" className="loginButton inputBox">Login</button>
        </div>
    )
}

export default LoginForm;