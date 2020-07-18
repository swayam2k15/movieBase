import React, { useCallback, useState } from 'react';
import './index.css';
import LoginForm from '../../components/loginForm';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import base from '../../firebaseInit';

function Login({history}) {
    const [error, setError] = useState('');
    const _onLogin = useCallback(async ({ email, password }) => {
        try {
            await base.auth().signInWithEmailAndPassword(email, password).catch((err) => {
                setError(err.message)
                }).then((res) => {
                if(res) {
                    history.push('/');
                }
            })
        } catch(err) {
            console.log(err);
        }
    }, [history]);
    return (
        <React.Fragment>
           {error &&  <div className='errorText'>
                {error}
            </div>}
            <div className='loginWrapper'>
                <div className='loginScreen'>
                    <div className='loginContainer'>
                        <div className='logoPanel'>
                        </div>
                        <div>
                            <LoginForm onLogin={_onLogin}/>
                            <div className='linkAccount'>
                                <Link  to="/signup">Create Your Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </React.Fragment>
        
    )
}

export default withRouter(Login);