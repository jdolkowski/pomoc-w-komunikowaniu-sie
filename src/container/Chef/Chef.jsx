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
          <p className="p__opensans">Jestem   neurologopedką od ponad dwudziestu lat,</p>
        </div>
        <p className="p__opensans">
          pedagożką specjalną, absolwentką Uniwersytetu Gdańskiego, Upledger Institute Poland, High Quality Woman XXVI,
          Instytutu Studiów Podyplomowych w Warszawie. Prowadzę terapię neurologopedyczną w Szkole Podstawowej nr 25 z Oddziałami Integracyjnymi w Olsztynie oraz Centrum Medycznym Hura.
          W pracy logopedycznej skupiam się na terapii dzieci i młodzieży z niepełnosprawnościami, uszkodzonej neurologicznie, ze spektrum autyzmu ,
          SLI oraz terapii afazji u osób dorosłych po udarach i wypadkach komunikacyjnych. Realizuję  autorską metodę Four Elements Method (Metoda Czterech Żywiołów),
          która zaprezentowana została na międzynarodowych kongresie dotyczącym innowacyjnych metod w terapii mowy i języka w Cascais w Portugalii podczas 10 rocznicy jubileuszu
          kongresów i 30lecia CPLOL (Komitetu Łącznikowego Logopedów Unii Europejskiej) wśród takich organizacji  jak ASHA: American Speech-Language-Hearing Association oraz   CPLOL.
          Pracuję  metodami: Sanjo, Craniosacralna Upledgera  CST1. Jestem ekspertką  mowy  oraz  autorką   artykułów o wielojęzyczności w Forum Logopedy.
          Aktualnie prowadzę terapię i konsultacje dzieci z polskich rodzin mieszkających poza krajem przez Skype’a. Jestem  miłośniczką jazdy na nartach i żeglarstwa.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Elwira Konczanin</p>
        <p className="p__opensans">Prezeska Zarządu Fundacji</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
