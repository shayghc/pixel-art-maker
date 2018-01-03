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
	let fragment = document.createDocumentFragment(); // 
	
    for (let rows = 0; rows < heightVal; rows++) {
		let newRow = document.createElement('tr'); // Create a new <td> element
		fragment.appendChild(newRow); // Add the new row to the table

        for (let columns = 0; columns < widthVal; columns++) {
			let cell = document.createElement('td'); // Create a "td" element (cell) for the table row ("tr")
			cell.className = 'grid'; // Assign the "grid" class name to each td element
            fragment.appendChild(cell);
        };
    };
	gridBuild.appendChild(fragment); // Use fragment to construct the code for the table grid
	
	const grid = document.getElementsByClassName('grid') // Just to allow us to use the .style.width and .style.height to set cell sizes
    grid.style.width = "(960/widthVal)";
    grid.style.height = "(960/heightVal)";
};

// Select size input

const gridSource = document.getElementById('sizePicker');

gridSource.addEventListener('submit', function() {
	// capture values of the dimensions from the form on submit
	const gridHeight = document.getElementById('input_height');
	let heightVal = Number(gridHeight.value); // Coerce value from string to number

	const gridWidth = document.getElementById('input_width');
	let widthVal = Number(gridWidth.value); // Coerce value from string to number

	
	makeGrid(heightVal, widthVal); // When size is submitted by the user, call makeGrid()
});