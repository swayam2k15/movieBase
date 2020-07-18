import React, { useCallback } from 'react';
import base from '../../firebaseInit';
import './index.css';

function Header() {
    const _onSignOut = useCallback(() => {
        base.auth().signOut();
    },[]);

    return (
        <header>
            <div className='headerContainer'>
                <h1 className='movieHeader'>Movies List</h1>
                <button className='signOut loginButton inputBox' onClick={_onSignOut}>Sign Out</button>
            </div>
        </header>
    )
}

export default Header;