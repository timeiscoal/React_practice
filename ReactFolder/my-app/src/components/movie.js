import PropTypes from "prop-types"

function Movie({title,summary,genres,movieImg}){
    return <div>
    <h2> {title} </h2>
    <img src={movieImg} alt={title} />
    <p>{summary}</p>
    <ul>
      {genres.map((genre)=><li key={genre}> {genre}</li>)}
    </ul>
    </div>

}

Movie.propTypes = {
    movieImg : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default Movie;