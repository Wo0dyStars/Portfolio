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
let ResourcesLink = document.querySelector('.resources-link');
let ModalElement = document.querySelector('.footer__resources');
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
		const images = document.getElementsByClassName('project-image');
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

// Arrows.addEventListener('click', (e) => {
// 	console.log(e.target);
// 	const images = document.getElementsByClassName('project-image');
// 	let currentIndex = 0;
// 	for (let i = 0; i < images.length; i++) {
// 		if (images[i].classList.contains('image-on')) {
// 			// turn off current image
// 			images[i].classList.remove('image-on');
// 			images[i].classList.add('image-off');
// 			currentIndex = i;
// 		}
// 	}

// 	// turn on next image
// 	let nextIndex = currentIndex - 1;
// 	if (nextIndex < 0) {
// 		// turn on last image
// 		nextIndex = images.length - 1;
// 	}

// 	images[nextIndex].classList.remove('image-off');
// 	images[nextIndex].classList.add('image-on');
// });

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
// 	showDivs((slideIndex += n));
// }

// function showDivs(n) {
// 	var i;
// 	var x = document.getElementsByClassName('hide-image');
// 	if (n > x.length) {
// 		slideIndex = 1;
// 	}
// 	if (n < 1) {
// 		slideIndex = x.length;
// 	}
// 	for (i = 0; i < x.length; i++) {
// 		x[i].style.display = 'none';
// 	}
// 	x[slideIndex - 1].style.display = 'block';
// }

// console.log(Children);

// Now working on string entry and generator
// let gridBoard = '010101020203/040505050607/040813130909/100813131414/151611121719/202122231824';
// let keyLetters = [ '04' ];
// console.log(gridBoard);

// let indices = [];
// for (let i = 0; i < gridBoard.length; i += 2) {
// 	if (gridBoard[i] + gridBoard[i + 1] === keyLetters[0]) {
// 		indices.push(Math.round((i + 1) / 2));
// 	}
// }

// console.log(indices);

// 01 01 01 02 02 03
// 04 05 05 05 06 07
// 04 08 13 13 09 09
// 10 08 13 13	14 14
// 15 16 11 12 17 19
// 20 21 22 23 18 24

// const Technologies = [
// 	'Flexbox',
// 	'Node JS',
// 	'Mongo DB',
// 	'HTML5',
// 	'CSS3',
// 	'JavaScript',
// 	'BEM',
// 	'GIT',
// 	'GitHub',
// 	'NPM',
// 	'Webpack',
// 	'OOP',
// 	'Animations',
// 	'Grid',
// 	'Sass',
// 	'DOM',
// 	'Axios',
// 	'Asynchronous',
// 	'Promise',
// 	'ExpressJS',
// 	'REST APIs',
// 	'Authentication',
// 	'Authorization'
// ];

// // Knuth shuffle algorithm
// function shuffle(array) {
// 	var currentIndex = array.length,
// 		temporaryValue,
// 		randomIndex;

// 	// While there remain elements to shuffle...
// 	while (0 !== currentIndex) {
// 		// Pick a remaining element...
// 		randomIndex = Math.floor(Math.random() * currentIndex);
// 		currentIndex -= 1;

// 		// And swap it with the current element.
// 		temporaryValue = array[currentIndex];
// 		array[currentIndex] = array[randomIndex];
// 		array[randomIndex] = temporaryValue;
// 	}

// 	array[23] = array[12];
// 	array[12] = 'Responsive';

// 	return array;
// }

// shuffle(Technologies);
// console.log(Technologies);

// const Parent = document.querySelector('.technologies');

// for (let i = 0; i < 24; i++) {
// 	Parent.children[i].textContent = `${Technologies[i]}`;
// }

// const C = []; // Random colors
// const F = []; // Random font-sizes
// for (let i = 0; i < 24; i++) {
// 	let R = Math.floor(Math.random() * 255);
// 	let G = Math.floor(Math.random() * 255);
// 	let B = Math.floor(Math.random() * 255);
// 	let A = (Math.random() * 0.5).toFixed(2);
// 	C.push(`${R}, ${G}, ${B}, ${A}`);

// 	let Font = Math.floor(Math.random() * 1.4) + 1.8;
// 	F.push(Font);
// }

