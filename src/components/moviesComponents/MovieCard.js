import { useDispatch } from 'react-redux'
import { removeMovie } from '../../reduxFiles/actions/moviesAction'

import doctorStrangeImage from '../../Assets/doctor-strange.webp'
import spiderMan from '../../Assets/Spider-man.jpg'
import { MdDelete } from "react-icons/md";

const MovieCard = (props) => {

    const dispatch = useDispatch()
    
    const { id, movie, ranking, poster } = props
    console.log(poster)

    const handleRemove= (id) =>{

        const confirm = window.confirm('Are you sure you want to delete this ?')
            if(confirm){
                dispatch(removeMovie(id))
            }
    }

    const posters = [ doctorStrangeImage, spiderMan]

    return (
        <div className="card-group" style={{width: "14rem", height: "400px"}} >
            <div className='card'>
            <img src={ spiderMan } className="card-img-top" alt="Movies poster" />
            <div className="card-body">
                <small className="card-title"> Name: { movie } </small>
                <small className="card-text"> Ranking: #{ ranking } </small>
                <button onClick={()=>{handleRemove(id)}}
                    style={{border:'none',background:'none', display:'inline-block', float: 'right'}}> <MdDelete size="1.5em" /> </button>
            </div>
            </div>
        </div>
    )
}

export default MovieCard