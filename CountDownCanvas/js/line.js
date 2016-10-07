var canvas = document.getElementById("canvasId");
var context = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;
//定义起止点
context.beginPath();
context.moveTo(50,50);
context.lineTo(50,500);
context.lineTo(450,500);
context.lineTo(50,50);
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
context.moveTo(50,500);
context.lineTo(250,275);
context.lineWidth = 5;
context.strokeStyle ='pink';
context.stroke();
context.closePath();
