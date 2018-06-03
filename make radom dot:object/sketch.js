
let circle =[];  

function setup() {
	createCanvas(windowWidth,windowHeight);
	//ceate by object 
	for (let i = 0 ; i < 100 ; i++){	
		 circle[i] = {
			x : random(0,width) ,
			y : random(0,height),
			r : 20 ,
			move:function() {
			this.x +=  random(-1,1);
			this.y +=  random(-1,1);
		} ,
			show:function (){
			noStroke();
			fill(153, 255, 102);		
			ellipse(this.x,this.y,this.r,this.r);			
		}
		}
		
	}
	let apple = createDiv("CLICK & MAKE DOT") ;
	apple.style("font-size","90px")
	apple.center();

}
 

 function mousePressed(){
 	let b = {
			x : random(0,width) ,
			y : random(0,height),
			r : 20 ,
			move:function() {
			this.x +=  random(-1,1);
			this.y +=  random(-1,1);
		} ,
			show:function (){
			noStroke();
			fill(0);		
			ellipse(this.x,this.y,this.r,this.r);			
		}
		}
 	circle.push(b);

 }

function windowresize(){

}


function draw() {
	//bg 
	background(255,102,255);
	//ellipse
	// noStroke();
	// fill(150,250,90);
	// for ( i = 0 ; i < 4 ; i++){
	// ellipse( circle[i].x ,circle[i].y ,circle[i].r, circle[i].r);	
	// }
	for( let i = 0 ; i < circle.length ; i++){

	circle[i].show();

	circle[i].move();
	} 



}

