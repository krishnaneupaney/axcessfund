import React from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <div className='input-areas'>
          <form>
            <input
              type="email"
              name='email'
              placeholder='subscribe us '
              className='footer-input' />
            <Button buttonStyle='btn--outline' Link to="/contact">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className='footer-link-wrapper'>
          {/* <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/contact'>Hire Me</Link>
            <Link to='/'>Hire Me</Link>
            <Link to='/'>Hire Me</Link>
          </div> */}
          {/* <div class='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/contact'>Contact</Link>
            <a href="https://www.compassion.com/sponsor-a-student.htm">Support</a>
            <a href="https://my.blinknow.org/give/280199/#!/donation/checkout" target="blank">Donation</a>
           <a href="https://www.compassion.com/sponsor-a-student.htm">Sponsor a Student</a>
          </div> */}
        </div>
        {/* <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href="https://instagram.com/krishnaneupaney" target="blank">Instagram</a>
            <a href="https://facebook.com/krishnaneupaney" target="blank">Facebook</a>
            <a href="https://youtube.com/krishnaneupaney" target="blank">Youtube</a>
            <Link to='/'>Twitter</Link>
          </div>
        </div> */}
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Axcess Fund
              <i class='fab fa-typo3' />
            </Link>

          </div>
          <small class='website-rights'>Axcess Fund © 2020</small>
          <div class='social-icons'>
            <a href="https://facebook/axcessfund" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg" alt="krishnaneupaney" height="30" width="40" /></a>
            <a href="https://instagram.com/axcessfund" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="krishnaneupaney" height="30" width="40" /></a>
            <a href="https://www.linkedin.com/in/axcessfund/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="krishnaneupaney" height="30" width="40" /></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
