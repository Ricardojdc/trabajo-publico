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


/**********************************************************************/ 
const formUsuario = document.getElementById('formUsuario');
const nombreUsuarioDiv = document.getElementById('nombreusuario');

// Comprobar si hay un nombre guardado en la memoria de sesión
const nombreGuardado = sessionStorage.getItem('nombreUsuario');
if (nombreGuardado) {
  // Mostrar el nombre guardado en el div
  nombreUsuarioDiv.textContent = nombreGuardado;
} else {
  // Mostrar "Sin identificar" si no hay nombre guardado
  nombreUsuarioDiv.textContent = 'Sin identificar';
}

// Agregar un evento de escucha al formulario cuando se envíe
formUsuario.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener el valor del nombre introducido por el usuario
  const nombreUsuario = document.getElementById('nombreInput').value;

  // Guardar el nombre en la memoria de sesión
  sessionStorage.setItem('nombreUsuario', nombreUsuario);

  // Mostrar el nombre en el div
  nombreUsuarioDiv.textContent = nombreUsuario;

  console.log(nombreUsuario);

  // Reiniciar el formulario
  formUsuario.reset();
});