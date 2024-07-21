import { useSelector } from "react-redux";
import { createRandomMovie } from "../data";
import { addMovie, removeMovie } from "../store";
import store from "../store";

function MoviePlaylist() {
  const { moviesList, name }  = useSelector(({movieForm, movies: {list, searchText}}) => {
    const filteredMovies = list.filter((movie) => 
      movie.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return {
      moviesList: filteredMovies,
      name: movieForm.name
    }

  });

  const handleRandomMovieAdd = (movieName) => {
    store.dispatch(addMovie({
      name: movieName,
      cost: 100
    }));//either store object or useDispatch hook can be used
  };
  const handleMovieRemove = (movieId) => {
    store.dispatch(removeMovie(movieId));
  };

  const renderedMovies = moviesList.map((movie) => {
    const bold = name && movie.name.toLowerCase().includes(name.toLowerCase());

    return (
      <li key={movie.id} className={`panel ${bold && "bold"}`}>
        {movie.name} - Rs.{movie.cost}
        <button
          onClick={() => handleMovieRemove(movie.id)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleRandomMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add a random Movie
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
