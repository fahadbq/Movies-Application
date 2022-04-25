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
        <div className='border' style={{width: "180px"}} >
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
                        {/* <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                        <div className="card-group" style={{width: "11rem"}}>
                        <img src={pic3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> Name: { movie } </h5>
                            <p className="card-text"> Ranking: { ranking } </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a> 
                        </div>
                        </div>
                        </div>
                        </div> */}

                        <div className="card mt-2 p-2 bd-highlight border shadow rounded" style={{ width: '16rem' }} >
                                   <img className="card-img-left pt-2" src={pic3} alt='img'/>
                                    <div className="card-body">
                                        <h4 className="card-title">Name : { movie }</h4>
                                        <h5 className="card-title">Ranking : #{ ranking}</h5>
                                        <button onClick={()=>{handleRemove(id)}} style={{border:'none',background:'none', display:'inline-block', float: 'right'}}><img src='https://www.pngall.com/wp-content/uploads/5/Delete-Bin-Trash-PNG-Clipart.png' alt='delete' style={{width:'2rem'}}/></button>
                                    </div>
                            </div>
                        
                        
        </div>
    )
}

export default MovieCard

//make changes to row and make it look clean 