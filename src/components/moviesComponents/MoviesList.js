import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import Search from './Search'

const MovieList = (props) =>{

    //redux state
    const moviesData = useSelector((state) => state.movies )

    const [ search, setSearch ] = useState('')
    const [ orderBy, setOrderBy ] = useState('')
    const [ filterBy, setFilterBy ] = useState ([])

    //use Effect for the first render and deep copy to copy data to other state 
    useEffect(() =>{
        setFilterBy([...moviesData])
    }, [moviesData])

    const handleChange = (e) =>{
        const readName = e.target.name
        const read = e.target.value

            if( readName === 'search' ){
                setSearch(read)
            } else if ( readName === 'orderBy') {
                setOrderBy(read)
            }

        //filtering search
        if(readName === 'search'){
            const filteredMovies = moviesData.filter((f) =>{
                return f.movie.toLowerCase().includes(read.toLowerCase()) || f.ranking.toString().includes(read)
            })
            setFilterBy(filteredMovies) 
        }
        
        //orderBy sorting
        if(readName === 'orderBy'){
            switch(read){
                case 'A to Z': 
                    return [ ...filterBy.sort((a, b) =>{
                        if( a.movie < b.movie ) { return -1 }
                        if( a.movie > b.movie ) { return 1 }
                        return 0
                    }) ]
                case 'Z to A': 
                    return [ ...filterBy.sort((a, b) =>{
                        if( b.movie < a.movie ) { return -1 }
                        if( b.movie > a.movie ) { return 1 }
                        return 0
                    }) ]
                case '1-100':
                    return [ ...filterBy.sort((a, b) => {
                        return a.ranking - b.ranking
                    }) ]
                case '100-1': 
                    return [ ...filterBy.sort((a, b) =>{
                        return b.ranking - a.ranking
                    }) ]
                default: return [...moviesData]
            }
        }
    }

    return (
        <div>
            <h2> My Big Movie List </h2> <br />

            < Search search={search} handleChange={handleChange} orderBy={orderBy} />

            { filterBy.map((ele) =>{
                return  <MovieCard key={ele.id}
                    { ...ele}
                />
            }) }
            
        </div>
    )
}

export default MovieList