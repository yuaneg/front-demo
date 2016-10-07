function is_mobile(){
	var userAgent = navigator.userAgent;
	var i = userAgent.indexOf("Mobile");
	return i >= 0 ? true : false;
}

if(is_mobile()){
	window.location.href = window.location.href.replace(".html","Mobile.html");
}	


