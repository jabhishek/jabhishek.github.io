export default function scroll($element, $toElement, duration) {
	const pageOffset = $toElement.offset().top;
	$element.animate({ scrollTop: pageOffset}, duration);
}
