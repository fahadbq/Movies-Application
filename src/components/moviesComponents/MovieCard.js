import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeMovie } from '../../reduxFiles/actions/moviesAction'

import pic3 from '../../Assets/pic3.jpg'

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
        <div className='border' >
            {/* <div className="col">
                <div class="card">
                    <form > 

                        <input type='file'
                        onChange={handleImgChange}/>
                    </form>

                    { image && <img src={image} alt='preview' className="card-img-top" style={{ width: '330px' }} />}       

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
            </div> */}
                        
                        {/* card */}
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                        <div className="card-group" style={{width: "14rem"}}>
                        <img src={pic3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> Name: { movie } </h5>
                            <p className="card-text"> Ranking: { ranking } </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                        </div>
                        </div>
        </div>
    )
}

export default MovieCard