import MovieList from "components/MovieList";

const MainPage = ({ trendMovies }) => {
    console.log("main");
    return <MovieList  movies={trendMovies}/>
}

export default MainPage