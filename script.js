const canvas = document.getElementById('my-canvas');

const ctx = canvas.getContext('2d');


function drawInvertedTriangle(x, y, size, color) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - size / 2, y + size);
    ctx.lineTo(x + size / 2, y + size);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }
  
  let yPosition = canvas.height;
  
  
  setInterval(() => {
    ctx.fillStyle = 'rgba(106, 100, 100, 0.05)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    const colors = ['white', 'gray', 'beige'];
    const sizes = [200, 200, 200];
    const baseYPosition = canvas.height / 3 - 100; 
  
    for (let i = 0; i < 3; i++) {
      drawInvertedTriangle(canvas.width / 2, baseYPosition + (i * 100), sizes[i], colors[i]);
    }
  
  }, 500);

