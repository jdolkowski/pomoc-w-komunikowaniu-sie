import React from 'react';

import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Znajdź nas</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">10-699, Olsztyn ul. Jarocka 77b/42</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Kontakt</p>
        <p className="p__opensans">+48 501 573 907</p>
        <p className="p__opensans no-capitalize">pomocwkomunikowaniusie@gmail.com</p>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;
