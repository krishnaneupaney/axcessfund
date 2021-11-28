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

        </div>

      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Axcess Fund
              <i class='fab fa-typo3' />
            </Link>

          </div>
          <h5 color="white">Axcess Fund © 2021</h5>
          <div class='social-icons'>
            <a href="https://facebook.com/axcessfund" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg" alt="krishnaneupaney" height="30" width="40" /></a>
            <a href="https://instagram.com/axcessfund" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg" alt="krishnaneupaney" height="30" width="40" /></a>
            <a href="https://www.linkedin.com/company/axcessfund/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="krishnaneupaney" height="30" width="40" /></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
