import $ from 'jquery';
import scrollTo from './scrollTo';

$('.button-scroll').on('click', function clickHandler() {
	scrollTo($('html, body'), $('.page-content'), 500);
});


