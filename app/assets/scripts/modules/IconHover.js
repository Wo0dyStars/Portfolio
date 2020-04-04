import IconHTML from './content/Icons'; // Raw HTML for icons

class IconHover {
	constructor() {
		this.IconUL = document.querySelector('.header__content__iconset');
		this.injectHTML(this.IconUL);
		this.LIs = document.querySelectorAll('li');
		this.events();
	}

	events() {
		// Listen for Hover event
		this.LIs.forEach((icon) => {
			icon.addEventListener('mouseover', (event) => {
				this.toggleOnHover(icon);
			});
		});
	}

	toggleOnHover(icon) {
		icon.classList.toggle('header__content__iconset--isLIHovered');
	}

	injectHTML(IconLocation) {
		IconLocation.insertAdjacentHTML('beforeend', IconHTML);
	}
}

export default IconHover;
