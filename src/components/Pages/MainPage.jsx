import MovieList from "components/MovieList";
import PropTypes from 'prop-types';

const MainPage = ({ trendMovies }) => {
    return <MovieList  movies={trendMovies}/>
}

export default MainPage

MainPage.propTypes = {
    trendMovies: PropTypes.arrayOf(PropTypes.object)
}