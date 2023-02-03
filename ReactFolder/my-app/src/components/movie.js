import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function Movie({id,title,summary,genres,movieImg}){
    return <div>
    <h2> 
       <Link to ={`/movie/${id}`}>{title}</Link>
    </h2>
    <img src={movieImg} alt={title} />
    <p>{summary}</p>
    <ul>
      {genres.map((genre)=><li key={genre}> {genre}</li>)}
    </ul>
    </div>

}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    movieImg : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default Movie;