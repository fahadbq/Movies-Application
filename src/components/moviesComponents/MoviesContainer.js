import React from 'react'
import MoviesForm from './MoviesForm'
import MoviesStat from './MoviesStat'
import MovieList from './MoviesList'

const MoviesContainer = (props) =>{

    
    return (
        <div>
            <MovieList />
                
            <MoviesForm />

            <MoviesStat />       
        </div>
    )
}

export default MoviesContainer