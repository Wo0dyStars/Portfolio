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
		if (target != 'none') {
			if ((window.scrollY + this.browserHeight) * 0.6 > element.offsetTop) {
				target.classList.add(this.newClass);
			} else if (window.scrollY < this.browserHeight) {
				if (target.classList.contains(this.newClass)) {
					target.classList.remove(this.newClass);
				}
			}
		} else if (window.scrollY + this.browserHeight > element.offsetTop) {
			element.classList.add(this.newClass);
		}
	}

	calculateElements() {
		if (this.outerClass == 'none') {
			if (!NodeList.prototype.isPrototypeOf(this.items)) {
				this.scrolledElement(this.items);
			} else {
				this.items.forEach((element) => {
					this.scrolledElement(element);
				});
			}
		} else {
			this.scrolledElement(this.items, this.outerClass);
		}
	}
}

export default RevealOnScroll;
