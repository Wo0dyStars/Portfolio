class ResourcesModal {
	constructor(HTMLelement) {
		this.element = HTMLelement;
		this.closeX = document.querySelector('.close-resources');
		this.events();
	}

	events() {
		this.closeX.addEventListener('click', () => this.close());
		document.addEventListener('keyup', (event) => this.keyPressed(event));
	}

	open() {
		this.element.classList.add('visible');
		this.element.classList.remove('invisible');
	}

	close() {
		this.element.classList.remove('visible');
		this.element.classList.add('invisible');
	}

	keyPressed(event) {
		if (event.keyCode == 27) {
			this.close();
		}
	}
}

export default ResourcesModal;
