//2016 07 13
//taller p5.js
// es un lienzo verdo con una elipse que sigue el mouse


// en javascrip existen funciones y variable

//las variable hay que declararalas solo una vez
//equivale decirle al computador HEy guarda un esPACIO EN TU MEMORIA y ponle este nombre UNA VEZ
var miPV;


//asignacion de un valor a una variable
miPV = 50;

//una variable declarada fuera de una funcion
//es una variable global
//todas las funciones pueden leerla y modificarla

//manera corta de declarar y asignar un valor inicial
var extra = 10;


//osilador


// funcion setup
// corre una vez al principio
function setup() {
  // create canvas (dimension horizontal, dim vertical)
  createCanvas (windowWidth, windowWidth);
  // background (RGB);
  background (100, 0, 100);
  //ellipse (posx, posy, width, height);
  //ellipse (200,100, 100,50);
  
  //imprimir en consola
  //sirve para verificar si corrió el programa
  console.log(extra);
  
  // declaremos una variable local es más seguro poque evita que la modifiquen 
  var noSe=40;
  
  //imprimir en consola
  console.log (noSe);
  
  //rapidez del cuadro
  
  frameRate (20);
  
}


//función draw
//se ejecuta 60 veces por segundo
function draw() {
  //primero va a pintar el fondo y luego hace la ellipse cada vez 
  background (200, 0, 200);
  // stroke (R, G, B) elige el color del trazo
  
  
  //Estructuras condicionales 
  // decidir con que borde se dibuja
  //if para tomar dcisiones
  //si el argumento de if es verdadero se ejecuta su cuerpo sino se ejecuta else
  
  if( mouseIsPressed){
    borde1();
  } else {
    borde2 ();
  } 

 
  ellipse (100,100, miPV*2, miPV);
  ellipse(mouseX, mouseY, miPV, miPV);
  
  muchosRectangulos (500);
  
}




//funcion para def el color de una figura 
//hace que la figura tenga un ancho de 10px
//que sea relleno cyan y borde amarillo 

function borde1() {
  //aqui va lo que hace la funcion 
  stroke (250,250,0);
  //fill (R,G,B) elige el relleno
  fill (0,255, 255 );
  //stroke wieght define el tamaño del trazo admite un número en pixeles
  strokeWeight (5);
}


function borde2() {
  //aqui va lo que hace la funcion 
    noStroke ();
  //fill (R,G,B) elige el relleno
  fill (200,105, 255 );
  //stroke wieght define el tamaño del trazo admite un número en pixeles
  strokeWeight (10);
}

//funvion que aumenta en 10 el radio de circulo
function aumentarRadio (aumento){
  miPV= miPV + aumento;
  
}



function muchosRectangulos (numero) {
  //rect (posx, posy, width, height)
  
  noStroke();
  fill (random(255),random(255), random(255));
  
 //loop o bucle 
 //for(crear contador; condicion a evaluar; refresco)
 // i++ equivale a i=i+1
 
  for (i = 0; i< numero;i++){
      //en posicion aleatoria en el canvas
  rect (random(width),random(height),80,80);
  }

  
}
