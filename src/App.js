import React from 'react';

import { AboutUs, Chef, PersonTwo, FindUs, Footer, Gallery, Header, Laurels } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Chef />
    <PersonTwo />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
