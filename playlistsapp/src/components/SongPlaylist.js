import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data";
import { addSong, removeSong } from "../store";

function SongPlaylist() {
  const dispatch = useDispatch(); //either store object or this hook can be used
  
  const songPlaylist = useSelector((state) => {
    console.log("in selector: ", state);
    //return only the piece of state in this component
    return state.songs;
  });

  const handleSongAdd = (song) => {
    //addSong(songName) will return {type: 'songs/addSong', payload: songName}
    dispatch(addSong(song)); //Need to check if this is equivalent to store.dispatch(addSong(song))
  };
  const handleSongRemove = (song) => {
    dispatch(removeSong(song))
  };
  
  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
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
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add a random Song
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
