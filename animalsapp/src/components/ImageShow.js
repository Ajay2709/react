//import './SearchBar.css';

function ImageShow ({image}) {
  return <div>
    <img src={image.url} alt={image.description}/>
  </div>
}

export default ImageShow;
