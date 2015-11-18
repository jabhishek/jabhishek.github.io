export default function scroll($element, $toElement, duration) {
	var pageOffset = $toElement.offset().top;
	console.log(pageOffset);
	$element.animate({ scrollTop: pageOffset}, duration);
};