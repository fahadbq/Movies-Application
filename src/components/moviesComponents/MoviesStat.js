import React from 'react'
import { useSelector } from 'react-redux'

const MoviesStat = (props) =>{

    const movies = useSelector((state) =>{
        return state.movies
    })

    const top3 = [ ...movies.sort((a, b) =>{ return b.ranking - a.ranking }).slice(0, 3) ] // show only recent 3 id's 

    console.log(top3)

    return (
        <div className="border p-3 shadow-lg rounded" >
            <h2> Movies Stat </h2>

            <h3> Total Movies - {movies.length} </h3>

            <h4> # Top Ranked Movies - { top3.map( ele => { return <p key={ele.id} > {ele.movie} </p> }) }  </h4>
  
        </div>
    )
}

export default MoviesStat