let midx = 250;
let midy = 250;

let xPos1=594;//line 1
let yPos1=0;
let xPos2=871;
let yPos2=-109


let aPos1= 600;//line 2
let aPos2= 835;


let bPos1=-400;//line 3
let bPos2=0;
 

let q1=100;
let q2= 180;

var n=0;

var fade=0
var fade=2

var nums= [230,270,310] //windows


var words=["Skyline Property Group","A Higher Form of Realty."];

var index=0;
    
function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  background (100, 149, 237);
  
  
    line(xPos1, yPos1, xPos2, yPos2);//line 1
  
    xPos1=xPos1-5;
      if(xPos1<=110){
        xPos1=110
      }
  
    yPos1=yPos1+2;
      if(yPos1>=194){
        yPos1=194
      }
  
    xPos2=xPos2-5;
      if(xPos2<=385){
        xPos2=385
      }

    yPos2=yPos2+2;
      if(yPos2>=85){
        yPos2=85
      }
  
  
  line(aPos1, 250, aPos2, 250);// line 2
  
    aPos1=aPos1-3.5;
      if(aPos1<=250){
        aPos1=250
      }
  
    aPos2=aPos2-3.5;
      if(aPos2<=485){
        aPos2=485
      }

   
  
  line(bPos1, 400, bPos2, 400);// line 3

   bPos1=bPos1+5;
      if(bPos1>=100){
        bPos1=100
      }
  
    bPos2=bPos2+5;
      if(bPos2>=500){
        bPos2=500
      }


  
   
 if(xPos1<=110){ 
   
   quad(145, 180, 350, 100, 355, q1, 145, q2); 
   
   q1=q1+5;
     if(q1>=400){
      q1=400
     }
    
    if(q1>=179){
      q2=q2+5;
      
      if(q2>=400){
        q2=400
      }
      
    }
   
}  
  
  if(aPos1<=250){
  
  rect(250, 400, 200, n)//shape 2
    n=n-2.5
    if(n<=-150){
      n=-150
    }
   
  }
  
  strokeWeight(10); // thicker
  stroke(82,82,82); //stroke colour
  
  
push()
  stroke(82,fade)
  if(n<=-150){
  
  fill(255,255,255,fade)
    
    fade+=30
  if(fade>=255){
    fade = 255
  }
  
  rect(280, midy-70, 40, 70, 5) // rect window shape 1
    
    for(var i = 0; i < 4; i++){
    square(180, nums[i], 40, 5)
    
  }
    
  rect(midx+110, midy+75, 40, 75, 5); //door
  square(280, midy+30, 40, 5); //window
  
  }
pop()
  

}
