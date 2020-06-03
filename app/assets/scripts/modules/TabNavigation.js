class TabNavigation {
	constructor() {
		this.tabs = document.querySelectorAll('.tabs__tab');
		this.events();
	}

	events() {
		this.tabs.forEach((tab) => {
			tab.addEventListener('click', (e) => {
				// Slider must not be clicked.
				if (e.target.classList.contains('slider')) {
					return;
				}

				let currentID = e.target.getAttribute('name');
				let currentActive = document.querySelector('.tab-active');
				currentActive.classList.remove('.tab-active');

				e.target.classList.add('.tab-active');

				let currentVisible = document.querySelector('.tab-visible');
				currentVisible.classList.remove('tab-visible');
				currentVisible.classList.add('tab-invisible');

				let nextTab = document.getElementById(currentID);
				if (nextTab.classList.contains('tab-invisible')) {
					nextTab.classList.remove('tab-invisible');
					nextTab.classList.add('tab-visible');
				}

				// Move the slider
				let tabsWidth = document.querySelector('.tabs').offsetWidth;
				let sliderPosition = tabsWidth / 4 * e.target.getAttribute('index');

				let slider = document.querySelector('.slider');
				slider.style.cssText = `left: ${sliderPosition}px`;

				let RippleBefore = document.querySelector('.ripple');
				if (RippleBefore) {
					RippleBefore.parentElement.removeChild(RippleBefore);
				}

				e.target.insertAdjacentHTML('beforeend', "<span class='ripple'></span>");
				let Ripple = document.querySelector('.ripple');

				let buttonWidth = tabsWidth / 4;
				let buttonHeight = 50;

				if (buttonWidth >= buttonHeight) {
					buttonHeight = buttonWidth;
				} else {
					buttonWidth = buttonHeight;
				}

				Ripple.style.cssText = `width: ${buttonWidth}px; height: ${buttonHeight}px; left: ${sliderPosition}px`;
				Ripple.classList.add('rippleEffect');
			});
		});
	}
}

export default TabNavigation;
