import PhotoListItem from "./PhotoListItem";
import Button from "./Button";
import { useFetchPhotosQuery, useAddPhotoMutation, useDeletePhotoMutation } from "../store";
import { faker } from "@faker-js/faker";

function PhotosList({album}){

    const fetchResults = useFetchPhotosQuery(album);
    console.log(fetchResults);
    const { data, error, isLoading, isFetching } = fetchResults;

    const [addPhoto, results] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto({
            albumId: album.id,
            name: faker.company.name()
        })
    }

    let content;
    if(isLoading || isFetching){
         
    } else {
        content = data.map((photo) => {
            return <PhotoListItem key={photo.id} photo={photo}/>
        })
    }
    
    return (
        <div>
            <h3>Photos of {album.title}</h3>
            <Button loading={results.isLoading} onClick={handleAddPhoto}>
                + Add Photo
            </Button>
            {content}
        </div>
    )
}

export default PhotosList;