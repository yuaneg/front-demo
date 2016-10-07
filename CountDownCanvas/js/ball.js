var canvas = document.getElementById('ballCanvas');
var context = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

//定义小球 起始x ,y, vx:x轴速度,vy y轴速度,g加速度 ,颜色
var ball = {x:20,y:20,r:20,vx:10,vy:5,g:5,col:'red'};

window.onload = function(){
	
	setInterval(function(){
		updateBall();
		drawBall();
	},100)
	
}

function updateBall(){
	ball.x += ball.vx;
	ball.y += ball.vy;
	ball.vy += ball.g;
	if(ball.y+ball.r >= canvas.height || ball.y-ball.r <= 0){	
		ball.y = canvas.height - ball.r
		ball.vy = -(ball.vy-ball.g)*0.5;
		if(Math.abs(ball.vy) < 4){
			ball.vy = 0;
		}
	}	
	if(ball.x+ball.r >= canvas.width || ball.x-ball.r <= 0){	
		ball.vx = -ball.vx*0.5;
	}
}

/**
 * 绘制小球
 * @param {Object} ball
 */
function drawBall(){
	context.clearRect(0,0,canvas.width,canvas.height);
	context.beginPath();
	context.arc(ball.x,ball.y,ball.r,0,Math.PI*2);
	context.fillStyle = ball.col;
	context.fill();
	context.closePath();
}
