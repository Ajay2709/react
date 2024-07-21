import { useSelector } from "react-redux";

function MovieCount(){
    const totalCost = useSelector(({movies: {list, searchText}}) => 
        list.filter((movie) => movie.name.toLowerCase().includes(searchText.toLowerCase()))
        .reduce((acc, movie) => acc + movie.cost, 0)
        //let cost = 0;
        // for(let movie of filteredMovies){
        //     cost += movie.cost;
        // }
        //return cost;
     );
    console.log("totalCost", totalCost)
    return (
        <div className="">
            Total Cost: Rs.{totalCost}
        </div>
    )

}

export default MovieCount;