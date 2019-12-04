import "core-js/es/set";
import "core-js/es/map";
import "core-js/es/symbol";

import React from 'react';
import ReactDom from 'react-dom';

import App from './App/App.js';
import './static/img/favicons/favicons';

import "slick-carousel/slick/slick.scss";

import stores from './store/main';

stores.user.load().then(() => {
    stores.basket.load();
});
stores.categories.load();

ReactDom.render(<App/>, document.querySelector('#app'));