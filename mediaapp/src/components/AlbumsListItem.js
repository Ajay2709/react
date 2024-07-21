import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandedPanel";
import { useDeleteAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumsListItem({album}){
    const [deleteAlbum, results] = useDeleteAlbumMutation();
    const handleDeleteAlbum = () => {
        deleteAlbum(album);
    }
    const header = (
    <> 
        <Button className="mr-2" loading={results.isLoading} onClick={handleDeleteAlbum}><GoTrashcan/></Button>
        {album.title}
    </>)

    return <ExpandablePanel key={album.id} header={header}>
        <PhotosList album={album} />
    </ExpandablePanel>
}

export default AlbumsListItem;