var WINDOW_WIDTH = window.innerWidth;
var WINDOW_HEIGHT = window.innerHeight-100;
//圆的半径
var RADIUS = 8;
var canvas = document.getElementById('canvasCountDown');
var context = canvas.getContext('2d');
canvas.height = WINDOW_HEIGHT;
canvas.width = WINDOW_WIDTH;

//小球颜色常量常量
var BALL_COLOR = ['#E6421A','#74BB44','#BB44BB','#3CC4C4','#22DD6D','#A25E87'];
var balls = [];

var date = new Date();
var fhourVa = parseInt(date.getHours()/10);
var shourVa = date.getHours()%10;
var fminuteVa = parseInt(date.getMinutes()/10);
var sminuteVa = date.getMinutes()%10;
var fsecondVa = parseInt(date.getSeconds()/10);
var ssecondVa = date.getSeconds()%10;

window.onload = function(){
	setInterval(function(){
		update();
		console.log(balls.length);
	},10)
}

function update(){
	timeUpdate();
	
	drawBall(context,balls,RADIUS);
	
}


/**
 * 更新时间
 */
function timeUpdate(){	
	
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
	
	
	//判断时间是否变动进行绘制小球变化
	if(fhourVa != fhour){
		addBalls(0,0,fhour,RADIUS,1);
		fhourVa = fhour;
	}
	if(shourVa != shour){
		addBalls(newrelax,0,shour,RADIUS,1);
		shourVa = shour;
	}
	if(fminute != fminuteVa){
		addBalls(newrelax*3,0,fminute,RADIUS,1);
		fminuteVa = fminute;
	}
	if(sminute != sminuteVa){
		addBalls(newrelax*4,0,sminute,RADIUS,1);
		 sminuteVa = sminute
	}
	if(fsecond != fsecondVa){
		addBalls(newrelax*6,0,fsecond,RADIUS,1);
		fsecondVa = fsecond
	}
	if(ssecond != ssecondVa){
		addBalls(newrelax*7,0,ssecond,RADIUS,1);
		ssecondVa = ssecond
	}
}


/**
 * 画点阵图
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


function getballColor(){
	//产生随机数
	var colorindex = Math.random()*BALL_COLOR.length;
	//取出随机颜色
	return BALL_COLOR[parseInt(colorindex)];
}

/**
 * 添加小球
 * @param {Object} x
 * @param {Object} y
 * @param {Object} num
 * @param {Object} radius
 * @param {Object} relax
 */
function addBalls(x,y,num,radius,relax){
	var ball;
	for(var i = 0;i<digit[num].length;i++){
		for(var j = 0;j<digit[num][i].length;j++){
			if(digit[num][i][j] == 0){
				continue;
			}
			var color = getballColor();
			ball = {"x":(j+1)*(radius+relax)*2+x,
					"y":(i+1)*(radius+relax)*2+y,
					"vx":-Math.random()*10,
					"vy":-Math.random()*10,
					"g":Math.random(),
					"color":color};
			balls.push(ball);
		}
	}
}


/**
 * 绘制小球
 * @param {Object} context
 * @param {Object} balls
 */
function drawBall(context,balls,radius){
	for(var i= 0;i<balls.length;i++){
		context.beginPath();
		context.arc(balls[i].x,balls[i].y,radius,0,Math.PI*2);
		context.fillStyle = balls[i].color;
		context.fill();
		context.closePath();
	}
	updateBalls();
}

/**
 * 更新小球状态
 */
function updateBalls(){
	for(var i= 0;i<balls.length;i++){
		balls[i].x += balls[i].vx;
		balls[i].y += balls[i].vy;
		balls[i].vy += balls[i].g;
		//Y轴进行碰撞检测
		if(balls[i].y + RADIUS >= canvas.height ){
			balls[i].vy = -balls[i].vy*0.5;
		}
		//x轴检测移除小球
		if(balls[i].x < 0 || balls[i].x > canvas.width){
			balls.splice(i,1);
		}
	}
}
