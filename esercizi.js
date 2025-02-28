//1) data una variabile che chiamata gridSize
//  disegnare una scacchiera di dimensioni gridSize * gridSize 
// 2)fate nevicare nella canvas
// 3) a) dei rettangoli di altezza uguale ad altezze diverse
// che si muovono verso destra a velocità diversa
// b) righe pari verso destra, righe dispari verso sinistra
// c)più rettangoli per riga

//esercizio 1 scacchiera

// let grid = [];
// let canvas;
// let ctx;
// let size; 

// function setUp(){
//     canvas = document.getElementById("my-canvas");
//     ctx = canvas.getContext("2d");
//     size = 7;
//     let incrementX = 0;
//      for (let row = 0; row < size; row++) {
      
//         let incrementY = 0;
        
//         for (let column = 0; column < size; column++) {
//             const rect = {};
//         rect.width = 600/size;
//         rect.height = 600/size;
//         rect.originX = incrementX;
//         rect.originY = incrementY ;
//         incrementY += 600/size;
//         grid.push(rect);
        
//         }
//        incrementX += 600/size;
//      }

//     console.log(grid)
// }
  
       
        

// function update() {
//     for (let i = 0; i < grid.length; i++) {
//         const rect = grid[i];
        
//     }

    

// }

// function draw(){
//     for (let i = 0; i < grid.length; i++) {
//         const rect = grid[i];
//         if(i % 2 === 0){
//              ctx.fillStyle = "black"
            
//         }else{
//             ctx.fillStyle = "white"
             
//         }
//         ctx.fillRect(rect.originX, rect.originY, rect.width, rect.height);
        
//     }
    
  
// }

// function gameLoop(elapsedTime){

//     update()

//     draw()

//     requestAnimationFrame(gameLoop)
// }

// function start(){
//     setUp()
//     requestAnimationFrame(gameLoop);
// }

// start()

//esercizio fiocchi

// let grid = [];
// let canvas;
// let ctx;
// let size; 

// function setUp(){
//     canvas = document.getElementById("my-canvas");
//     ctx = canvas.getContext("2d");
// }
  
       
        

// function update() {

    

// }

// function draw(){
    
  
// }

// function gameLoop(elapsedTime){

//     update()

//     draw()

//     requestAnimationFrame(gameLoop)
// }

// function start(){
//     setUp()
//     requestAnimationFrame(gameLoop);
// }

// start()

//esercizio 3 righe con quadrati moventi

let grid = [];
let canvas;
let ctx;
let size; 

function setUp(){
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext("2d");
    size = 7;
    let incrementX = 0;
     for (let row = 0; row < size; row++) {
      
        let incrementY = 0;
        
        for (let column = 0; column < size; column++) {
            const rect = {};
        rect.width = 600/size;
        rect.height = 600/size;
        rect.originX = incrementX;
        rect.originY = incrementY ;
        incrementY += 600/size;
        grid.push(rect);
        
        }
       incrementX += 600/size;
     }

    console.log(grid)
}
  
       
        

function update() {
    for (let i = 0; i < grid.length; i++) {
        const rect = grid[i];
        
    }

    

}

function draw(){
    for (let i = 0; i < grid.length; i++) {
        const rect = grid[i];
        if(i % 2 === 0){
             ctx.fillStyle = "black"
            
        }else{
            ctx.fillStyle = "white"
             
        }
        ctx.fillRect(rect.originX, rect.originY, rect.width, rect.height);
        
    }
    
  
}

function gameLoop(elapsedTime){

    update()

    draw()

    requestAnimationFrame(gameLoop)
}

function start(){
    setUp()
    requestAnimationFrame(gameLoop);
}

start()