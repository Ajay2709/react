import { useFetchAlbumsQuery ,useAddAlbumMutation } from "../store";
import Skeleton from "./SkeletonLoader";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({user}){
    const { data, error, isLoading, isFetching } = useFetchAlbumsQuery(user);

    const [addAlbum, results] = useAddAlbumMutation();

    const handleAddAlbum = () => {
        addAlbum(user);
    }

    let content;
    if(isFetching){
        content = <Skeleton times={3} />
    } else if(error){
        content = <div> Error loading albums!</div>
    } else {
        content = data.map((album) => {
            return <AlbumsListItem  key={album.id} album={album} />
        })
    }
    
    return(
        <div>
            <div className="m-2 flex flex-row items-center justify-between"> 
                <h3 className="text-lg font-bold">Albums of {user.name} </h3>
                <Button loading={results.isLoading} onClick={handleAddAlbum}>
                    + Add Album
                </Button>
            </div>
            <div> {content} </div>
        </div>
    )
}

export default AlbumsList;