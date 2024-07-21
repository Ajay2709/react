import { useDispatch, useSelector } from "react-redux";
import { changeCost, changeName, addMovie } from "../store";
import reset from "../store/actions.js"

function MovieForm(){

    const dispatch = useDispatch();
    const formData = useSelector((state) => {
        console.log("state.movieForm:", state.movieForm)
        return state.movieForm;
    });

    const handleNameChange = (event) => {
        event.preventDefault();
        dispatch(changeName(event.target.value));
    }
    const handleCostChange = (event) => {
        event.preventDefault();
        dispatch(changeCost(parseInt(event.target.value) || 0));
    }
    const handleMovieAdd = (event) => {
        event.preventDefault();
        dispatch(addMovie(formData));
        dispatch(reset());
        // dispatch(changeName(''));
        // dispatch(changeCost(0));
    }

    return (
        <div className="movie-form-panel">
            <h4 className="subtitle is-3">Add Movie</h4>
            <form onSubmit={handleMovieAdd}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input className="input is-expanded" 
                            value={formData.name} onChange={handleNameChange} 
                        />
                    </div>
                    <div className="field">
                        <label className="label">Cost</label>
                        <input className="input is-expanded" type="number"
                            value={formData.cost || ''} onChange={handleCostChange} 
                        />
                    </div>
                </div>
                <br />
                <div className="field">
                    <button className="button is-link" type="submit">Add Movie</button>
                </div>
            </form>
        </div>
    )
}

export default MovieForm;