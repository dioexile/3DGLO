const calcValidate = () => {
	const inputs = document.querySelectorAll(".calc-block>input");

	inputs.forEach((elem) => {
		elem.setAttribute("type", "number");
		elem.addEventListener("input", () => {
			elem.value = elem.value.replace(/\D/g, "");
		});
	});
};

const formValidate = (form) => {
	let valide = true;
	form.querySelectorAll("input").forEach((elem) => {
		if (elem.getAttribute("type") == "text") {
			const regExpName = /[^а-я\s]+/i;
			if (regExpName.test(elem.value) || elem.value.length < 2) {
				valide = false;
				elem.classList.add("error");
				elem.value = "";
				elem.placeholder = "Мин. 2 символа,кириллица и пробелы";
				elem.addEventListener("focus", () => {
					elem.classList.remove("error");
					elem.placeholder = "Имя";
				});
			} else {
				elem.classList.remove("error");
				elem.placeholder = "Имя";
			}
		} else if (elem.getAttribute("type") == "tel") {
			const regExpName = /[^\d\+]+/i;
			if (regExpName.test(elem.value) || elem.value.length < 11) {
				valide = false;
				elem.classList.add("error");
				elem.value = "";
				elem.placeholder = "Мин. 11 сим.,только цифры и знак +";
				elem.addEventListener("focus", () => {
					elem.classList.remove("error");
					elem.placeholder = "Номер телефона";
				});
			} else {
				elem.classList.remove("error");
				elem.placeholder = "Номер телефона";
			}
		} else if (elem.getAttribute("name") == "user_message") {
			const regExpName = /[^а-я\s\d\.\,]+/i;
			if (regExpName.test(elem.value)) {
				valide = false;
				elem.classList.add("error");
				elem.value = "";
				elem.placeholder = "Только кириллица,пробелы,цифры и знаки препинания";
				elem.addEventListener("focus", () => {
					elem.classList.remove("error");
					elem.placeholder = "Ваше сообщение";
				});
			} else {
				elem.classList.remove("error");
				elem.placeholder = "Ваше сообщение";
			}
		} else if (elem.getAttribute("type") == "email") {
			const regExpName = /[a-z\d]+@[a-z]+\.[a-z]/i;
			if (!regExpName.test(elem.value)) {
				valide = false;
				elem.classList.add("error");
				elem.value = "";
				elem.placeholder = "Образец - exam@exam.exam";
				elem.addEventListener("focus", () => {
					elem.classList.remove("error");
					elem.placeholder = "E-mail";
				});
			} else {
				elem.classList.remove("error");
				elem.placeholder = "E-mail";
			}
		}
	});
	return valide;
};

export {
	calcValidate,
	formValidate
};