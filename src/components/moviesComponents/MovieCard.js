import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeMovie } from '../../reduxFiles/actions/moviesAction'

import doctorStrangeImage from '../../Assets/doctor-strange.webp'
import { MdDelete } from "react-icons/md";

const MovieCard = (props) =>{
    const [ image, setImage ] = useState(null)

    const dispatch = useDispatch()
    
    const { id, movie, ranking } = props

    const handleRemove= (id) =>{

        const confirm = window.confirm('Are you sure you want to delete this ?')
            if(confirm){
                dispatch(removeMovie(id))
            }
    }

    return (

        <div className="card-group mt-3 border shadow rounded" style={{ width: '12rem' }} >
                    <img className="card-img-top" src={doctorStrangeImage} alt='img'/>
                    <div className="card-body">
                        <h5 className="card-title">Name : { movie }</h5>
                        <p className="card-title">Ranking : #{ ranking}</p>
                        <button onClick={()=>{handleRemove(id)}} style={{border:'none',background:'none', display:'inline-block', float: 'right'}}> <MdDelete size="1.5em" /> </button>
                    </div>
            </div>
    )
}

export default MovieCard

//make changes to row and make it look clean 