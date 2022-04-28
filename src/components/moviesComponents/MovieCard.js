import { useDispatch } from 'react-redux'
import { removeMovie } from '../../reduxFiles/actions/moviesAction'

import swal from 'sweetalert';
import { MdDelete } from "react-icons/md";
import doctorStrangeImage from '../../Assets/doctor-strange.webp'
//import spiderMan from '../../Assets/Spider-man.jpg'

const MovieCard = (props) => {

    const dispatch = useDispatch()
    
    const { id, movie, ranking } = props

    const handleRemove= (id) =>{

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this movie!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your movie has been deleted!", {
                icon: "success",
              });
              dispatch(removeMovie(id))
            } else {
              swal("Your movie is safe!");
            }
          });
    }


    return (
        <div className="card-group" style={{width: "15rem", height: "400px" }} >
            <div className='card'>
            <img src={doctorStrangeImage} className="card-img-top" alt="Movies poster" />
            <div className="card-body" style={{ backgroundColor: "#232F3E" }} >
                <h6 className="card-title" style={{color: "#f2f2f4"}} > Name: { movie } </h6>
                <div className="card-text" style={{color: "#f2f2f4"}} > <small> Ranking: { ranking } </small> </div>
                <button onClick={()=>{handleRemove(id)}}
                    style={{border:'none',background:'none', display:'inline-block', float: 'right'}}> <MdDelete size="1.5em" color="#f2f2f4" /> </button>
            </div>
            </div>
        </div>
    )
}

export default MovieCard