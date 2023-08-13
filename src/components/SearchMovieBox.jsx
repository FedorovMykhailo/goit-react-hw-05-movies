const SearchMovieBox = ({handleSearch}) => {

    return <div>
        <form onSubmit={(evt) => {
            evt.preventDefault();
            // console.log(evt.target);
            handleSearch(evt.target.elements[0].value)
            }}>
            <input name="movieSearchBox"></input>
            <button >Search</button>
            </form>
    </div>
    
}

export default SearchMovieBox