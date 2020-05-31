class ProjectDetails {
	constructor(HTMLelement) {
		this.element = HTMLelement;
		this.closeX = document.querySelector('.close');
		this.events();
	}

	events() {
		this.closeX.addEventListener('click', () => setTimeout(() => this.close(), 300));
		document.addEventListener('keyup', (event) => this.keyPressed(event));
	}

	open() {
		this.element.classList.add('show');
		this.element.classList.remove('hide');
	}

	close() {
		this.element.classList.remove('show');
		this.element.classList.add('hide');
	}

	keyPressed(event) {
		if (event.keyCode == 27) {
			setTimeout(() => this.close(), 300);
		}
	}
}

export default ProjectDetails;
