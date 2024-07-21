import "./styles.css";
import MoviePlaylist from "./components/MoviePlaylist";
import MovieForm from "./components/MovieForm";
import MovieSearch from "./components/MovieSearch";
import MovieCount from "./components/MovieCount";
import SongPlaylist from "./components/SongPlaylist";
import store from "./store";
import reset from "./store/actions.js"

export default function App() {

  const handleResetClick = () => {
    store.dispatch(reset());
  };

  return (
    <div className="container is-fluid">
      <hr />
      <MovieForm />
      <br /> <br />
      <MovieSearch />
      <br />
      <MoviePlaylist />
      <MovieCount />
      <hr />
      <SongPlaylist />
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Playlists
      </button>
    </div>
  );
}
