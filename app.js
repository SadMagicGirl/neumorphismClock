function clock() {
	const hoursArrow = document.querySelector('.hours');
	const minutesArrow = document.querySelector('.minutes');
	const secondsArrow = document.querySelector('.seconds');
	const deg = 6;

	setInterval(() => {
		const date = new Date();
		const hour = date.getHours() * 30;
		const minute = date.getMinutes() * deg;
		const second = date.getSeconds() * deg;

		hoursArrow.style.transform = `rotateZ(${hour + minute / 12}deg)`;
		minutesArrow.style.transform = `rotateZ(${minute}deg)`;
		secondsArrow.style.transform = `rotateZ(${second}deg)`;
	}, 1000);
}
clock();
