canvas = document.getElementById('myCanvas');
canvas.width = 1024;
canvas.height = 576;
ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.fillRect(0, 0, canvas.width, canvas.height);


function renderGame () {
  window.requestAnimationFrame(renderGame);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.draw();
}
renderGame();
