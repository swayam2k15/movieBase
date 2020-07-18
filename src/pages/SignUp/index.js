import React,{useCallback} from 'react';
import './index.css';
import { withRouter } from 'react-router';
import SignUpForm from '../../components/signUpForm';
import base from '../../firebaseInit';

function SignUp({history}) {
    const _onSignUp = useCallback(async ({ email, password }) => {
        try {
            await base.auth().createUserWithEmailAndPassword(
                email,
                password
            ).then(() => {
                history.push('/');
            });
        } catch(err) {
            console.log(err);
        }
}, [history]);

    return (
        <div className='loginWrapper'>
            <div className='loginScreen'>
                <div className='loginContainer'>
                    <div className='logoPanel'>
                    </div>
                    <div>
                        <SignUpForm onSignUp={_onSignUp} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SignUp);