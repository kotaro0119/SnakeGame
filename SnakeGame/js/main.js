ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2,canv.height/2, 20,20);


setInterval(function(){
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canv.width,canv.height);


  ctx.fillStyle = "lime";
  px += xd;
  py += yd;
  snake.push({x:px,y:py});
  for(let i=0; i<snake.length-1;i++){
        ctx.fillRect(snake[i].x*SIZE,snake[i].y*SIZE, SIZE-2,SIZE-2);
        if(snake[i].x == px && snake[i].y == py){
          tail = MIN;
        }
  }
  while(snake.length > tail){
    snake.shift();
  }
  if(appleX == px && appleY == py){
    tail++;
    score++;
    appleX = Math.floor(Math.random()*canv.width/SIZE);
    appleY = Math.floor(Math.random()*canv.height/SIZE);
  }
  ctx.fillStyle = "red";
  ctx.fillRect(appleX*SIZE,appleY*SIZE, SIZE-2,SIZE-2);

  while(snake.length > tail){
    snake.shift();
  }
  if(inoshishiX == px && inoshishiY == py){
    tail = tail + 3;
    score = score + 3;
    inoshishiX = Math.floor(Math.random()*canv.width/SIZE);
    inoshishiY = Math.floor(Math.random()*canv.height/SIZE);
  }
  ctx.fillStyle = "orange";
  ctx.fillRect(inoshishiX*SIZE,inoshishiY*SIZE, SIZE-2,SIZE-2);

  while(snake.length > tail){
    snake.shift();
  }
  if(outX == px && outY == py){
    alert("Game Over");
    tail = 0;
    score = 0;
    outX = Math.floor(Math.random()*canv.width/SIZE);
    outY = Math.floor(Math.random()*canv.height/SIZE);
  }
  ctx.fillStyle = "blue";
  ctx.fillRect(outX*SIZE,outY*SIZE, SIZE-2,SIZE-2);
  ctx.font = "16px Arial";
      ctx.fillStyle = "white";
      ctx.fillText("Score: "+score, 8, 20);
},1000/FPS);
