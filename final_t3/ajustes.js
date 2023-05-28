
var fontSize = localStorage.getItem('fontSize');
var backgroundColor = localStorage.getItem('backgroundColor');

if (fontSize) {
  document.body.style.fontSize = fontSize;
}

if (backgroundColor) {
  document.body.style.backgroundColor = backgroundColor;
}

function increaseFontSize() {
  var currentSize = parseInt(getComputedStyle(document.body).fontSize);
  var newSize = currentSize + 2 + 'px';
  document.body.style.fontSize = newSize;
  localStorage.setItem('fontSize', newSize);
}


function decreaseFontSize() {
  var currentSize = parseInt(getComputedStyle(document.body).fontSize);
  var newSize = currentSize - 2 + 'px';
  document.body.style.fontSize = newSize;
  localStorage.setItem('fontSize', newSize);
}

function changeBackgroundColor() {
  var colorInput = document.getElementById('colorInput');
  var color = colorInput.value;
  document.body.style.backgroundColor = color;
  localStorage.setItem('backgroundColor', color);
}


/**********************************************************************/ 
const formUsuario = document.getElementById('form');
const nombreUsuarioDiv = document.getElementById('nombreusuario');


const nombreGuardado = sessionStorage.getItem('nombreUsuario');
if (nombreGuardado) {

  nombreUsuarioDiv.textContent = nombreGuardado;
  
} else {

  nombreUsuarioDiv.textContent = 'Sin identificar';
}


formUsuario.addEventListener('submit', function (event) {
  event.preventDefault(); 


  const nombreUsuario = document.getElementById('nombreInput').value;

  
  sessionStorage.setItem('nombreUsuario', nombreUsuario);

 
  nombreUsuarioDiv.textContent = nombreUsuario;

  console.log(nombreUsuario);


  formUsuario.reset();
});