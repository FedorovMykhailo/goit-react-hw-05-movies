import { Poster, Wrapper, WrapperInfo, FilmTitle, Title, Info, GenreList } from "./MovieInfo.styled";
import PropTypes from 'prop-types';

const MovieInfo = ({ movieDetailInfo }) => {
    const { original_title, release_date, poster_path, overview, vote_average, genres } = movieDetailInfo

    const genresMaped = genres?.map(({ id, name }) => { return <li key={id}>{name}</li> })

    const year = new Date(release_date);
    
    const img = (poster_path) ? `https://image.tmdb.org/t/p/original/${poster_path}` : require('../components/images/default.jpg')

    return <Wrapper>
            <Poster src={img} alt={original_title} />
            <WrapperInfo>
                <FilmTitle>{`${original_title} (${year.getFullYear()})`}</FilmTitle>
                <Info>{`User score ${Math.ceil(vote_average*10)} %`}</Info>
                <Title>Overview</Title>
                <Info>{overview}</Info>
                <Title>Genres</Title>
                <GenreList>{genresMaped}</GenreList>
            </WrapperInfo>
    </Wrapper> 
}

export default MovieInfo

MovieInfo.propTypes = {
    movieDetailInfo: PropTypes.object
}