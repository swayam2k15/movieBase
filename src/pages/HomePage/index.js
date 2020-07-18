import React, { useEffect, useState } from 'react';
import './index.css';
import MoviesList from '../../components/movieList';
import {get} from '../../helpers/api';
import Header from '../../components/header';

function Home () {
    const [moviesData, setMoviesData] = useState([]);
    useEffect( ()=> {
        get('https://api.jsonbin.io/b/5f132c64c58dc34bf5d5eb09').then((response)=> {
            setMoviesData(response.data);            
        })
        
    },[])

    return (
        <React.Fragment>
                <Header />
                <div className="movieListContainer">
                    {moviesData.map(({ genre, list }) => (
                        <div className="movieListWrapper">
                            <h2>{genre}</h2>
                            <MoviesList list={list} />
                        </div>
                    ))}
                </div>
        </React.Fragment>
    )
}

export default Home;
