import { Route, Routes, useSearchParams } from "react-router-dom";
import {lazy, useState, useEffect } from "react";
import { getTrendMovies, getSearchMovie } from "API/services";


// const MainPage = lazy( ()=> import("./Pages/MainPage"));
// const MoviePage = lazy( ()=> import("./Pages/MoviePage"));
// const SharedLayout = lazy(() => import("./SharedLayout"));
// const MovieDetailsPage = lazy( ()=> import("./Pages/MovieDetailsPage"));
// const MovieCast = lazy( ()=> import("components/MovieCast"));
// const MovieReview = lazy( ()=> import("./MovieReview"));


import MainPage from "./Pages/MainPage";
import MoviePage from "./Pages/MoviePage";
import SharedLayout from "./SharedLayout";
import MovieDetailsPage from "./Pages/MovieDetailsPage";
import MovieCast from "components/MovieCast";
import MovieReview from "./MovieReview";


export const App = () => {

  const [trendMovies, setTrendMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  useEffect(()=>{ handleTrendMovies()},[])
  
  const handleTrendMovies = async () => {
        try {
            const res = await getTrendMovies();
          setTrendMovies(res)
        } catch (error) {
            console.log(error); 
        }
  }
  
  const handleSearchMovie = async (query) => {
         try {
            const res = await getSearchMovie(query);
            setSearchMovie(res)
            setSearchParams({ query: query })
        } catch (error) {
            console.log(error); 
        } 
  }

console.log(trendMovies);

  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        // color: '#010101'
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<MainPage trendMovies={trendMovies} />} />
          <Route path="/movies" element={<MoviePage  searchedMovie={searchMovie} handleSearchClick={handleSearchMovie} />} />
          <Route path="movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="review" element={<MovieReview />} />
          </Route>
          {/* <Route path=":id" element={<MovieDetailsPage/>} /> */}
        </Route>
      </Routes>
    </div>
  );
};
