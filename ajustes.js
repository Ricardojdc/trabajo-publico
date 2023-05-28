// Check if there are any saved preferences in web storage
var fontSize = localStorage.getItem('fontSize');
var backgroundColor = localStorage.getItem('backgroundColor');

if (fontSize) {
  document.body.style.fontSize = fontSize;
}

if (backgroundColor) {
  document.body.style.backgroundColor = backgroundColor;
}

// Function to increase the font size
function increaseFontSize() {
  var currentSize = parseInt(getComputedStyle(document.body).fontSize);
  var newSize = currentSize + 2 + 'px';
  document.body.style.fontSize = newSize;
  localStorage.setItem('fontSize', newSize);
}

// Function to decrease the font size
function decreaseFontSize() {
  var currentSize = parseInt(getComputedStyle(document.body).fontSize);
  var newSize = currentSize - 2 + 'px';
  document.body.style.fontSize = newSize;
  localStorage.setItem('fontSize', newSize);
}

// Function to change the background color
function changeBackgroundColor() {
  var colorInput = document.getElementById('colorInput');
  var color = colorInput.value;
  document.body.style.backgroundColor = color;
  localStorage.setItem('backgroundColor', color);
}