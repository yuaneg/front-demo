yuaneg = [

	[
		[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1]

	],//袁
	[
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
		[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
		[0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0],
		[0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
		[1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0]
	],//恩
	[
		[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0],
		[0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
		[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
		[0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
		[0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
		[0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
		[0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
		[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0]

	]//光
]
var WINDOW_WIDTH = document.body.offsetWidth;
var WINDOW_HEIGHT = 600;
//圆的半径
var RADIUS = 8;

var canvas = document.getElementById('canvasCountDown');
var context = canvas.getContext('2d');
canvas.height = WINDOW_HEIGHT;
canvas.width = WINDOW_WIDTH;

var newrelax = render(0,0,0,context,RADIUS,"pink",1,yuaneg);
render(newrelax,0,1,context,RADIUS,"pink",1,yuaneg);
render(newrelax*2,0,2,context,RADIUS,"pink",1,yuaneg);

/**
 * 画数字
 * @param {Object} x 起始坐标x
 * @param {Object} y 起始坐标Y
 * @param {Object} num 数字
 * @param {Object} context canvas环境
 * @param {Object} radius 半径
 * @param {Object} color 颜色
 * @param {Object} relax 松散度
 * @param {type} digit 数组
 * return 间隔
 */
function render(x,y,num,context,radius,color,relax,digit){
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
	return digit[0][0].length*RADIUS*3;
}
