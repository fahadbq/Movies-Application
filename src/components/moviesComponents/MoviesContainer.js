import React from 'react'
import MoviesForm from './MoviesForm'
import MoviesStat from './MoviesStat'
import MovieList from './MoviesList'

const MoviesContainer = (props) =>{
    
    
    
    return (
        
        <div className='container' style={{ position: 'fixed', width: "1000px", left: "50px", top: "10px" }}>

            <h2 style={{fontFamily:"monospace", color: "#37475A" }} > Movies Rating list </h2> <br />
            
            <MovieList />
                
            <MoviesForm />

            <MoviesStat />       
        </div>
    )
}

export default MoviesContainer