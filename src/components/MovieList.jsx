// import { Link } from "react-router-dom";
import { Link, MoviesList } from "./MovieList.styled";
import { useLocation } from "react-router-dom";

import PropTypes from 'prop-types';


const MovieList = ({ movies }) => {
    
    const location = useLocation();

    const mapedMovies = movies.map(({ title, id }) => {
        if (location.pathname === "/movies") {
            return <li key={id}>
                <Link to={`${id}`} state={{ from: `${location.pathname}${location.search}` }}>{title}</Link>
            </li>
        }
        return <li key ={id}> <Link to={`/movies/${id}`} state= {{from:location.pathname}} >{title}</Link> </li>
    })
    return (<MoviesList> {mapedMovies} </MoviesList> )  
}

export default MovieList


MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
}