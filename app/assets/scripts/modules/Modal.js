import debounce from 'lodash/debounce';

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

		this.downMouse = (e) => {
			if (this.carousel.classList.contains('transition')) return;

			this.draggingFrom = e.pageX;
			this.carousel.addEventListener('mousemove', this.moveMouse);

			document.addEventListener('mouseup', this.upMouse);
		};

		this.events();
	}

	events() {
		window.addEventListener(
			'resize',
			debounce(() => {
				this.setDimensions();
			})
		);

		this.previousButton.addEventListener('click', () => {
			this.onShift(1);
		});

		this.nextButton.addEventListener('click', () => {
			this.onShift(-1);
		});

		this.close.addEventListener('click', () => {
			this.closeModal();
		});

		this.background.addEventListener('click', () => {
			this.closeModal();
		});

		this.carousel.addEventListener('mousedown', this.downMouse);
	}

	closeModal() {
		this.carousel.removeEventListener('mousemove', this.moveMouse);
		this.carousel.removeEventListener('mousedown', this.downMouse);
		this.modalContainer.classList.remove('visible');
		setTimeout(() => {
			this.slides.forEach((slide) => {
				slide.remove();
			});
			document.querySelector('.modal-container__code').innerHTML = '';
			document.removeEventListener('mouseup', this.upMouse);
		}, 1000);
	}

	setDimensions() {
		this.slideWidth = 700 > window.innerWidth ? window.innerWidth : 700;
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

		setTimeout(function() {
			if (direction === 1) $('.carousel-container__slide:first').before($('.carousel-container__slide:last'));
			if (direction === -1) $('.carousel-container__slide:last').after($('.carousel-container__slide:first'));

			this.carousel.classList.remove('transition');
			this.carousel.style.transform = 'translateX(0px)';
		}, 700);
	}

	populateModal(id) {
		// MAIN INFORMATION
		let title = document.querySelector('.modal-container__information--title');
		let detail = document.querySelector('.modal-container__information--detail');
		let tag = document.querySelector('.modal-container__information--tag');
		let link = document.querySelector('.modal-container__link__website');
		let date = document.querySelector('.modal-container__information--date');
		let gitHub = document.querySelector(".modal-github-link");

		title.textContent = this.projects[id].title;
		detail.textContent = this.projects[id].detail;
		tag.textContent = this.projects[id].tag;
		date.textContent = this.projects[id].date;
		link.setAttribute('href', this.projects[id].link);
		link.setAttribute('target', "_blank");
		gitHub.setAttribute('href', this.projects[id].github);

		if (!this.slides.length) {
			this.projects[id].images.forEach((image) => {
				const slide = document.createElement('div');
				slide.setAttribute('class', 'carousel-container__slide');
				slide.style.backgroundImage = `${image}`;
				this.carousel.appendChild(slide);
			});
		}

		this.slides = document.querySelectorAll('.carousel-container__slide');

		// CODE SAMPLES
		let codeSamples = document.querySelector('.modal-container__code');

		this.projects[id].sampleCode.forEach((code) => {
			const title = document.createElement('div');
			title.setAttribute('class', 'modal-container__code--title');
			title.innerHTML = code.title;
			codeSamples.appendChild(title);

			const description = document.createElement('div');
			description.setAttribute('class', 'modal-container__code--description');
			description.innerHTML = code.description;
			codeSamples.appendChild(description);

			const image = document.createElement('img');
			image.setAttribute('src', code.photo);
			image.setAttribute('alt', code.title);
			image.setAttribute('title', code.title);
			codeSamples.appendChild(image);
		});
	}
}

export default Modal;
