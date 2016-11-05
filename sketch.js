var x
var y


x=10
y=10

function setup() {
  createCanvas (500,700)
  background (200,224,198)
  
  frameRate (3)
}

function draw() {
  
  background (200,224,198)
     noStroke ()
   fill (125,96,128)
   
  
  x=x+10
  y=y+10
  
  if (x>270) {
  x=0
  } else{
  x=x
  }
  
  if (y>240) {
  y=0
  } else{
  y=y
  }
  
  
  
  
  ellipse(50+y, 250,40,40)
  ellipse(120, 60,40,40)
  ellipse(240, 50+x,40,40)
  ellipse(330, 60,40,40)
  ellipse(400, 200,40,40)
  





   
  
}