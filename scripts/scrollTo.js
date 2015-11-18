export default function scrollTo(element, to, duration) {
	if (duration <= 0) return;
	var difference = to - element.scrollTop;
	var perTick = difference / duration * 10;

	console.log(`perTick: ${perTick}`);
	console.log(`difference: ${difference}`);

	setTimeout(function () {
		element.scrollTop = element.scrollTop + perTick;

		console.log(`element.scrollTop: ${element.scrollTop}`);
		console.log(`to: ${to}`);

		if (element.scrollTop === to) return;
		scrollTo(element, to, duration - 20);
	}, 20);
};