import React from 'react';

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about" data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">O nas</h1>
        <p className="p__opensans">
          Celem głównym  FUNDACJI POMOC W KOMUNIKOWANIU SIĘ jest podejmowanie działań logopedycznych, rehabilitacyjnych,
          psychologicznych, medycznych i prawnych na rzecz dzieci i dorosłych z  niepełnosprawnościami oraz z zaburzeniami
          w komunikowaniu się a także działanie na rzecz poprawy stanu ich zdrowia, jak również na działaniu na rzecz promocji zdrowia i profilaktyki zdrowotnej.
        </p>
        <button type="button" className="custom__button">Dowiedz się więcej</button>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Tu Działamy</h1>
        <p className="p__opensans">
          Terenem naszych działań fundacji jest  Zespół Szkół Ogólnokształcących nr 3 z Oddziałami
          Integracyjnymi w Olsztynie, w skład Zespołu Szkół wchodzi Przedszkole Miejskie nr 8, Szkoła Podstawowa nr 25 i IX
          Liceum Ogólnokształcące. W Zespole   uczą się dzieci z niepełnosprawnościami taki mi jak spektrum autyzmu, afazja,
          niedosłuch, FAS, nadpobudliwość ruchowa, niepełnosprawność intelektualna w stopniu lekkim, niedosłuch oraz dzieci z MPD, razem   uczniów (1148)
          w tym z niepełnosprawnościami (98), Szkoła Podstawowa  nr 22 w Olsztynie –uczniów (660), Zespół Szkolno-Przedszkolny  w Stawigudzie,
          w skład którego wchodzi Szkoła Podstawowa i Przedszkole-uczniów-(471) oraz Wojewódzki Specjalistyczny Szpital Dziecięcy w Olsztynie.
        </p>
        <button type="button" className="custom__button">Dowiedz się więcej</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
