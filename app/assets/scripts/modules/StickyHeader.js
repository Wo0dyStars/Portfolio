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
		this.sections.forEach((element, idx) => this.findSection(element, idx));
	}

	findSection(element, idx) {
		if (window.scrollY + this.browserHeight * 1 > element.offsetTop) {
			this.elements[idx].classList.add('active');
			this.elements[this.currentIndex].classList.remove('active');
			this.currentIndex = idx;
		}
	}
}

export default StickyHeader;
