// **********************************************************
// IMPORT CSS AND EXTERNAL JS FILES
// **********************************************************
import '../styles/styles.css';
import mixitup from 'mixitup';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import TypeLetters from './modules/TypeLetters';
import FormMessage from './modules/FormMessage';
import TabNavigation from './modules/TabNavigation';
import Projects from './modules/content/classes/Projects';

// **********************************************************
// INVOKING EXTERNAL JS CLASSES
// **********************************************************
new TypeLetters();
new FormMessage();
new StickyHeader();
new TabNavigation();

mixitup('.mixitup', {
	animation: {
		easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
	},
	load: {
		filter: '.nodejs, .html5, .sass, .angular, .mongoose, .javascript'
	}
});

// **********************************************************
// LISTENING TO PROJECT DETAILS MODAL
// **********************************************************
let modal;
const mixItUpButtons = document.querySelectorAll('.mixitup .button');
mixItUpButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
		import(/* webpackChunkName: "modal" */ './modules/Modal')
			.then((x) => {
				modal = new x.default(Projects);
				modal.populateModal(e.target.getAttribute('id'));
				modal.modalContainer.classList.add('visible');
				modal.setDimensions();
			})
			.catch(() => console.log('There was a problem opening the modal.'));
	});
});

// **********************************************************
// ACTIVATE ANIMATIONS ON SCROLLING
// **********************************************************
let groupElements = document.querySelectorAll('.aboutMe__container__group--element');
let FirstSectionIcon = document.querySelector('.section-icon');
let headerClass = document.querySelector('.header__navigation');
let sectionElements = document.querySelectorAll('.section__title');
let floatbarElements = document.querySelectorAll('.section__floatbar');
let getInTouchElement = document.querySelector('.getInTouch');
// let mixitupElement = document.querySelector('.mixitup__container');
let timelineElement = document.querySelector('.courses');
let introductionSection = document.querySelector('.aboutMe__container__introduction');
let introductionIcons = document.querySelector('.aboutMe__container__introduction--skillset__icons');

new RevealOnScroll(sectionElements, 'reveal-section-animation');
new RevealOnScroll(floatbarElements, 'reveal-floatbar-animation');
new RevealOnScroll(groupElements, 'reveal-animation');
new RevealOnScroll(getInTouchElement, 'getInTouch-animated');
// new RevealOnScroll(mixitupElement, 'reveal-portfolio-animation');
new RevealOnScroll(timelineElement, 'reveal-timeline-animation');
new RevealOnScroll(FirstSectionIcon, 'reveal-fixed-navbar', headerClass);
new RevealOnScroll(introductionSection, 'reveal-icon-animation', introductionIcons);

// **********************************************************
// HIDE NAVIGATION BAR WHEN AN ELEMENT CLICKED
// **********************************************************
let NavigationCheckbox = document.querySelector('.header__checkbox');
let NavigationElements = document.querySelectorAll('.header__navigation--element');
let CheckboxOverlay = document.querySelector(".header__checkbox--overlay");

NavigationElements.forEach((element) => {
	element.addEventListener('click', () => {
		NavigationCheckbox.checked = false;
	});
});

CheckboxOverlay.addEventListener("click", () => {
	NavigationCheckbox.checked = false;
})

// **********************************************************
// ENABLE SMOOTH SCROLLING
// SOURCE FROM https://css-tricks.com/snippets/jquery/smooth-scrolling/
// **********************************************************
$('a[href*="#"]')
	.not('[href="#overview"]')
	.not('[href="#challenges"]')
	.not('[href="#photos"]')
	.not('[href="#code"]')
	.not('[href="#0"]')
	.click(function(event) {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

			if (target.length) {
				event.preventDefault();
				$('html, body').animate(
					{
						scrollTop: target.offset().top
					},
					500,
					function() {
						var $target = $(target);
						$target.focus();

						if ($target.is(':focus')) {
							return false;
						} else {
							$target.attr('tabindex', '-1');
							$target.focus();
						}
					}
				);
			}
		}
	});
