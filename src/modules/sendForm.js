
import {
	formValidate
} from "./validate";

const sendForm = (formId) => {
	const form = document.getElementById(formId);

	const sendData = ({
		url,
		method,
		headers,
		file
	}) => {
		return fetch(url, {
			method: method,
			headers: headers,
			body: file
		});
	};

	const createDivMessage = (createdElement, message, elementClass) => {
		const newDiv = document.createElement(createdElement);
		if (message == "message") {
			newDiv.textContent = "Данные формы заполненны не верно,форма не валидна";
		}
		newDiv.classList.add(elementClass);
		form.append(newDiv);
	};

	const submit = () => {
		const inputs = form.querySelectorAll("input");
		const formData = new FormData(form);
		const formObject = {};

		formData.forEach((val, key) => {
			formObject[key] = val;
		});

		if (!form.querySelector(".form-message")) {
			createDivMessage("div", "preload", "form-message");
		}

		if (formValidate(form)) {
			sendData({
					url: "https://jsonplaceholder.typicode.com/posts",
					method: "POST",
					headers: {
						"Content-type": "application/json; charset=UTF-8"
					},
					file: JSON.stringify(formObject)
				})
				.then(async (response) => {
					const data = await response.json();
					console.log(data);
				})
				.then(() => {
					inputs.forEach((elem) => {
						elem.value = "";
					});
				})
				.then(() => {
					let content = form.querySelector(".form-message");
					content.textContent = "Данные успешно отправлены.";
					content.classList.add("success");
				})
				.then(() => {
					if (form !== document.getElementById("form3")) {
						setTimeout(() => {
							form.querySelector(".form-message").remove();
						}, 3000);
					} else {
						setTimeout(() => {
							document.querySelector(".popup").style.display = "none";
							form.querySelector(".form-message").remove();
						}, 3000);
					}
				})
				.catch((error) => {
					console.log(error.message);
				});
		} else {
			if (form.querySelector(".form-message")) {
				form.querySelector(".form-message").textContent = "Данные формы заполненны не верно,форма не отправлена";
			} else {
				createDivMessage("div", "message", "form-message");
			}
		}
	};

	try {
		if (form) {
			form.addEventListener("submit", (e) => {
				e.preventDefault();
				submit();
			});
		} else {
			throw new Error(`Формы с id:"${formId}" - не существует`);
		}
	} catch (error) {
		console.log(error.message);
	}

};

export default sendForm;