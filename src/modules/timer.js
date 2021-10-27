const timer = (deadline) => {
	const timerHours = document.getElementById("timer-hours");
	const timerMinutes = document.getElementById("timer-minutes");
	const timerSeconds = document.getElementById("timer-seconds");

	const createNewSpanTime = (elem) => {
		let newSpan = elem.cloneNode(true);
		newSpan.textContent = newSpan.textContent;
		newSpan.classList.add("timer-days");
		document.querySelector(".timer-numbers").prepend(newSpan);
	};

	const getTime = (stopTime) => {
		let stopDate = new Date(stopTime).getTime();
		let nowDate = new Date().getTime();
		let timeRemaining = (stopDate - nowDate) / 1000;
		let day = Math.floor((((timeRemaining) / 60) / 60) / 24);
		let hours = Math.floor((((timeRemaining) / 60) / 60) % 24);
		let minutes = Math.floor(((timeRemaining) / 60) % 60);
		let seconds = Math.floor((timeRemaining) % 60);

		return {day, hours, minutes, seconds, timeRemaining};
	};

	const updateTimer = (deadline) => {
		let time = getTime(deadline);
		let timerDays = document.querySelector(".timer-days");
		
		if (time.timeRemaining > 0) {
		timerDays.textContent = time.day + " :";
		timerHours.textContent = time.hours;
		timerMinutes.textContent = time.minutes;
		timerSeconds.textContent = time.seconds;
		document.querySelectorAll(".number").forEach((elem) => {
			if (elem.textContent < 10) {
				elem.textContent = "0" + elem.textContent;
			}
		});
		} else if (time.timeRemaining < 0) {
			timerDays.textContent = "0 :";
			timerHours.textContent = "00";
			timerMinutes.textContent = "00";
			timerSeconds.textContent = "00";
		}
	};

	createNewSpanTime(timerHours);
	setInterval(updateTimer, 1000, deadline);
};

export default timer;