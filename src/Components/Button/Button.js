import s from './button.module.css'


const Button = ({ fetchForMorePictures }) => {

    const onBtnClick = () => {

        fetchForMorePictures()
    }
    
    return (
        <button type='button' className={s.Button} onClick={onBtnClick}>Load more</button>
    );
};

export default Button;