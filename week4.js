function setup() {
    createCanvas(1500, 1200);
  }
  let midx = 250;
  let midy = 250;
  
  function draw() {
    background (100, 149, 237);
    quad(145, 180, 350, 100, midx+105, midy+150, midx-105, midy+150); 
    rect(280, midy-70, 40, 130, 5) // rect window shape 1
    square(180, midy-20, 40, 5)
    square(180, midy+20, 40)
    square(180, midy+60, 40, 5)
    
    rect(midx, midy, 200, 150)//shape 2
   
    strokeWeight(10); // Thicker
    rect(midx+110, midy+75, 40, 75, 5); //door
    
    square(280, midy+30, 40, 5); //window
    
    line(110, 194, 385, 85);//top line
    line(midx, midy, 485, midy);// mid line
    line(100, 400, 500, 400);// bottom line 
    stroke(82, 82, 82);
  }