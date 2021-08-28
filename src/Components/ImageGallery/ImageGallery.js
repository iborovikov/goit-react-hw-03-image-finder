import { Component } from "react";
import ImageGalleryItem from './ImageGalleryItem'
import s from './imageGallery.module.css'

class ImageGallery extends Component {
    render() {
        return (
            <ul className={s.ImageGallery}>
                <ImageGalleryItem />
            </ul>
        );
    };
};

export default ImageGallery;