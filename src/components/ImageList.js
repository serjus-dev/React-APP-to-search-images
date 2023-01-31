import './ImageList.css';
import ImageShow from './ImageShow';

function ImageList({images}){
    console.log('imalist',images);
    const renderedImages = images.map(image =>{
        return <ImageShow key={image.id} image={image} />
    })

    return <div className="image-list">{renderedImages}</div>
}

export default ImageList;