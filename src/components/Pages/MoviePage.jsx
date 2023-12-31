// import { useState, useEffect } from "react";
// import { getMovies } from "API/services"
import SearchMovieBox from "components/SearchMovieBox";
import MovieList from "components/MovieList";
import PropTypes from 'prop-types';

const MoviePage = ( { searchedMovie, handleSearchClick, handleSaveSearch, handleGetSearch } ) => {

    return <>
        <SearchMovieBox
            handleSearch={handleSearchClick}
            handleSaveMovie={handleSaveSearch}
            handleGetMovie = {handleGetSearch}
        />
   { searchedMovie&&<MovieList movies={searchedMovie}/>}
   </>
}

export default MoviePage

MoviePage.propTypes = {
    searchedMovie: PropTypes.arrayOf(PropTypes.object),
    handleSearchClick: PropTypes.func
}