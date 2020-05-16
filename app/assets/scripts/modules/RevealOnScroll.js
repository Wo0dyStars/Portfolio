import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';

class RevealOnScroll {
	constructor(elements, CSSclass, outerClass = 'none') {
		this.items = elements;
		this.browserHeight = window.innerHeight;
		this.scrolling = throttle(this.calculateElements, 200).bind(this);
		this.newClass = CSSclass;
		this.outerClass = outerClass;
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

	scrolledElement(element, target = 'none') {
		console.log('offset: ', element.offsetTop);
		console.log('this.browserHeight: ', this.browserHeight);
		console.log('window.scrollY: ', window.scrollY);

		console.log('element: ', element);
		if (window.scrollY + this.browserHeight > element.offsetTop) {
			if (target == 'none') {
				element.classList.add(this.newClass);
			} else {
				target.classList.add(this.newClass);
			}
		}
	}

	calculateElements() {
		if (this.outerClass == 'none') {
			this.items.forEach((element) => {
				this.scrolledElement(element);
			});
		} else {
			this.scrolledElement(this.items, this.outerClass);
		}
	}
}

export default RevealOnScroll;
