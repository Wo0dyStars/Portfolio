class FormMessage {
	constructor() {
		this.events();
	}

	events() {
		window.addEventListener('DOMContentLoaded', () => {
			const form = document.querySelector('.message-form');
			const button = document.querySelector('.submit-message');
			const status = document.querySelector('.form-status');

			function success() {
				form.reset();
				button.style = 'display: none';
				status.innerHTML = 'Thanks for your message. I will be in touch soon. :)';
			}

			function error() {
				status.innerHTML = 'An error occurred with the form. Please try again!';
			}

			form.addEventListener('submit', (e) => {
				e.preventDefault();
				const data = new FormData(form);

				const xhr = new XMLHttpRequest();
				xhr.open(form.method, form.action);
				xhr.setRequestHeader('Accept', 'application/json');
				xhr.onreadystatechange = function() {
					if (xhr.readyState !== XMLHttpRequest.DONE) return;
					if (xhr.status === 200) {
						success(xhr.response, xhr.responseType);
					} else {
						error(xhr.status, xhr.response, xhr.responseType);
					}
				};
				xhr.send(data);
			});
		});
	}
}

export default FormMessage;
