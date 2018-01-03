// Select color input
// call this function when selecting pixels in the grid

function getColour() {
	let target = document.getElementById('colorPicker');
	let colourVal = target.value;
	return colourVal;
}

// Declare makeGrid() function to build the grid

function makeGrid(heightVal, widthVal) {

	const gridBuild = document.getElementById('pixel_canvas');
	
    for (let rows = 0; rows < heightVal; rows++) {
		let newRow = document.createElement('tr'); // Create a new <td> element
		gridBuild.appendChild(newRow); // Add the new row to the table

        for (let columns = 0; columns < widthVal; columns++) {
            newRow.appendChild("<td class='grid'></td>");
        };
    };
	const grid = document.getElementsByClassName('grid');      ///////////****************************** FRAGMENT????????????*************************
    grid.style.width = "50px";
    grid.style.height = "50px";
};

// Select size input

const gridSource = document.getElementById('sizePicker');

gridSource.addEventListener('submit', function(event) {
	// capture values of the dimensions from the form on submit
	const gridHeight = document.getElementById('input_height');
	let heightVal = Number(gridHeight.value); // Coerce value from string to number

	const gridWidth = document.getElementById('input_width');
	let widthVal = Number(gridWidth.value); // Coerce value from string to number

	
	makeGrid(heightVal, widthVal); // When size is submitted by the user, call makeGrid()
});

