var WINDOW_WIDTH = document.body.offsetWidth;
var WINDOW_HEIGHT = 600;
//圆的半径
var RADIUS = 8;

var canvas = document.getElementById('canvasCountDown');
var context = canvas.getContext('2d');
canvas.height = WINDOW_HEIGHT;
canvas.width = WINDOW_WIDTH;

window.onload = function(){
	setInterval(function(){
		update();	
	},1000)
}

function update(){	
	
	context.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);
	var date = new Date();	
	var fhour = parseInt(date.getHours()/10);
	var shour = date.getHours()%10;
	var fminute = parseInt(date.getMinutes()/10);
	var sminute = date.getMinutes()%10;
	var fsecond = parseInt(date.getSeconds()/10);
	var ssecond = date.getSeconds()%10;

	var newrelax = digit[0][0].length*RADIUS*3

	
	//进行时间绘制
	//小时
	render(0,0,fhour,context,RADIUS,"pink",1);
	render(newrelax,0,shour,context,RADIUS,"pink",1);
	//冒号
	render(newrelax*2,0,10,context,RADIUS,"pink",1);
	//分钟
	render(newrelax*3,0,fminute,context,RADIUS,"pink",1);
	render(newrelax*4,0,sminute,context,RADIUS,"pink",1);
	//冒号
	render(newrelax*5,0,10,context,RADIUS,"pink",1);
	//秒
	render(newrelax*6,0,fsecond,context,RADIUS,"pink",1);
	render(newrelax*7,0,ssecond,context,RADIUS,"pink",1);
	
}


/**
 * 画数字
 * @param {Object} x 起始坐标x
 * @param {Object} y 起始坐标Y
 * @param {Object} num 数字
 * @param {Object} context canvas环境
 * @param {Object} radius 半径
 * @param {Object} color 颜色
 * @param {Object} relax 松散度
 * return 间隔
 */
function render(x,y,num,context,radius,color,relax){
	for(var i = 0;i<digit[num].length;i++){
		for(var j = 0;j<digit[num][i].length;j++){
			if(digit[num][i][j] == 0){
				continue;
			}
			context.beginPath();
			context.arc((j+1)*(radius+relax)*2+x,(i+1)*(radius+relax)*2+y,radius,0,Math.PI*2);
			context.fillStyle = color;
			context.fill();
			context.closePath();
		}
	}
}


