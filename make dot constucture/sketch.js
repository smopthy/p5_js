
// create mouseX , mouseY particle ;


let circle =[];  
let ciecle2 = [] ;

function setup() {
	createCanvas(windowWidth,windowHeight);
	//create by function construture
	for (let i = 0 ; i < 100 ; i++){
	 circle[i] = new Circle(100,100) ; 

	}
	let apple = createDiv("CLICK & MAKE DOT")
	apple.style("font-size","50px");
	apple.center();
}	
 
 function mousePressed(){
 	let b = new Circle2(mouseX ,mouseY);
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
}

function Circle (postx ,posty ) {
	this.x = postx; 
	this.y = posty;
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

function Circle2 (postx ,posty ) {
	this.x = postx; 
	this.y = posty;
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