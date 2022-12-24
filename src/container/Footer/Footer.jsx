import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />

    <div className="app__footer-links">

      <div className="app__footer-links_logo">
        <img src={images.pomoc} alt="footer_logo" />
        <p className="p__opensans">&quot;Lorem ipsum dolor sit amet consectetur ad&quot;</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
        </div>
      </div>

    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Pomoc w komunikowaniu się. Wszelkie prawa zastrzerzone.</p>
    </div>

  </div>
);

export default Footer;
