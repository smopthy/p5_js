
let cols = 10 ; 

let raws = 10 ;

let colors = [] ; 

function setup () {
	createCanvas(310,310); 

} 


function draw(){
	background(150);

	for(let i=0 ; i < cols ; i++ ){
		colors[i] = [] ; 
		for( let j = 0 ; j < raws ; j++) {

			colors[i][j] = radom(255);
		} 
	}

	for( let i=0 ; i < cols ; i++) {
		for ( let j = 0 ; j < raws ; j++ ){
			x = i * 30 ;
			y = j * 30 ;

			fill(colors[i][j]);
			rect(x , y , 30 ,30 )
		}



	}
}
