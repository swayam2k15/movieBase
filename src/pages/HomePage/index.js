import React, { useCallback } from 'react';
import './index.css';
import base from '../../firebaseInit';

function Home () {
    const _onSignOut = useCallback(() => {
        base.auth().signOut();
    },[])

    return (
        <React.Fragment>
        <div>
            <div className='headerContainer'>
            <header className='movieHeader'>Movies List</header>
            <button className='signOut loginButton inputBox ' onClick={ _onSignOut}>Sign Out</button>
            </div>
            
        </div>
        <div className='moviesList'>
            Movies Array
        </div>
        </React.Fragment>
    )
}

export default Home;
