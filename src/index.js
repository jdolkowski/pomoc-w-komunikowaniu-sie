import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './index.css';
import App from './App';

AOS.init();
ReactDOM.render(<App />, document.getElementById('root'));

