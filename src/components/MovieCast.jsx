import { useState, useEffect } from "react";
import { getMovieCredits } from "API/services"
import { useParams } from "react-router-dom";
import { Foto } from "./MovieCast.styled";

const MovieCast = () => { 
    const { id } = useParams()
    
    const [cast, setCast] = useState([])
    
    useEffect(() => { handleCast(id) }, [id])
  
    const handleCast = async (id) => {
      try {
            const res = await getMovieCredits(id);
            setCast(res)
        } catch (error) {
           console.log(error); 
        }
    }

    const actors = cast?.map(({ id, name, profile_path }) => {
    const img = (profile_path) ? `https://image.tmdb.org/t/p/original/${profile_path}` : require('../../src/components/images/default_img.jpg')
        
    return <li key={id}>
                <p>{name}</p>
                <Foto src = {img} alt={name}/>
            </li>
    })
    return <ul>{actors.length>0 ? actors: "No data found"}</ul>
}

export default MovieCast