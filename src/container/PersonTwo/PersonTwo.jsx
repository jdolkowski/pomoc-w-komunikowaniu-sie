import React from 'react';

import { images } from '../../constants';
import './PersonTwo.css';

const Chef = () => (
  <div className="app__wrapper section__padding" data-aos="fade-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
    <div className="app__wrapper_info">

      <div className="app__chef-content" data-aos="slide-right">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>

      <div className="app__chef-sign" data-aos="slide-left">
        <p>Małgorzata Konczanin</p>
        <p className="p__opensans">Prezeska</p>
        <img src={images.sign} alt="sign_image" />
      </div>
      <button type="button" className="custom__button margin-top-30">Ludzie fundacji</button>
    </div>
    <div className="app__wrapper_img" data-aos="slide-left">
      <img src={images.personTwo} alt="person_two_image" />
    </div>
  </div>
);

export default Chef;
