
import React from 'react';

function MoviesItem({ item }) {
    const { title, imageUrl, cast, description, rating } = item;

    return (
        <div className='moviesWrapper'>
            <div className='imageContainer'>
                <img className='thumbnail' alt="Movie" src={imageUrl} />
                <div className='infoContainer'>
                    <h3 className='movieName'>{title}</h3>
                    <p className='cast'>{cast}</p>
                    <p className='description'>{description}</p>
                    <p className='description'>Rating: {rating}%</p>
                </div>
            </div>
        </div>
    );
}

export default MoviesItem;
