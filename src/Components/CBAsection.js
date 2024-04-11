import React from 'react';
import '../App.css';
import './CBAsection.css';
import {Button} from './Button'
import { useNavigate } from 'react-router-dom';

function CBAsection() {
  const navigate = useNavigate();
  return (
    <div
    className='hero-container'>
        <video src={process.env.PUBLIC_URL + '/videos/video-2.mp4'} autoPlay loop muted />
        <h1 className='hero_Onyx_name' >ONYX <span className="green">E</span>-Cell</h1>
        <p className='hero_section_slogan'>Entrepreneurship starts here!</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started Here
            </Button>

            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={() => {navigate('/Entravaganza')}}>E-Week <i className='far fa-play-circle'/>
            </Button>
        </div>
    </div>
  )
}

export default CBAsection