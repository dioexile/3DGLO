const calc = (price = 100) => {
	const calcBlock = document.querySelector(".calc-block");
	const calcSelect = document.querySelector(".calc-type");
	const calcSquare = document.querySelector(".calc-square");
	const calcCount = document.querySelector(".calc-count");
	const calcDay = document.querySelector(".calc-day");
	const calcTotal = document.querySelector(".calc-total>span");
	let total;
	let idInterval;

	let runNumber = (stopNumber, time, step, startNumber, outPlace) => {
		const t = Math.round(time / (+stopNumber / step));
		idInterval = setInterval(() => {
			startNumber += step;
			outPlace.textContent = startNumber;
			if (startNumber == stopNumber) {
				clearInterval(idInterval);
			}
		}, t);
	};

	const calc = () => {
		let calcSelectValue;
		let calcSquareValue;
		let calcCountValue = 1;
		let calcDayValue = 1;

		if (calcSelect.selectedIndex === 3) {
			price = 110;
		} else if (calcSelect.selectedIndex === 2) {
			price = 120;
		} else {
			price = 100;
		}

		calcSelectValue = +calcSelect.options[calcSelect.selectedIndex].value;
		calcSquareValue = calcSquare.value;
		calcDayValue = calcDay.value === "" ? 1 : calcDay.value < 5 ? 2 : calcDay.value < 10 ? 1.5 : 1;
		calcCountValue += (calcCount.value / 10);

		if (calcSquare.value && calcSelectValue) {
			total = price * calcSelectValue * calcSquareValue * calcDayValue * calcCountValue;
		}
	};

	calcBlock.addEventListener("change", (e) => {
		if (e.target === calcSelect || e.target === calcSquare ||
			e.target === calcCount || e.target === calcDay) {
			calc();
			clearInterval(idInterval);
			if (total && calcSquare.value !== "" && calcSelect.value !== "") {
				runNumber(total, 500, 100, 0, calcTotal);
			} else {
				calcTotal.textContent = 0;
			}
		}
	});
};

export default calc;