// Parent.children[0].style.cssText = `font-size: ${F[0]}rem; background-color: rgba(${C[0]}); grid-row: 1 / 2; grid-column: 1 / 4`;
// Parent.children[4].style.cssText = `font-size: ${F[1]}rem; background-color: rgba(${C[1]}); grid-row: 2 / 3; grid-column: 2 / 5`;

// Parent.children[1].style.cssText = `font-size: ${F[2]}rem; background-color: rgba(${C[2]}); grid-row: 1 / 2; grid-column: 4 / 6`;
// Parent.children[3].style.cssText = `font-size: ${F[3]}rem; background-color: rgba(${C[3]}); grid-row: 2 / 4; grid-column: 1 / 2`;
// Parent.children[7].style.cssText = `font-size: ${F[4]}rem; background-color: rgba(${C[4]}); grid-row: 3 / 5; grid-column: 2 / 3`;
// Parent.children[8].style.cssText = `font-size: ${F[5]}rem; background-color: rgba(${C[5]}); grid-row: 3 / 4; grid-column: 5 / 7`;
// Parent.children[13].style.cssText = `font-size: ${F[6]}rem; background-color: rgba(${C[6]}); grid-row: 4 / 5; grid-column: 5 / 7`;

// Parent.children[2].style.cssText = `font-size: ${F[7]}rem; background-color: rgba(${C[7]}); grid-row: 1 / 2; grid-column: 6 / 7`;
// Parent.children[5].style.cssText = `font-size: ${F[8]}rem; background-color: rgba(${C[8]}); grid-row: 2 / 3; grid-column: 5 / 6`;
// Parent.children[6].style.cssText = `font-size: ${F[9]}rem; background-color: rgba(${C[9]}); grid-row: 2 / 3; grid-column: 6 / 7`;
// Parent.children[9].style.cssText = `font-size: ${F[10]}rem; background-color: rgba(${C[10]}); grid-row: 4 / 5; grid-column: 1 / 2`;
// Parent.children[10].style.cssText = `font-size: ${F[11]}rem; background-color: rgba(${C[11]}); grid-row: 5 / 6; grid-column: 3 / 4`;
// Parent.children[11].style.cssText = `font-size: ${F[12]}rem; background-color: rgba(${C[12]}); grid-row: 5 / 6; grid-column: 4 / 5`;
// Parent.children[14].style.cssText = `font-size: ${F[13]}rem; background-color: rgba(${C[13]}); grid-row: 5 / 6; grid-column: 1 / 2`;
// Parent.children[15].style.cssText = `font-size: ${F[14]}rem; background-color: rgba(${C[14]}); grid-row: 5 / 6; grid-column: 2 / 3`;
// Parent.children[16].style.cssText = `font-size: ${F[15]}rem; background-color: rgba(${C[15]}); grid-row: 5 / 6; grid-column: 5 / 6`;
// Parent.children[17].style.cssText = `font-size: ${F[16]}rem; background-color: rgba(${C[16]}); grid-row: 6 / 7; grid-column: 5 / 6`;
// Parent.children[18].style.cssText = `font-size: ${F[17]}rem; background-color: rgba(${C[17]}); grid-row: 5 / 6; grid-column: 6 / 7`;
// Parent.children[19].style.cssText = `font-size: ${F[18]}rem; background-color: rgba(${C[18]}); grid-row: 6 / 7; grid-column: 1 / 2`;
// Parent.children[20].style.cssText = `font-size: ${F[19]}rem; background-color: rgba(${C[19]}); grid-row: 6 / 7; grid-column: 2 / 3`;
// Parent.children[21].style.cssText = `font-size: ${F[20]}rem; background-color: rgba(${C[20]}); grid-row: 6 / 7; grid-column: 3 / 4`;
// Parent.children[22].style.cssText = `font-size: ${F[21]}rem; background-color: rgba(${C[21]}); grid-row: 6 / 7; grid-column: 4 / 5`;
// Parent.children[23].style.cssText = `font-size: ${F[22]}rem; background-color: rgba(${C[22]}); grid-row: 6 / 7; grid-column: 6 / 7`;

// Parent.children[12].style.cssText = `grid-row: 3 / 5; grid-column: 3 / 5`;
