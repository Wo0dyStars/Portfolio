class IconHover {
	constructor() {
		this.IconUL = document.querySelector('.header__content__iconset');
		this.injectHTML(this.IconUL);
	}

	injectHTML(IconLocation) {
		IconLocation.insertAdjacentHTML(
			'beforeend',
			`
            <li>
                <svg class="header__content__iconset__icon">
                    <use xlink:href="assets/images/icons/sprite.svg#icon-document-file-html"></use>
                </svg>
                <span>HTML</span>
            </li>
            <li>
                <svg class="header__content__iconset__icon">
                    <use xlink:href="assets/images/icons/sprite.svg#icon-document-file-css"></use>
                    <span>CSS</span>
                </svg>
            </li>
            <li>
                <svg class="header__content__iconset__icon">
                    <use xlink:href="assets/images/icons/sprite.svg#icon-javascript"></use>
                    <span>JavaScript</span>
                </svg>
            </li>
            <li>
                <svg class="header__content__iconset__icon">
                    <use xlink:href="assets/images/icons/sprite.svg#icon-jquery"></use>
                    <span>JQuery</span>
                </svg>
            </li>
            <li>
                <svg class="header__content__iconset__icon">
                    <use xlink:href="assets/images/icons/sprite.svg#icon-node-dot-js"></use>
                    <span>NodeJS</span>
                </svg>
            </li>
            <li>
                <svg class="header__content__iconset__icon">
                    <use xlink:href="assets/images/icons/sprite.svg#icon-mongodb"></use>
                    <span>MongoDB</span>
                </svg>
            </li>
        `
		);
	}
}

export default IconHover;
