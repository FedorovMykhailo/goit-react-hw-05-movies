import axios from "axios";

//const API_KEY = "37c5294f36588c9cbaf23baced16cf0f";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2M1Mjk0ZjM2NTg4YzljYmFmMjNiYWNlZDE2Y2YwZiIsInN1YiI6IjY0ZDIzYzY1NTQ5ZGRhMDBjNTQwYWRmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UvZYgf5pQep4y6mx_MJjs8qzNG2R9hnl7D9EB6jRj7Q'
  }
}

axios.defaults.url = "https://api.themoviedb.org/3/";
axios.defaults.headers = options.headers

export const getTrendMovies = async () => {
    try {
        const movies = await axios.get("https://api.themoviedb.org/3/trending/all/day?language=en-US",options)
        return movies.data.results
    } catch (error) {
        console.log(error);
    }
}

export const getMovie = async (id) => {
    try {
        const movie = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        // console.log("moviedata");
        // console.log(movie.data);
        return movie.data
    } catch (error) {
        console.log(error);
    }
}

export const getSearchMovie = async (query) => {
    try {
        const movie = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
        // console.log("moviedata");
        // console.log(movie.data);
        return movie.data.results
    } catch (error) {
        console.log(error);
    }
}


export const getMovieCredits = async (id) => {
    try {
        const credits = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, options)
        //  console.log("cast");
        //   console.log(credits.data.cast);
        return credits.data.cast
    } catch (error) {
        console.log(error);
    }
}


export const getMovieOverview = async (id) => {
    try {
        const reviews = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews`, options)
        //  console.log("reviews");
        //   console.log(reviews.data.results);
        return reviews.data.results
    } catch (error) {
        console.log(error);
    }
}




// export default getTrendMovies
// export default getMovies