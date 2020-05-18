import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class StickyHeader {
	constructor() {
		this.currentIndex = 0;
		this.sections = document.querySelectorAll('.page-section');
		this.elements = document.querySelectorAll('.header__navigation--element');
		this.browserHeight = window.innerHeight;
		this.events();
	}

	events() {
		window.addEventListener('scroll', throttle(() => this.runOnScroll(), 200));
		window.addEventListener(
			'resize',
			debounce(() => {
				this.browserHeight = window.innerHeight;
			}, 333)
		);
	}

	runOnScroll() {
		this.determineScrollDirection();
		this.sections.forEach((element, idx) => this.findSection(element, idx));
	}

	determineScrollDirection() {
		if (window.scrollY > this.previousScrollY) {
			this.scrollDirection = 'down';
		} else {
			this.scrollDirection = 'up';
		}
		this.previousScrollY = window.scrollY;
	}

	findSection(element, idx) {
		if (
			window.scrollY + this.browserHeight > element.offsetTop &&
			window.scrollY < element.offsetTop + element.offsetHeight
		) {
			let scrollPercent = element.getBoundingClientRect().y / this.browserHeight * 100;
			if (
				(scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection == 'down') ||
				(scrollPercent < 33 && this.scrollDirection == 'up')
			) {
				this.elements[idx].classList.add('active');
				this.elements[this.currentIndex].classList.remove('active');
				this.currentIndex = idx;
			}
		}
	}
}

export default StickyHeader;
