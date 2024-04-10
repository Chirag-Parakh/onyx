import React from 'react';
import { useNavigate } from 'react-router-dom';


function CardItem(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(props.path);
  };
  return (
    <>
      <div className='cards__item' onClick={handleClick}  >
        <div className='cards__item__pic-wrap' >
          <img className='cards__item__img' alt='Travel Image' src={props.src} />
        </div>
        <div className='cards__item__info'>
          <h5 className='cards__item__label'> {props.label} </h5>
          <h5 className='cards__item__text'> {props.text} </h5>
        </div>
      </div>
    </>
  );
}

export default CardItem;