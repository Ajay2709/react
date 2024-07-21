import { useSelector } from "react-redux";
import { changeSearchText } from "../store";
import store from "../store";

function MovieSearch(){
    //const dispatch = useDispatch();
    const searchText = useSelector((state) => {
        return state.movies.searchText;
    })
    const handleSearchInput = (event) => {
        store.dispatch(changeSearchText(event.target.value));
    }
    return (
        <div className="list-header">
            <h3 className="title is-3">My Cars</h3>
            <div className="search field is-horizontal">
                <label className="label"> Search</label>
                <input className="input" value={searchText} onChange={handleSearchInput} />
            </div>
        </div>
    )
}

export default MovieSearch;