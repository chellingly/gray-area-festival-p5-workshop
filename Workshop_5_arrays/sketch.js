var x = 0;
var speed=4;
var bubble = [];


function setup() {
  createCanvas(500,500);
  for(var i = 0; i<10; i++){
    bubble.push(new Bubble(random(0,500),random(0,500)));
    
  }
  
}

function draw() {
  
  background(0);
  for(var i=0; i<bubble.length; i++){
    bubble[i].display();
  }
  
  
}


function Bubble(x,y){
  this.x=x;
  this.y=y;
  
  this.display = function(){
        noStroke();
    fill(255);
    ellipse(this.x,this.y, 20, 20);
  }

}