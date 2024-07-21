import { useDeletePhotoMutation } from "../store";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";

function PhotoListItem({photo}){

    const [deletePhoto, results] = useDeletePhotoMutation();

    const handleDeleteAlbum = () => {
        deletePhoto(photo);
    }
    return (
        <>
            <Button className="mr-2" loading={results.isLoading} onClick={handleDeleteAlbum}><GoTrashcan/></Button>
            {photo.name} 
        </>
    )
}

export default PhotoListItem;