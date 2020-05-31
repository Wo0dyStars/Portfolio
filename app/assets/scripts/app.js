import '../styles/styles.css';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import TypeLetters from './modules/TypeLetters';
import ProjectDetails from './modules/ProjectDetails';
import Card from './modules/content/classes/Card';
import Courses from './modules/content/classes/CardObject';
import FormMessage from './modules/FormMessage';

Courses.forEach((course) => {
	let template = new Card(course).GenerateTemplate();
	document.querySelector('.courses__cards').insertAdjacentHTML('beforeend', template);
});

new TypeLetters();
new FormMessage();
new StickyHeader();

let project;
let projectLink = document.querySelector('.show-project');
let projectElement = document.querySelector('.projects__project__details');
projectLink.addEventListener('click', (e) => {
	e.preventDefault();
	if (typeof project === 'undefined') {
		project = new ProjectDetails(projectElement);
		setTimeout(() => project.open(), 10);
	} else {
		setTimeout(() => project.open(), 10);
	}
});

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
