import React,{useCallback , useState} from 'react';
import './index.css';
import { withRouter } from 'react-router';
import SignUpForm from '../../components/signUpForm';
import base from '../../firebaseInit';

function SignUp({history}) {
    const [error, setError] = useState('');
    const _onSignUp = useCallback(async ({ email, password }) => {
        try {
            await base.auth().createUserWithEmailAndPassword(
                email,
                password
            ).catch((err)=> {
                setError(err.message)
            })
            .then(() => {
                history.push('/');
            });
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
                        <SignUpForm onSignUp={_onSignUp} />
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
        
    )
}
export default withRouter(SignUp);