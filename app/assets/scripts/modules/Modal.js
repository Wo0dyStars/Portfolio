class Modal {
	constructor(projects) {
		this.slideWidth = 700;
		this.draggingFrom = 0;
		this.draggingTo = 0;
		this.threshold = this.slideWidth / 3;
		this.projects = projects;

		// DOM ELEMENTS
		this.mixItUpButtons = document.querySelectorAll('.mixitup .button');
		this.modalContainer = document.querySelector('.modal-container');
		this.carouselContainer = document.querySelector('.carousel-container');
		this.carousel = document.querySelector('#carousel');
		this.slides = [];
		this.close = document.querySelector('.close-modal');
		this.background = document.querySelector('.modal-container__background');

		this.previousButton = document.querySelector('#previousButton');
		this.nextButton = document.querySelector('#nextButton');

		this.moveMouse = (e) => {
			this.draggingTo = e.pageX;
			this.carousel.style.transform = `translateX(${this.getDraggingPosition()}px)`;
		};

		this.upMouse = () => {
			if (this.getDraggingPosition() > this.threshold) return this.onShift(1);
			if (this.getDraggingPosition() < -this.threshold) return this.onShift(-1);

			this.onShift(0);
		};

		this.events();
	}

	events() {
		this.mixItUpButtons.forEach((button) => {
			button.addEventListener('click', (e) => {
				this.populateModal(e.target.getAttribute('id'));
				this.modalContainer.classList.add('visible');
				this.setDimensions();
			});
		});

		this.previousButton.addEventListener('click', () => {
			this.onShift(1);
		});

		this.nextButton.addEventListener('click', () => {
			this.onShift(-1);
		});

		this.close.addEventListener('click', () => {
			this.modalContainer.classList.remove('visible');
		});

		this.background.addEventListener('click', () => {
			this.modalContainer.classList.remove('visible');
		});

		this.carousel.addEventListener('mousedown', (event) => {
			if (this.carousel.classList.contains('transition')) return;

			this.draggingFrom = event.pageX;
			this.carousel.addEventListener('mousemove', this.moveMouse);

			document.addEventListener('mouseup', this.upMouse);
		});
	}

	setDimensions() {
		this.carouselContainer.style.width = this.slideWidth + 'px';
		if (this.slides.length) {
			this.slides.forEach((slide) => (slide.style.width = this.slideWidth + 'px'));
		}
		this.carousel.style.left = this.slideWidth * -1 + 'px';
	}

	getDraggingPosition() {
		return this.draggingTo - this.draggingFrom;
	}

	onShift(direction) {
		if (this.carousel.classList.contains('transition')) return;

		this.draggingTo = this.draggingFrom;

		document.removeEventListener('mouseup', this.upMouse);
		this.carousel.removeEventListener('mousemove', this.moveMouse);

		this.carousel.classList.add('transition');
		this.carousel.style.transform = `translateX(${direction * this.slideWidth}px)`;
		console.log(this.carousel);

		setTimeout(function() {
			if (direction === 1) $('.carousel-container__slide:first').before($('.carousel-container__slide:last'));
			if (direction === -1) $('.carousel-container__slide:last').after($('.carousel-container__slide:first'));

			this.carousel.classList.remove('transition');
			this.carousel.style.transform = 'translateX(0px)';
		}, 700);
	}

	populateModal(id) {
		let title = document.querySelector('.modal-container__information--title');
		let detail = document.querySelector('.modal-container__information--detail');
		let tag = document.querySelector('.modal-container__information--tag');

		title.textContent = this.projects[id].title;
		detail.textContent = this.projects[id].detail;
		tag.textContent = this.projects[id].tag;

		this.projects[id].images.forEach((image) => {
			const slide = document.createElement('div');
			slide.setAttribute('class', 'carousel-container__slide');
			slide.style.background = `${image} center center/cover`;
			this.carousel.appendChild(slide);
		});

		this.slides = document.querySelectorAll('.carousel-container__slide');
	}
}

export default Modal;
