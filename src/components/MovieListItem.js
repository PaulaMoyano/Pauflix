import "./MovieListItem.css"

const MovieListItem = ({ movie }) => {
    return (<div className="movie-list-item">
        <img src={movie.cover} alt={movie.title} />
    </div>)
}

export default MovieListItem