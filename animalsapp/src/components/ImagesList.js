
import ImageShow from './ImageShow';

function ImagesList({ images }) {
  const renderedImages = images.map((image) => {
    //Assigning 'key' helps in optimizing the re-rendering, as in the case of swapping the order of 2 or 2 elements in a list (of 1000 elements).
    console.log(image);
    return <ImageShow key={image.id} image = {image} />;
  })
  return <div> {renderedImages}</div>
}

export default ImagesList;
