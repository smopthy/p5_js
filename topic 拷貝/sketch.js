let apples = [] ;
let apple ;

function setup() {
    createCanvas(400,400);
    background(150);

}


function mousePressed () {
        apple = createVector(mouseX,mouseY);
        apples.push(apple);

}

 
function draw () {

        let reach = [] ; 
        let unreach = [] ; 
        for(let  i= 0 ; i < apples.length ; i++){   
          unreach.push(apples[i])
        }

        reach.push(unreach[0]);
        unreach.splice(0,1) ;
        let rIndex = [] ; 
        let uIndex = [] ;
 
        while(unreach.length > 0 ){
          let record = 100000 ; 
            for(let i = 0 ; i < reach.length ; i++){
            for( let j = 0 ; j < unreach.length ; j++){
              let v1 = reach[i];
              let v2 = unreach[j];
              let d = dist(v1.x , v1.y , v2.x , v2.y)
              if (d < record ){
                record = d ;
                rIndex = i ;
                uIndex = j ;
              }
            } 
          }

        stroke(100);
        line(reach[rIndex].x , reach[rIndex].y , unreach[uIndex].x , unreach[uIndex].y);
        reach.push(unreach[uIndex]);
        unreach.splice(uIndex,1); 

        }

      for(i= 0 ; i < apples.length ; i++ ){
        ellipse(apples[i].x ,apples[i].y , 30 ,30 );  
      }
      

}


