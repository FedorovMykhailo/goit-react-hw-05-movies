const SearchMovieBox = ({handleSearch, handleSaveMovie, handleGetMovie}) => {

    return <div>
        <form onSubmit={(evt) => {
            evt.preventDefault();
            // console.log(evt.target);
            handleSearch(evt.target.elements[0].value)
            //handleSaveMovie((evt.target.elements[0].value))
            }}>
            <input name="movieSearchBox" onChange={(evt)=>handleSaveMovie(evt.target.value)} value={handleGetMovie()}></input>
            <button >Search</button>
            </form>
    </div>
    
}

export default SearchMovieBox