var Canvas=document.getElementById("canvas_blur");	
var context=Canvas.getContext("2d");
var height = window.innerHeight;
var width = window.innerWidth;
Canvas.height=height;
Canvas.width=width;
var bg=new Image();
var radio = 100;
bg.src="img/canvas_blur.bmp"
/**
 * 当图片加载完成时执行 绘画
 */
bg.onload = function () {
   draw(bg,radio);
};

/**
 * 绘制图片
 * @param {Object} img
 */
function draw(img,r){
	context.clearRect(0,0,Canvas.width,Canvas.height);
	context.save();
	settingClip(r);
	context.drawImage(img,0,0);
	context.restore();
}

/**
 * 设置剪辑区域
 * @param {Object} clipping
 */
function settingClip(r){
	context.beginPath();
	context.arc(Math.random()*600,Math.random()*800,r,0,Math.PI*2,false);
	context.clip();
}

/**
 * 重置
 */
function reset(){
	draw(bg,200);
}

/**
 * 显示
 */
function show(){
	draw(bg,1000);
}
