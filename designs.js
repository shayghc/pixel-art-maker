// Select color input
// call this function when selecting pixels in the grid

function getColour() {
	let target = document.getElementById('colorPicker');
	let colourVal = target.value;
	return colourVal;
}

// Declare makeGrid() function to build the grid

function makeGrid(heightVal, widthVal) {

// Your code goes here!

}

// Select size input

const gridSource = document.getElementById('sizePicker');

gridSource.addEventListener('submit', function(event) {
	// capture values of the dimensions from the form on submit
	const gridHeight = document.getElementById('input_height');
	let heightVal = gridHeight.value;
	const gridWidth = document.getElementById('input_width');
	let widthVal = gridWidth.value;
	
	makeGrid(heightVal, widthVal); // When size is submitted by the user, call makeGrid()
});


