
import s from './imageGallery.module.css'

const ImageGalleryItem = ({ pictures, openModal, findLargeImgSrc }) => {

    const onPictureClick = (e) => {
       const normalizedId = Number(e.currentTarget.id)
       findLargeImgSrc(normalizedId);
       openModal();
    }
    return (pictures.map(picture =>
        <li key={picture.id} className={s.ImageGalleryItem} id={picture.id} onClick={onPictureClick}>
            <img src={picture.webformatURL} alt="foto" className={s.ImageGalleryItemImage} />
        </li>));
};
export default ImageGalleryItem