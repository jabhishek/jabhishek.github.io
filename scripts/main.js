'use strict';

import $ from 'jquery';
import fn from './another';
import scrollTo from './scrollTo';
console.log(fn());

$('.button-scroll').on('click', function() {
	scrollTo($('html, body'), $('.page-content'), 500);
});
