// I was inspired by the code resources listed at https://css-tricks.com/snippets/css/typewriter-effect/

class TypeLetters {
	constructor() {
		this.HTMLelement = document.querySelector('.main-message');
		this.texts = [ 'Hello...', 'I am Peter Kertesz.', 'I am a full-stack web developer.' ];
		this.textIndex = 0;
		this.currentText = '';
		this.startTyping();
		this.isDeleting = false;
		this.typeSpeed = 100;
	}

	startTyping() {
		let index = this.textIndex;
		let text = this.texts[index];

		if (this.isDeleting) {
			this.currentText = text.substring(0, this.currentText.length - 1);
		} else {
			this.currentText = text.substring(0, this.currentText.length + 1);
		}

		this.HTMLelement.innerHTML = this.currentText;

		var that = this; // save reference of this to continue with current task

		if (this.isDeleting) {
			this.typeSpeed = 50;
		}

		if (!this.isDeleting && this.currentText === text) {
			this.isDeleting = true;
			this.typeSpeed = 2000; // Wait time between texts
		} else if (this.isDeleting && this.currentText === '') {
			this.isDeleting = false;
			this.typeSpeed = 100;
			this.textIndex++;

			if (this.textIndex === this.texts.length) {
				this.textIndex = 0;
			}
		}

		setTimeout(function() {
			that.startTyping();
		}, this.typeSpeed);
	}
}

export default TypeLetters;
