import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeMovie } from '../../reduxFiles/actions/moviesAction'

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

    //Img handler func
    const handleImgChange= (e) =>{
        const selectedFiles = e.target.files[0]
        setImage(URL.createObjectURL(selectedFiles))
    }

    return (
        <div className="card mb-4" style={{maxWidth: '560px'}}>
            <div className="row g-5">
                <div className="col-md-6">
                    <form > 

                        <input type='file'
                        onChange={handleImgChange}/>
                    </form>

                    { image && <img src={image} alt='preview' style={{ width: '330px' }} />}       

                </div>
                <div className="col-md-4">
                    <div className="card-body">
                        <h5 className="card-title"> { movie } </h5>
                        <p className="card-text"> { ranking } </p>
                    </div>
                        <button onClick={() =>{
                            handleRemove(id)
                        }} > remove </button>
                </div>
            </div>
        </div>
    )
}

export default MovieCard