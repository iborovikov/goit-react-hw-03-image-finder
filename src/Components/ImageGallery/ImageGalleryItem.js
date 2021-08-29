import PropTypes from 'prop-types';
import s from './imageGallery.module.css'

const ImageGalleryItem = ({ pictures, openModal, findLargeImgSrc }) => {

    const onPictureClick = (e) => {
       const normalizedId = Number(e.currentTarget.id)
       findLargeImgSrc(normalizedId);
       openModal();
    }
    const shortid = require('shortid');
    return (pictures.map(picture =>
        <li key={shortid.generate()} className={s.ImageGalleryItem} id={picture.id} onClick={onPictureClick}>
            <img src={picture.webformatURL} alt={picture.tags} className={s.ImageGalleryItemImage} />
        </li>));
};
export default ImageGalleryItem

ImageGalleryItem.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string,
        })).isRequired,
    openModal: PropTypes.func.isRequired,
    findLargeImgSrc:PropTypes.func.isRequired,
}