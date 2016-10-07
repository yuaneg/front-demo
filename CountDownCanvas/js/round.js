var canvas = document.getElementById('roundCanvas');
var context = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 500;
//context.beginPath();
//画弧线  x:,y: 起止点  r:半径   起点弧度  终点弧度
/*context.arc(100,100,50,0,Math.PI*2);
context.fillStyle = "red"
context.fill();
context.closePath();*/


for(var i= 1 ;i < 10;i++){
	context.beginPath();
	context.arc(100*i,100,30,0,Math.PI*i*0.3);
	context.fillStyle = "red"
	context.fill();
	context.closePath();
	
}

for(var i= 1 ;i < 10;i++){
	context.beginPath();
	context.arc(100*i,200,30,0,Math.PI*i*0.3,true);
	context.fillStyle = "red"
	context.fill();
	context.closePath();
}

for(var i= 1 ;i < 10;i++){
	context.beginPath();
	context.arc(100*i,300,30,0,Math.PI*i*0.3);
	context.stroke();
}

for(var i= 1 ;i < 10;i++){
	context.beginPath();
	context.arc(100*i,400,30,0,Math.PI*i*0.3,true);
	context.closePath();
	context.stroke();
	
}
