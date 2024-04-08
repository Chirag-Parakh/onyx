import React from 'react'
import '../../App.css'
import Cards1 from '../Cards1';
import '../../Components/Cards1.css';

// import contacts from '../../contacts';



function Team() {
  return (
    <div>
      <div className='team'>
        <h1 className="heading">Team</h1>
      </div>
      <div className='team1'>
      
        <Cards1/>
      </div>
    </div>
  );
}

export default Team;