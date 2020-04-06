import '../styles/styles.css';
import IconHover from './modules/IconHover';
import Courses from './modules/Cards';
//import Children from './modules/GridGenerator';

const icons = new IconHover();

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

const Technologies = [
	'Flexbox',
	'Node JS',
	'Mongo DB',
	'HTML5',
	'CSS3',
	'JavaScript',
	'BEM',
	'GIT',
	'GitHub',
	'NPM',
	'Webpack',
	'OOP',
	'Animations',
	'Grid',
	'Sass',
	'DOM',
	'Axios',
	'Asynchronous',
	'Promise',
	'ExpressJS',
	'REST APIs',
	'Authentication',
	'Authorization'
];

// Knuth shuffle algorithm
function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	array[23] = array[12];
	array[12] = 'Peter Kertesz';

	return array;
}

shuffle(Technologies);
console.log(Technologies);

const Parent = document.querySelector('.technologies');

for (let i = 0; i < 24; i++) {
	Parent.children[i].textContent = `${Technologies[i]}`;
}

const C = [];
for (let i = 0; i < 24; i++) {
	let R = Math.floor(Math.random() * 255);
	let G = Math.floor(Math.random() * 255);
	let B = Math.floor(Math.random() * 255);
	let A = (Math.random() * 0.2).toFixed(2);
	C.push(`${R}, ${G}, ${B}, ${A}`);
}
Parent.children[0].style.backgroundColor = 'green';

Parent.children[0].style.cssText = `background-color: rgba(${C[0]}); grid-row: 1 / 2; grid-column: 1 / 4`;
Parent.children[4].style.cssText = `background-color: rgba(${C[1]}); grid-row: 2 / 3; grid-column: 2 / 5`;

Parent.children[1].style.cssText = `background-color: rgba(${C[2]}); grid-row: 1 / 2; grid-column: 4 / 6`;
Parent.children[3].style.cssText = `background-color: rgba(${C[3]}); grid-row: 2 / 4; grid-column: 1 / 2`;
Parent.children[7].style.cssText = `background-color: rgba(${C[4]}); grid-row: 3 / 5; grid-column: 2 / 3`;
Parent.children[8].style.cssText = `background-color: rgba(${C[5]}); grid-row: 3 / 4; grid-column: 5 / 7`;
Parent.children[13].style.cssText = `background-color: rgba(${C[6]}); grid-row: 4 / 5; grid-column: 5 / 7`;

Parent.children[2].style.cssText = `background-color: rgba(${C[7]}); grid-row: 1 / 2; grid-column: 6 / 7`;
Parent.children[5].style.cssText = `background-color: rgba(${C[8]}); grid-row: 2 / 3; grid-column: 5 / 6`;
Parent.children[6].style.cssText = `background-color: rgba(${C[9]}); grid-row: 2 / 3; grid-column: 6 / 7`;
Parent.children[9].style.cssText = `background-color: rgba(${C[10]}); grid-row: 4 / 5; grid-column: 1 / 2`;
Parent.children[10].style.cssText = `background-color: rgba(${C[11]}); grid-row: 5 / 6; grid-column: 3 / 4`;
Parent.children[11].style.cssText = `background-color: rgba(${C[12]}); grid-row: 5 / 6; grid-column: 4 / 5`;
Parent.children[14].style.cssText = `background-color: rgba(${C[13]}); grid-row: 5 / 6; grid-column: 1 / 2`;
Parent.children[15].style.cssText = `background-color: rgba(${C[14]}); grid-row: 5 / 6; grid-column: 2 / 3`;
Parent.children[16].style.cssText = `background-color: rgba(${C[15]}); grid-row: 5 / 6; grid-column: 5 / 6`;
Parent.children[17].style.cssText = `background-color: rgba(${C[16]}); grid-row: 6 / 7; grid-column: 5 / 6`;
Parent.children[18].style.cssText = `background-color: rgba(${C[17]}); grid-row: 5 / 6; grid-column: 6 / 7`;
Parent.children[19].style.cssText = `background-color: rgba(${C[18]}); grid-row: 6 / 7; grid-column: 1 / 2`;
Parent.children[20].style.cssText = `background-color: rgba(${C[19]}); grid-row: 6 / 7; grid-column: 2 / 3`;
Parent.children[21].style.cssText = `background-color: rgba(${C[20]}); grid-row: 6 / 7; grid-column: 3 / 4`;
Parent.children[22].style.cssText = `background-color: rgba(${C[21]}); grid-row: 6 / 7; grid-column: 4 / 5`;
Parent.children[23].style.cssText = `background-color: rgba(${C[22]}); grid-row: 6 / 7; grid-column: 6 / 7`;

Parent.children[12].style.cssText = `grid-row: 3 / 5; grid-column: 3 / 5`;
