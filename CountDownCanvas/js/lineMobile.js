var canvas = document.getElementById("canvasId");
var context = canvas.getContext('2d');
var width = window.innerWidth;
var height = window.innerHeight
canvas.width = width;
canvas.height = height;
//定义起止点
context.beginPath();
context.moveTo(30,30);
context.lineTo(30,300);
context.lineTo(270,300);
context.lineTo(30,30);
//填充属性
context.fillStyle = 'green';
//当进行填充时会默认进行收尾相连
context.fill();
//线条属性不能加px
context.lineWidth = 5;
context.strokeStyle = 'red';
//绘制直线
context.stroke();
context.closePath();

//开始重新定义canvas的状态 (必须重新定义beginPath 不然上面的context中的状态不会被清空)
//中位线
context.beginPath();
context.moveTo(30,300);
context.lineTo(150,165);
context.lineWidth = 5;
context.strokeStyle ='pink';
context.stroke();
context.closePath();
