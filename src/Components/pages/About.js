import React from 'react'
import '../../App.css'
import { GiTrophyCup } from "react-icons/gi";

function About() {
  return (
    <div className='about'>
      <div className='who_onyx'>
        <div className='Who_Heading'>Who are we?</div>
        <div className='who_description'>
          <span className='green'>ONYX</span> is the renowned
          Entrepreneurship Cell of NIE founded in 2009. We are a group of highly enthusiastic people who aim to bring an entrepreneurial spirit among the students and gradually expand over time.
        </div>
      </div>
      
      <span className='verticle_line '></span>
      <div className='Achivements_box'>
        <div className='Achivements_heading green'>
          Achievements
        </div>
        <div className='Achivements'>
          <div className='Achivement'><GiTrophyCup className='green trophy'/>2023 IIT Bombay Avenue’s Pitch Perfect Winners</div>
          <div className='Achivement'><GiTrophyCup className='green trophy'/>2021 E-Cell IIT Bombay Eureka Zonal Finalists</div>
          <div className='Achivement'><GiTrophyCup className='green trophy'/>2016 NEN E-Week Championship Award</div>
          <div className='Achivement'><GiTrophyCup className='green trophy'/>2015 NEN E-Week Championship Award</div>
          <div className='Achivement'><GiTrophyCup className='green trophy'/>2013 NEN E-Week Championship Award</div>
        </div>
      </div>
    </div>
  );
}

export default About;