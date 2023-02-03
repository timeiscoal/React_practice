import { useEffect, useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=5.0&sort_by=year");
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false); 
    
  }
  useEffect(()=> {getMovies()}, [])
  console.log(movies)
  return ( 
    <div>
      {loading ? <h1>Loading...</h1> : 
      <div>
        {movies.map((movies) => 
        <div key={movies.id}>
          <h2> {movies.title} </h2>
          <p>{movies.summary}</p>
          <ul>
            {movies.genres.map((genre)=><li key={genre}> {genre}</li>)}
          </ul>
        <img src={movies.large_cover_image} />
      </div>)}
        </div>}
    </div>

  );
}
export default App;
