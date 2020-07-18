
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

function SignUpForm({ onSignUp }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
                <h3 className='memLoginHeader'>Member SIGN UP</h3>
                <div className="form-group">
                    <input value={email} onChange={e => setEmail(e.target.value)}type="email" className="inputBoxPadding inputBox" placeholder=" Email" ></input>
                </div>
                <div className="form-group">
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="inputBoxPadding inputBox" placeholder="Password" ></input>
                </div>
                <button  onClick={() => onSignUp({ email, password })} disabled={!(email.length > 0 && password.length > 0)} type="submit" className="loginButton inputBox">Sign Up</button>
                
            </div>
    )
}

SignUpForm.propTypes = {
    onSignUp : PropTypes.func.isRequired,
}
export default SignUpForm;
