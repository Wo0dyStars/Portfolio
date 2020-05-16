import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';

class RevealOnScroll {
	constructor(elements) {
		this.items = elements;
		this.browserHeight = window.innerHeight;
		this.scrolling = throttle(this.calculateElements, 200).bind(this);
		this.events();
	}

	events() {
		window.addEventListener('scroll', this.scrolling);

		window.addEventListener(
			'resize',
			debounce(() => {
				this.browserHeight = window.innerHeight;
			}, 333)
		);
	}

	scrolledElement(element) {
		if (window.scrollY + this.browserHeight > element.offsetTop) {
			element.classList.add('reveal-animation');
		}
	}

	calculateElements() {
		this.items.forEach((element) => {
			this.scrolledElement(element);
		});
	}
}

export default RevealOnScroll;
