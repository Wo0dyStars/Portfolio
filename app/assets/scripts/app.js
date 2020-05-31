import '../styles/styles.css';
import IconHover from './modules/IconHover';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import TypeLetters from './modules/TypeLetters';
import ResourcesModal from './modules/ResourcesModal';
import Courses from './modules/Cards';
import Gallery from './modules/Gallery';

const submit = document.querySelector('.submit-message');

new TypeLetters();

new StickyHeader();

let modal;
let ResourcesLink = document.querySelector('.show-project');
let ModalElement = document.querySelector('.projects__project__details');
ResourcesLink.addEventListener('click', (e) => {
	e.preventDefault();
	if (typeof modal === 'undefined') {
		modal = new ResourcesModal(ModalElement);
		setTimeout(() => modal.open(), 300);
	} else {
		setTimeout(() => modal.open(), 300);
	}
});

window.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('.message-form');
	const button = document.querySelector('.submit-message');
	const status = document.querySelector('.form-status');

	function success() {
		form.reset();
		button.style = 'display: none';
		status.innerHTML = 'Thanks for your message. I will be in touch soon. :)';
	}

	function error() {
		status.innerHTML = 'An error occurred with the form. Please try again!';
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const data = new FormData(form);

		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = function() {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				success(xhr.response, xhr.responseType);
			} else {
				error(xhr.status, xhr.response, xhr.responseType);
			}
		};
		xhr.send(data);
	});
});

//import Children from './modules/GridGenerator';

// const icons = new IconHover();
// const gallery = new Gallery();

// Check if scrolling is working
let groupElements = document.querySelectorAll('.aboutMe__container__group--element');
let cardElements = document.querySelectorAll('.card');
let FirstSectionIcon = document.querySelector('.section-icon');
let headerClass = document.querySelector('.header__navigation');
let sectionElements = document.querySelectorAll('.section__title');
let getInTouchElement = document.querySelector('.getInTouch');
let introductionSection = document.querySelector('.aboutMe__container__introduction');
let introductionIcons = document.querySelector('.aboutMe__container__introduction--skillset__icons');

new RevealOnScroll(sectionElements, 'reveal-section-animation');
new RevealOnScroll(groupElements, 'reveal-animation');
new RevealOnScroll(cardElements, 'reveal-card-animation');
new RevealOnScroll(getInTouchElement, 'getInTouch-animated');
new RevealOnScroll(FirstSectionIcon, 'reveal-fixed-navbar', headerClass);
new RevealOnScroll(introductionSection, 'reveal-icon-animation', introductionIcons);

const Arrows = document.querySelectorAll('.arrow');

Arrows.forEach((arrow) => {
	arrow.addEventListener('click', (e) => {
		const images = document.getElementsByClassName('project-photos__photo');
		let currentIndex = 0;
		for (let i = 0; i < images.length; i++) {
			if (images[i].classList.contains('image-on')) {
				// turn off current image
				images[i].classList.remove('image-on');
				images[i].classList.add('image-off');
				currentIndex = i;
			}
		}

		let nextIndex = 0;
		if (e.target.classList.contains('leftarrow')) {
			// turn on next image
			nextIndex = currentIndex - 1;
			if (nextIndex < 0) {
				// turn on last image
				nextIndex = images.length - 1;
			}
		} else if (e.target.classList.contains('rightarrow')) {
			// turn on next image
			nextIndex = currentIndex + 1;
			if (nextIndex > images.length - 1) {
				nextIndex = 0;
			}
		}

		images[nextIndex].classList.remove('image-off');
		images[nextIndex].classList.add('image-on');
	});
});

const tabs = document.querySelectorAll('.tabs__tab');

tabs.forEach((tab) => {
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

		// Add ripple effect
		// document.querySelector('.tabs').removeChild(document.querySelector('.ripple'));

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
