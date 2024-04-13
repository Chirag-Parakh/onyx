import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
      <p className='footer-subscription-heading'>
        Join the Entrepreneurship newsletter to receive our best deals
      </p>
      <p className='footer-subscription-text'>
        You can unsubscribe at any time.
      </p>
      <div className='input-areas'>
        <form>
          <input
            className='footer-input'
            name='email'
            type='email'
            placeholder='Your Email'
          />
          <Button buttonStyle='btn--outline'>Subscribe</Button>
        </form>
      </div>
    </section> */}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/team'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
          <h2>Videos</h2>
          <Link to='/'>College</Link>
          <Link to='/team'>Ambassadors</Link>
          <Link to='/'>Agency</Link>
          <Link to='/'>Influencer</Link>
        </div> */}
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/onyx.nie" target="_blank">Instagram</a>
            <a href="https://www.linkedin.com/company/onyx-ecell/mycompany/" target="_blank">LinkedIn</a>
            <a href="https://youtube.com/@onyxecell?si=9-12lddcBqJl0TsO" target="_blank">YouTube</a>

            {/* <Link to='/'>Twitter</Link> */}
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              ONYX
              {/* <i class='fab fa-typo3' /> */}
            </Link>
          </div>
          <small class='website-rights'>ONYX © 2024</small>
          <div class='social-icons'>
            <a class='social-icon-link instagram' href='https://www.instagram.com/onyx.nie' target='_blank' aria-label='Instagram'>
              <i class='fab fa-instagram'></i>
            </a>
            <a class='social-icon-link youtube' href='https://youtube.com/@onyxecell?si=9-12lddcBqJl0TsO' target='_blank' aria-label='Youtube'>
              <i class='fab fa-youtube'></i>
            </a>
            <a class='social-icon-link linkedin' href='https://www.linkedin.com/company/onyx-ecell/mycompany/' target='_blank' aria-label='LinkedIn'>
              <i class='fab fa-linkedin'></i>
            </a>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer