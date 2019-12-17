var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

let paleta = document.getElementById('paleta');
let grillaPixeles = document.getElementById('grilla-pixeles');
let indicadorDeColor = document.getElementById('indicador-de-color');
let mouseButtonDown = false;

function crearColores() {
  for(const prop in nombreColores ){
    let div = document.createElement("div");

    div.style.backgroundColor = nombreColores[prop];
    div.className = 'color-paleta';
    div.addEventListener( "click", function() {
      actualizarColor(indicadorDeColor, nombreColores[prop]);
    });

    paleta.appendChild(div);
  }
}

function crearGrilla() {
  for(var i = 0 ; i <= 1749; i++) {
    let div = document.createElement("div");

    div.addEventListener( "click", function() {
      actualizarColor(div, indicadorDeColor.style.backgroundColor);
    });
    div.addEventListener("mouseenter", function(){
      if(mouseButtonDown){
        actualizarColor(div, indicadorDeColor.style.backgroundColor);
      }
    });

    grillaPixeles.appendChild(div);
  }
}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    actualizarColor(indicadorDeColor, colorActual);

  })
);

function actualizarColor(pixel, pincel){
  pixel.style.backgroundColor = pincel;
}

function checkMouseButton(){

  document.body.addEventListener('mousedown', function(){
    mouseButtonDown = true;
  });

  document.body.addEventListener('mouseup', function(){
    mouseButtonDown = false;
  });
}

function borrarGrilla() {
  let elementosABorrar = grillaPixeles.children;

  for (let i = 0; i < elementosABorrar.length; i++ ) {
    $(elementosABorrar[i]).animate({backgroundColor: 'white'}, 1000);
  }
}

function dibujosSuperHeroes(){
  let dibujos = $('li img');

  for (let i = 0 ; i < dibujos.length ; i++) {
    dibujos[i].addEventListener('click', function (){
      let pixelMap;

      switch(this.id){
        case "batman":
          pixelMap = batman;
          break;
        case "wonder":
          pixelMap = wonder;
          break;
        case "flash":
          pixelMap = flash;
          break;
        case "invisible":
          pixelMap = invisible;
          break;
      }

      cargarSuperheroe(pixelMap)
    });
  }
}

function guardarDibujo() {
  let botonGuardar = document.getElementById('guardar');

  botonGuardar.addEventListener('click', guardarPixelArt );
}

$(document).ready( function() {
  crearColores();
  crearGrilla();
  checkMouseButton();
  dibujosSuperHeroes();
  guardarDibujo()

  document.getElementById('borrar').addEventListener('click', function(){
    borrarGrilla();
  });
});