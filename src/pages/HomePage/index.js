import React, { useCallback } from 'react';
import './index.css';
import base from '../../firebaseInit';

function Home () {
    const _onSignOut = useCallback(() => {
        base.auth().signOut();
    },[])

    return (
        <div>
            <button className='signOut' onClick={ _onSignOut}>Sign Out</button>
        </div>
    )
}

export default Home;
