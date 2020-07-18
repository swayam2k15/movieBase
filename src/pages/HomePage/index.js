import React, { useCallback, useEffect, useState } from 'react';
import './index.css';
import base from '../../firebaseInit';
import MoviesList from '../../components/moviesItem';
import {get} from '../../helpers/api';

function Home () {
    const [moviesData, setMoviesData] = useState([]);
    const _onSignOut = useCallback(() => {
        base.auth().signOut();
    },[])
    useEffect( ()=> {
        get('https://api.jsonbin.io/b/5f130ef99180616628441277').then((response)=> {
            setMoviesData(response.data);            
        })
        
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
            <MoviesList/>
        </div>
        </React.Fragment>
    )
}

export default Home;
