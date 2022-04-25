import React from 'react'
import { useSelector } from 'react-redux'

const MoviesStat = (props) =>{

    const movies = useSelector((state) =>{
        return state.movies
    })

    const top3 = [ ...movies.sort((a, b) =>{ return b.ranking - a.ranking }).slice(0, 3) ] // show only recent 3 id's 

    console.log(top3)

    return (
        <div className="border shadow p-3 mb-5 bg-body rounded" style={{ position: "fixed", width: "300px", right: "150px", bottom: "50px"}} >
            <h3> Movies Stat </h3>

            <h4> Total Movies - {movies.length} </h4>

            <h5> # Top Ranked Movies </h5>

            { top3.map( ele => { return <p key={ele.id} > - {ele.movie} </p> }) }
  
        </div>
    )
}

export default MoviesStat