import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  
  return (
    <div className='cards'>
      <h1 className='Check_heading'>Check out our Events!</h1>
      <div className='cards__container'>
        <CardItem
          src='images/Onyx3.jpeg'
          text='Explore the hidden waterfall deep inside the Amazon Jungle'
          label='Entravaganza'
          path='/Entravaganza'
        />
        <CardItem
          src='images/Onyx2.jpeg'
          text='Travel through the Islands of Bali in a Private Cruise'
          label='Inception'
          // path='/event'
        />
      </div>
    </div>
  );
}

export default Cards;