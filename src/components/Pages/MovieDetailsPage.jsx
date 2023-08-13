import { useState, useEffect, Suspense} from "react";
import { getMovie } from "API/services"
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import MovieInfo from "components/MovieInfo";

const MovieDetailsPage = () =>
{
  const { id } = useParams()

  const location = useLocation()

  const [movie, setMovie] = useState({})

  const backLink = location.state?.from
    
useEffect(()=>{handleMovie(id)},[id])
  
  const handleMovie = async (id) => {
      try {
            const res = await getMovie(id);
            setMovie(res)
        } catch (error) {
           console.log(error); 
        }
    }

  return <>
    <button><Link to={backLink}>Back</Link></button>
    <MovieInfo movieDetailInfo={movie} />
    <ul>
      <li><Link to="cast" state={{ from: backLink }}>Cast</Link></li>
      <li><Link to="review" state={{ from: backLink }}>Reviews</Link></li>
    </ul>
    <Suspense fallback={<div>Loading subpage...</div>}>
      <Outlet />
    </Suspense>
  </>
 }

export default MovieDetailsPage