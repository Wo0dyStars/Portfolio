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
		if (this.newClass == 'reveal-fixed-navbar') {
			if ((window.scrollY + this.browserHeight) * 0.45 > element.offsetTop) {
				target.classList.add(this.newClass);
			} else if (window.scrollY < this.browserHeight) {
				if (target.classList.contains(this.newClass)) {
					target.classList.remove(this.newClass);
				}
			}
		} else if (window.scrollY + this.browserHeight * 0.95 > element.offsetTop) {
			if (this.newClass == 'reveal-icon-animation') {
				target.classList.add(this.newClass);
			} else if (this.newClass == "profile-photo--reveal-img") {
				target.classList.add(this.newClass);
				target.style.transform = "translateX(0rem)";
				target.style.visibility = "visible";
				target.style.opacity = "1";
			}
			else {
				element.classList.add(this.newClass);
				element.style.visibility = "visible";
				element.style.opacity = "1";
			}
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
