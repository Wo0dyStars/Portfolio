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

// Finding threes
const NumberOfThrees = 3;
for (let i = 0; i < 3; i++) {}

// First three cells
// TERM-1
// Children[0].style.cssText = `background-color: green; grid-row: ${row} / span 3; grid-column: ${column} / ${column +
// 	1}`;

let isTaken = true;
for (let three = 0; three < NumberOfThrees; three++) {
	isTaken = true;
	while (isTaken === true) {
		let row = Math.floor(Math.random() * Math.floor(4)) + 1;
		let column = Math.floor(Math.random() * Math.floor(6)) + 1;
		isTaken = false;
		for (var cell = row; cell < row + 3; cell++) {
			for (var i = 0; i < grid.length && isTaken === false; i++) {
				if (grid[i][0] === cell && grid[i][1] === column) {
					isTaken = true;
				}
			}
		}
		if (!isTaken) {
			grid.push([ row, column ], [ row + 1, column ], [ row + 2, column ]);
			Children[
				three
			].style.cssText = `background-color: green; grid-row: ${row} / span 3; grid-column: ${column} / ${column +
				1}`;
		}
	}
}

// grid.push([ takenrow, takencol ]);
// grid.push([ takenrow + 1, takencol ]);
// grid.push([ takenrow + 2, takencol ]);
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
