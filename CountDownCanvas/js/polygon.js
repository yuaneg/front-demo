var WINDOW_WIDTH = document.body.clientWidth
var WINDOW_HEIGHT = document.body.clientHeight;
//圆的半径
var RADIUS = WINDOW_WIDTH / 180;
var canvas = document.getElementById('polygon');
var context = canvas.getContext('2d');
canvas.height = WINDOW_HEIGHT;
canvas.width = WINDOW_WIDTH;
window.onload = function() {
	drawPolygon(200,200,50,100,"red",2);
}

function drawPolygon(x,y,r1,r2,color,lineWidt) {
	context.beginPath();
	//设置是个顶点的坐标，根据顶点制定路径   
	for(var i = 0; i < 5; i++) {
		context.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI) * r2 + x, -Math.sin((18 + i * 72) / 180 * Math.PI) * r2 + x);
		context.lineTo(Math.cos((54 + i * 72) / 180 * Math.PI) * r1 + y, -Math.sin((54 + i * 72) / 180 * Math.PI) * r1 + y);
	}
	context.closePath();
	//设置边框样式以及填充颜色   
	context.lineWidth = lineWidt;
	context.strokeStyle = color;
	context.fillStyle = color;
	context.fill();
	context.stroke();
}