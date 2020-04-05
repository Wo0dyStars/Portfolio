// Find Parent element
const Parent = document.querySelector('.technologies');

// Find children of parent element
const Children = Parent.children;

// Address a specific element
const Element = Children[0];

// Change background of selected grid cell
//Children[0].style.backgroundColor = 'green';

// Check if selected cell has a background
if (Children[0].style.backgroundColor !== '') {
	console.log('It has a background.');
}

const grid = []; // It starts with an empty grid
grid.push([ 2, 4 ]);
grid.push([ 1, 4 ]);

// Finding threes
const NumberOfThrees = 3;
for (let i = 0; i < 3; i++) {}

// Get positions
let RandomCell = Math.floor(Math.random() * Math.floor(4)) + 1;

// First three cells
// TERM-1
Children[0].style.cssText = `background-color: green; grid-row: ${RandomCell} / span 3; grid-column: 4 / 5`;
let takenrow = parseInt(Children[0].style.gridRowStart);
let takencol = parseInt(Children[0].style.gridColumnStart);

for (var i = 0; i < grid.length; i++) {
	if (grid[i][0] === takenrow && grid[i][1] === takencol) {
		break;
	}
}
grid.push([ takenrow, takencol ]);
grid.push([ takenrow + 1, takencol ]);
grid.push([ takenrow + 2, takencol ]);
console.log(grid);

// Paint three cells in row
// Children[3].style.cssText = `background-color: green; grid-row: ${RandomCell} / span 3; grid-column: 4 / 5`;

// RandomCell = Math.floor(Math.random() * Math.floor(4)) + 1;
// Children[4].style.cssText = `background-color: red; grid-row: ${RandomCell} / span 3; grid-column: 3 / 4`;
// RandomCell = Math.floor(Math.random() * Math.floor(4)) + 1;
// Children[5].style.cssText = `background-color: yellow; grid-row: ${RandomCell} / span 3; grid-column: 4 / 5`;

//   1 2 3 4 5 6 7
// 1 * * * * * *
// 2 * * * * * *
// 3 * * * * * *
// 4 * * * * * *
// 5 * * * * * *
// 6 * * * * * *
// 7

export default Element;
