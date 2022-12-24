import React from 'react';

import { images } from '../../constants';
import './PersonTwo.css';

const Chef = () => (
  <div className="app__wrapper section__padding">
    <div className="app__wrapper_info">

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>

      <div className="app__chef-sign">
        <p>Małgorzata Konczanin</p>
        <p className="p__opensans">Prezeska</p>
        <img src={images.sign} alt="sign_image" />
      </div>
      <button type="button" className="custom__button margin-top-30">Ludzie fundacji</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.personTwo} alt="person_two_image" />
    </div>
  </div>
);

export default Chef;
