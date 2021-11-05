const slider = function ({ulSlides, ulDots, dots, slides, arrows, arrowLeft, arrowRight, slideActive = "slide-active", dotActive = "active-dot"}) {
	const portfolioContent = document.querySelector(`.${ulSlides}`);
	const portfolioDots = document.querySelector(`.${ulDots}`);

	let currentSlide = 0; 
	let idInterval;
	let stopProgramm = false;

	const checkArguments = (arg) => {
		for (let key in arg[0]) {
			if (document.querySelector(`.${arg[0][key]}`) === null) {
				stopProgramm = true;
				return;
			}
		}
	};

	const getDots = () => {
		return document.querySelectorAll(`.${dots}`);
	};

	const getPortfolioItems = () => {
		return document.querySelectorAll(`.${slides}`);
	};

	const addDots = (parent, value) => {
		for (let i = 0; i < value; i++) {
			const newDot = document.createElement("li");
			newDot.classList.add(dots);
			if (i === 0) {
				newDot.classList.add(dotActive);
			}
			parent.append(newDot);
		}
	};

	const prev = (callback, index, strClass) => {
		callback()[index].classList.remove(strClass);
	};

	const next = (callback, index, strClass) => {
		callback()[index].classList.add(strClass);
	};

	const autoplay = () => {
		prev(getPortfolioItems, currentSlide, slideActive);
		prev(getDots, currentSlide, dotActive);
		currentSlide++;

		if (currentSlide >= getPortfolioItems().length) {
			currentSlide = 0;
		}

		next(getPortfolioItems, currentSlide, slideActive);
		next(getDots, currentSlide, dotActive);
	};

	const startSlide = (fn, time = 1500) => {
		idInterval = setInterval(fn, time);
	};


	addDots(portfolioDots, getPortfolioItems().length);
	checkArguments(arguments);
	if (stopProgramm) {return};
	startSlide(autoplay, 2000);

	portfolioContent.addEventListener("click", (e) => {
		e.preventDefault();

		if (!e.target.matches(`.${dots}, .${arrows}`)) {
			return;
		}

		prev(getPortfolioItems, currentSlide, slideActive);
		prev(getDots, currentSlide, dotActive);

		if (e.target.matches(`.${arrowRight}`)) {
			currentSlide++;
			if (currentSlide >= getPortfolioItems().length) {
				currentSlide = 0;
			}
		} else if (e.target.matches(`.${arrowLeft}`)) {
			currentSlide--;
			if (currentSlide < 0) {
				currentSlide = getPortfolioItems().length - 1;
			}
		} else if (e.target.matches(`.${dots}`)) {
			getDots().forEach((elem, index) => {
				if (e.target === elem) {
					currentSlide = index;
				}
			});
		} 

		next(getPortfolioItems, currentSlide, slideActive);
		next(getDots, currentSlide, dotActive);
	});

	portfolioContent.addEventListener("mouseleave", (e) => {
		if (e.target.matches(`.${arrows}`) || e.target.matches(`.${dots}`)) {
			startSlide(autoplay, 2000);
		}
	}, true);

	portfolioContent.addEventListener("mouseenter", (e) => {
		if (e.target.matches(`.${arrows}`) || e.target.matches(`.${dots}`)) {
			clearInterval(idInterval);
		}
	}, true);
};

export default slider;