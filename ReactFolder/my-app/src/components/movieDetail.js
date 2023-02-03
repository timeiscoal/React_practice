import PropTypes from "prop-types"
import { Link } from "react-router-dom";

function MovieDetail({title,summary,genres,movieImg}){
    return <div>
    <h2> {title} </h2>
    <img src={movieImg} alt={title} />
    <p>{summary}</p>
    <ul>
      {genres.map((genre)=><li key={genre}> {genre}</li>)}
    </ul>
    <p><Link to={`/`}> 뒤로가기  </Link></p>
    </div>

}

MovieDetail.propTypes = {
    id : PropTypes.number.isRequired,
    movieImg : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default MovieDetail;