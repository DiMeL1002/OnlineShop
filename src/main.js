import React from 'react';
import ReactDom from 'react-dom';

import App from './app/app.js';
import './static/img/favicons/favicons';

import "slick-carousel/slick/slick.scss";

ReactDom.render(<App/>, document.querySelector('#app'));