//1) data una variabile che chiamata gridSize
//  disegnare una scacchiera di dimensioni gridSize * gridSize 
// 2)fate nevicare nella canvas




        let entities = [];
        let canvas;
        let ctx;
        const crosses = 1000;

        function setUp() {
            canvas = document.getElementById('my-canvas');
            ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            for (let i = 0; i < crosses; i++) {
                let cross = {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    speedX: (Math.random() * 1) - 0.5,
                    speedY: (Math.random() * 2) + 1,
                    size: Math.random() * 5 + 2,
                    rotation: Math.random() * 2 * Math.PI,
                    rotationSpeed: (Math.random() * 0.02) - 0.01
                };
                entities.push(cross);
            }
        }

        function update() {
            for (let i = 0; i < entities.length; i++) {
                let cross = entities[i];
                cross.x += cross.speedX;
                cross.y += cross.speedY;
                cross.rotation += cross.rotationSpeed;

                if (cross.y > canvas.height) {
                    cross.x = Math.random() * canvas.width;
                    cross.y = 0;
                }

                if (cross.x < 0 || cross.x > canvas.width) {
                    cross.speedX *= -1;
                }
            }
        }

        function drawCross(x, y, size, rotation) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.beginPath();
            ctx.moveTo(-size / 2, 0);
            ctx.lineTo(size / 2, 0);
            ctx.moveTo(0, -size / 2);
            ctx.lineTo(0, size / 2);
            ctx.lineWidth = 2; 
            ctx.stroke();
            ctx.restore();
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < entities.length; i++) {
                let cross = entities[i];
                drawCross(cross.x, cross.y, cross.size, cross.rotation);
            }
        }

        function gameLoop() {
            update();
            draw();
            requestAnimationFrame(gameLoop);
        }

        function start() {
            setUp();
            requestAnimationFrame(gameLoop);
        }

        start();




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

// let grid = [];
// let canvas;
// let ctx;
// let size; 

// function setUp(){
//     canvas = document.getElementById("my-canvas");
//     ctx = canvas.getContext("2d");
//     size = 9;
    
//     for (let row = 0; row < size; row++) {
//         for (let col = 0; col < 8; col++) { 
//             const rect = {};
//             rect.width = Math.random() * 100 + 20; 
//             rect.height = (600 / size)- 10; 
//             rect.originX = Math.random() * 600; 
//             rect.originY = row * 600 / size; 
//             rect.speed = Math.random() * 2 + 1; 
//             rect.direction = row % 2 === 0 ? 1 : -1; 

//             grid.push(rect);
//         }
//     }

//     console.log(grid);
// }

// function update() {
//     for (let i = 0; i < grid.length; i++) {
//         const rect = grid[i];
//         rect.originX += rect.speed * rect.direction;

        
//         if (rect.originX > 600) {
//             rect.originX = -rect.width;
//         } else if (rect.originX < -rect.width) {
//             rect.originX = 600;
//         }
//     }
// }

// function draw(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height); 
//     for (let i = 0; i < grid.length; i++) {
//         const rect = grid[i];
//         ctx.fillStyle = "black";
//         ctx.fillRect(rect.originX, rect.originY, rect.width, rect.height);
//     }
// }

// function gameLoop(elapsedTime){
//     update();
//     draw();
//     requestAnimationFrame(gameLoop);
// }

// function start(){
//     setUp();
//     requestAnimationFrame(gameLoop);
// }

// start();

