import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MovieDetail from "../components/movieDetail"

function Detail(){
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    const [movieDetail, setMovieDetail] = useState([])

    const getDetailMovie = useCallback(async() =>{
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovieDetail(json.data.movie);
        setLoading(false);  
        }, [id])

    useEffect(()=>{getDetailMovie();},[getDetailMovie])
    console.log(movieDetail)

    return <div>
        
            
                {loading ? <h3>로딩중..</h3> : 
                (<div>
                    <MovieDetail 
                    key={movieDetail.id}
                    id={movieDetail.id}
                    movieImg={movieDetail.large_cover_image} 
                    title={movieDetail.title}
                    genres={movieDetail.genres}
                    />



                </div>)
                }
            
        
        </div>

}
export default Detail