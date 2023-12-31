import { Route, Routes, Navigate, useSearchParams } from "react-router-dom";
import { lazy, useState, useEffect } from "react";
//import {useState, useEffect } from "react";
import { getTrendMovies, getSearchMovie } from "API/services";

import SharedLayout from "./SharedLayout";
const MainPage = lazy( ()=> import("./Pages/MainPage"));
const MoviePage = lazy( ()=> import("./Pages/MoviePage"));
//const SharedLayout = lazy(() => import("./SharedLayout"));
const MovieDetailsPage = lazy( ()=> import("./Pages/MovieDetailsPage"));
const MovieCast = lazy( ()=> import("components/MovieCast"));
const MovieReview = lazy( ()=> import("./MovieReview"));


// import MainPage from "./Pages/MainPage";
// import MoviePage from "./Pages/MoviePage";
// 
// import MovieDetailsPage from "./Pages/MovieDetailsPage";
// import MovieCast from "components/MovieCast";
// import MovieReview from "./MovieReview";


export const App = () => {

  const [trendMovies, setTrendMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState([])
  const [saveSearcMovie, setSaveSearcMovie] = useState("")
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  useEffect(() => { handleTrendMovies() }, [])
  //useEffect(() => { setSaveSearcMovie("") }, [])
  
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

    const handleSaveSearchMovie =  (searchQuery) => {
         setSaveSearcMovie(searchQuery)
        } 

    const handlGetSearchMovie =  () => {
         return saveSearcMovie   
    }

  
  
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
          <Route path="/movies" element={<MoviePage
            searchedMovie={searchMovie}
            handleSearchClick={handleSearchMovie}
            handleSaveSearch={handleSaveSearchMovie}
            handleGetSearch={handlGetSearchMovie } />} />
          <Route path="movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="review" element={<MovieReview />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
          {/* <Route path=":id" element={<MovieDetailsPage/>} /> */}
        </Route>
      </Routes>
    </div>
  );
};
