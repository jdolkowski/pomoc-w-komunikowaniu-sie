import React from 'react';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home" data-aos="fade-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">Przekaż 1%</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        KRS 0000658550 NIP 7393894617
      </p>
      <button type="button" className="custom__button">Statut</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.logoPomoc} alt="header_img" />
    </div>
  </div>
);

export default Header;
