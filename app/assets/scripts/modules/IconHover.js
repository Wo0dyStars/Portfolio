import IconHTML from './content/Icons'; // Raw HTML for icons

class IconHover {
	constructor() {
		this.IconUL = document.querySelector('.header__content__iconset');
		this.injectHTML(this.IconUL);
	}

	injectHTML(IconLocation) {
		IconLocation.insertAdjacentHTML('beforeend', IconHTML);
	}
}

export default IconHover;
