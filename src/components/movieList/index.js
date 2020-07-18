import React from 'react';
import MoviesItem from '../moviesItem';

function MovieList({ list }) {
    return (
        <div className="moviesList">
            {list.map((item, index) => (
                <MoviesItem item={item} key={index} />
            ))}
        </div>
    );
}

export default MovieList;