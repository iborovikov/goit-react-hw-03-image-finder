import ImageGalleryItem from './ImageGalleryItem'
import s from './imageGallery.module.css'

const ImageGallery = ({pictures, openModal, findLargeImgSrc}) => {
        return (
            <ul className={s.ImageGallery}>
                <ImageGalleryItem pictures={ pictures } openModal={ openModal } findLargeImgSrc={findLargeImgSrc }/>
            </ul>
        );
};

export default ImageGallery;