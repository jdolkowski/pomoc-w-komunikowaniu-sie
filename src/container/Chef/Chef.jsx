import React from 'react';

import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__wrapper section__padding" id="chef" data-aos="fade-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
    <div className="app__wrapper_img app__wrapper_img-reverse" data-aos="slide-right">
      <img src={images.personOne} alt="person_one_image" />
    </div>
    <div className="app__wrapper_info" data-aos="slide-left">
      <h1 className="headtext__cormorant">W co wierzymy</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>

      <div className="app__chef-sign">
        <p>Elwira Konczanin</p>
        <p className="p__opensans">Prezeska</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
