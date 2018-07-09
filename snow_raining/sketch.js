
let particle = [] ; 

function setup() {
	createCanvas(windowWidth, windowHeight);


	// particle[0]= new Particel
	// particle[0] = new Particle (); 
	// particle[1] = new Particle (100,60);
	// let v = createVector(250 ,200) ;
	// particle[2] = new Particle (v) ;
	// particle[3] = new Particle("200,300"); 
	 
	for (let i =0 ; i < 500 ; i++){
	 let x = random(width);
	 let y = random(height); 
	 let v = createVector(x , y ) ;
     particle[i] = new  Particle(v);	
     
     }

	apple = createDiv("Happy birth Day ");
	// apple.id('pei');
	// apple.position(width/2 ,height/2);
	apple.style('color','#cc99ff')
	apple.style('text-align:center');
	apple.style('font-size','100px');
	apple.style('font-family','Lucida Console, Courier, monospace');
	apple.center();
	
	emily = createDiv("to Emily");
	emily.style("'color','#cc99ff'") ; 
	emily.style('text-align:center');
     

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
   for (let i =0 ; i < 500 ; i++){
	 let x = random(width);
	 let y = random(height); 
	 let v = createVector(x , y ) ;
     particle[i] = new  Particle(v);	
     
     }
     apple.center();
}


function draw() {
	background(255, 102, 180);

	for ( i=0 ; i <particle.length ; i++){
		particle[i].show() ;
		particle[i].move() ;
	}




	// // apple.textFont(fontBold);

	// apple.center();		
}


function Particle (posx , posy) {
	// this.pos = createVector(width/2 ,height/2) ;

	if (posx instanceof p5.Vector ) {
		this.x = posx.x ; 
		this.y = posx.y ;
	}else if ( typeof(posx) ===  "string" ){
		let num = posx.split(",") ;
		 this.x = Number(num[0] ) ;
		 this.y = Number(num[1] ) ;
	} 

	else {
		this.x = posx || 100 ;
		this.y = posy || 200 ;;

	}


	this.move = function () {
		let speedy = random(-1,3);

 		let speedx = random(-0.5,0.5,);
		this.x = this.x +speedx ;
		this.y = this.y + speedy ; 

		if (this.y >windowHeight ){
			this.y = 0
		}
	}

	this.show = function (){ 
		fill(255, 255, 51,100);
		noStroke();

		ellipse(this.x,this.y,10,10);
	}


}







// function sum (arr ){ 

// 	if (arr instanceof Array ) {
// 	let val = 0 ;
// 	// console.log(arguments);

// 	for (i =0 ; i <arr.length ; i++ ){
// 		val += arr[i]
// 	}
// 	return val ;
// 	}

// 	let val = 0 ;
// 	// console.log(arguments);

// 	for (i =0 ; i <arguments.length ; i++ ){
// 		val += arguments[i]
// 	}
// 	return val ;
// } 
 
// //course excercise : 
// // mix add arr , argument 

// note : 
// let a = new String ("APPLE")
// A instanceof String will be true 
// but  => a = "APPLE"  WILL BE FASE 
// 


