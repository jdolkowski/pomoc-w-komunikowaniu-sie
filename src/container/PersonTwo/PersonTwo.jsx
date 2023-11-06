import React from 'react';

import { images } from '../../constants';
import './PersonTwo.css';

const Chef = () => (
  <div className="app__wrapper section__padding" data-aos="fade-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
    <div className="app__wrapper_info">

      <div className="app__chef-content" data-aos="slide-right">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Absolwentka Wyższej Szkoły Pedagogicznej w Olsztynie,</p>
        </div>
        <p className="p__opensans">
          kierunek filologia polska, absolwentka Uniwersytetu Gdańskiego,
          neurologopeda z 25 -letnim stażem, pomysłodawczyni portalu http://www.logopeda.pl oraz jego wieloletni konsultant, praktyk, na co dzień pracuje w Szkole Podstawowej
          nr 22 oraz w Przedszkolu Miejskim nr 2 w Olsztynie. Od początku jestem związana z Fundacją  „Pomoc w komunikowaniu się”, bo sama uwielbiam pomagać.
          Uczę się tego w  domu.  Uważam, że drugi człowiek jest tak samo ważny, jak każdy z nas. Lubię aktywnie spędzać czas albo grać w planszówki.
          Gdy znajduję chwilę tylko dla siebie , czytam książki o tematyce  historycznej.
        </p>
      </div>

      <div className="app__chef-sign" data-aos="slide-left">
        <p>Lidia Kotlińska-Szulc</p>
        <p className="p__opensans">Wiceprezeska Zarządu Fundacji</p>
        <img src={images.sign} alt="sign_image" />
      </div>
      <button type="button" className="custom__button margin-top-30">Ludzie fundacji</button>
    </div>
    <div className="app__wrapper_img" data-aos="slide-left">
      <img src={images.personLidia} alt="person_two_image" />
    </div>
  </div>
);

export default Chef;
