import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  
  return (
    <div className='cards'>
      <h1 className='Check_heading'>Check out our Events!</h1>
      <div className='cards__container'>
        {/* <ul className='cards__items'> */}

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
          path='/event'
        />
        {/* </ul> */}
        {/* <ul className='cards__items'>
            <CardItem
              src='images/img.jpg'
              text='Captivate was a 
contest to bring out the inner entrepreneur.
The event focused on the expression of thoughts
and ideas using photography. '
              label='Captivate'
              path='/event'
            />
            <CardItem
              src='images/img.jpg'
              text='A mind-boggling event that stimulated the real things that go down when you pitch your business ideas, to sharks 
only willing to empty their pockets for the most 
impressive pitches. 
'
              label='Shark Tank'
              path='/event'
            />
            <CardItem
              src='images/img.jpg'
              text='An event that 
challenged problem-solving skills to explore 
and find clues to 
make it out first.
'
              label='Workshops'
              path='/event'
            />
          </ul> */}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Cards;