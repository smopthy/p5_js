

let circle =[]; 
let circle2= [] ; 

function setup() {
	createCanvas(windowWidth,windowHeight);
	// control the number paricle in the begin
	for (let i = 0 ; i < 100 ; i++){
	 circle[i] = new Circle() ; 
	}
	let apple = createDiv("CLICK & MAKE RANDOM DOT")
	apple.style("font-size","50PX")
	apple.center();
}	
 

 function mousePressed(){
 	//make radnom dot
 	let b = new Circle2();
 	circle.push(b);

 }




function draw() {
	//bg 
	background(160,60,60);
	//ellipse
	for( let i = 0 ; i < circle.length ; i++){
	circle[i].show();
	circle[i].move();
	}
	for( let i = 0 ; i < circle2.length ; i++){
	circle2[i].show();
	circle2[i].move();
	}

}

function Circle () {
	this.x = random(0,width) ; 
	this.y = random(0,height);
	this.r = 10 ;


	this.move=function (){
		this.x +=  random(-1,1);
		this.y +=  random(-1,1);
	}

	this.show = function (){
		noStroke();
		fill(150,250,90);		
		ellipse(this.x,this.y,this.r,this.r);
	}

}

function Circle2 () {
	this.x = random(0,width) ; 
	this.y = random(0,height);
	this.r = 10 ;


	this.move=function (){
		this.x +=  random(-1,1);
		this.y +=  random(-1,1);
	}

	this.show = function (){
		noStroke();
		fill(0);		
		ellipse(this.x,this.y,this.r,this.r);
	}

}

