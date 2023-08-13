import { useState, useEffect } from "react";
import { getMovieOverview } from "API/services"
import { useParams } from "react-router-dom";

const MovieReview = () => { 
    const { id } = useParams()

    const [reviews, setRewievs] = useState([])
    
    useEffect(() => { handleReview(id) }, [id])

    const handleReview = async (id) => {
      try {
            const res = await getMovieOverview(id);
            setRewievs(res)
        } catch (error) {
           console.log(error); 
        }
    }

    const articels = reviews?.map(({id,author,content}) => {
        return <li key ={id}>
                <p>{author}</p>
                <p>{content}</p>
            </li>
    })

    return <ul>{articels.length>0  ?  articels : "No data found"}</ul>
}

export default MovieReview