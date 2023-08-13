// import { useState, useEffect } from "react";
// import { getMovies } from "API/services"
import SearchMovieBox from "components/SearchMovieBox"
import MovieList from "components/MovieList"

const MoviePage = ( { searchedMovie, handleSearchClick} ) => {

    return <>
    <SearchMovieBox handleSearch={handleSearchClick} />
   { searchedMovie&&<MovieList movies={searchedMovie}/>}
   </>

}

export default MoviePage