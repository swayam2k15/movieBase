
import React, { useState, useCallback } from 'react';

function MoviesList() {
    

    return (
        <div className='moviesWrapper'>
            <div className='imageContainer'>
                <img className='thumbnail' src='https://picsum.photos/200/300'></img>
                <div className='infoContainer'>
                <h3 className='movieName'>Pirates of Carribean</h3>
                <p className='cast'>Shah Rukh Aamir</p>

            </div>
            </div>
            
        </div>
    )
}

export default MoviesList;