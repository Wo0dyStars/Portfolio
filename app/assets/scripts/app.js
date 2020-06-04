// **********************************************************
// IMPORT CSS AND EXTERNAL JS FILES
// **********************************************************
import '../styles/styles.css';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import TypeLetters from './modules/TypeLetters';
import ProjectDetails from './modules/ProjectDetails';
import Card from './modules/content/classes/Card';
import Courses from './modules/content/classes/CardObject';
import FormMessage from './modules/FormMessage';
import TabNavigation from './modules/TabNavigation';
import ImageSlides from './modules/ImageSlides';

// **********************************************************
// GENERATE CARDS IN HTML
// **********************************************************
Courses.forEach((course) => {
	let template = new Card(course).GenerateTemplate();
	document.querySelector('.courses__cards').insertAdjacentHTML('beforeend', template);
});

// **********************************************************
// INVOKING EXTERNAL JS CLASSES
// **********************************************************
new TypeLetters();
new FormMessage();
new StickyHeader();
new TabNavigation();
new ImageSlides();

// **********************************************************
// LISTENING TO PROJECT DETAILS MODAL
// **********************************************************
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

// **********************************************************
// ACTIVATE ANIMATIONS ON SCROLLING
// **********************************************************
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

$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			console.log(target);
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate(
					{
						scrollTop: target.offset().top
					},
					1000,
					function() {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(':focus')) {
							// Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						}
					}
				);
			}
		}
	});
