import s from './button.module.css'
import PropTypes from 'prop-types';


const Button = ({ fetchForMorePictures }) => {

    const onBtnClick = () => {
        fetchForMorePictures();
    };
    
    return (
        <button type='button' className={s.Button} onClick={onBtnClick}>Load more</button>
    );
};

export default Button;

Button.propTypes = {
  fetchForMorePictures: PropTypes.func.isRequired,
  
};