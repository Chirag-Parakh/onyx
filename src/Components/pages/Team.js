import React from 'react'
import '../../App.css'
import amogh from '../images/amogh.jpeg';
import chinmay from '../images/chinmay.jpg';
import akansha from '../images/akansha.jpeg';
import ribhav from '../images/ribhav.jpeg';
import kshitij from '../images/kshitij.jpeg';
import Ananya from '../images/ananya.jpeg';
import tejasvi from '../images/tejasvi.jpg';


// import contacts from '../../contacts';



function Team() {
  return (
    <div>
      <div className='team'>
        <h1 className="heading">Team <span className='green'>Onyx</span></h1>
      </div>
      <div className='Team_Box'>
        <div className='Person_card'>
          <img src={chinmay} alt="" className='Person_pic' />
          <div className='Person_details'>
            <div className='Person_name'> Chinmayi B A </div>
            <div className='Person_position'>President</div>
          </div>
          <div class="inner-shadow"></div>
        </div>
        <div className='Person_card'>
          <img src={amogh} alt="" className='Person_pic' />
          <div className='Person_details'>
            <div className='Person_name'> Amogh TM</div>
            <div className='Person_position'>Vice President</div>
          </div>
          <div class="inner-shadow"></div>
        </div>
        <div className='Person_card'>
          <img src={akansha} alt="" className='Person_pic' />
          <div className='Person_details'>
            <div className='Person_name'> Akanksha M H</div>
            <div className='Person_position'>Treasurer</div>
          </div>
          <div class="inner-shadow"></div>
        </div>
        <div className='Person_card'>
          <img src={ribhav} alt="" className='Person_pic' />
          <div className='Person_details'>
            <div className='Person_name'>Ribhav V Shetty</div>
            <div className='Person_position'>Secretery</div>
          </div>
          <div class="inner-shadow"></div>
        </div>
        <div className='Person_card'>
          <img src={ribhav} alt="" className='Person_pic' />
          <div className='Person_details'>
            <div className='Person_name'>Sriram S Kumar</div>
            <div className='Person_position'>Events Lead</div>
          </div>
          <div class="inner-shadow"></div>
        </div>
        <div className='Person_card'>
          <img src={Ananya} alt="" className='Person_pic' />
          <div className='Person_details'>
            <div className='Person_name'>Ananya R</div>
            <div className='Person_position'>Marketing Lead</div>
          </div>
          <div class="inner-shadow"></div>
        </div>
        <div className='Person_card'>
          <img src={tejasvi} alt="" className='Person_pic' />
          <div className='Person_details'>
            <div className='Person_name'>Tejasvi</div>
            <div className='Person_position'>Creativity and Design Lead</div>
          </div>
          <div class="inner-shadow"></div>
        </div>
        <div className='Person_card'>
          <img src={kshitij} alt="" className='Person_pic' />
          <div className='Person_details'>
            <div className='Person_name'>Kshithij</div>
            <div className='Person_position'>Sponsorship Lead</div>
          </div>
          <div class="inner-shadow"></div>
        </div>
        
      </div>
    </div>
  );
}

export default Team;