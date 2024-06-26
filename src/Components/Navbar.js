import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "./images/onyx.png"
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 500) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>ONYX <img src={logo} alt="" className='Navbar_logo' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}> Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu} >About </Link>
            </li>
            <li className='nav-item'>
              <Link to='/team' className='nav-links' onClick={closeMobileMenu}> Team</Link>
            </li>

            {/* <li className='nav-item'>
              <Link
                to='/event'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li> */}

            <li onClick={() => { navigate('/mem')  ; setClick(false);}}>
              <Link to='/mem' className='nav-links-mobile'> Membership </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={() => { navigate('/mem')  ; setClick(false) ;}}>MEMBERSHIP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;