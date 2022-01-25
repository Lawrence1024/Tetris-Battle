function CountDown(){
	var _this=this;
	this.elem=
		$("<img></img>")
			.attr({"id":"countDown","src":"3.png"})
			.css({"position":"absolute","width":400,"height":400,"display":"block",
					"zIndex":10,"left":650,"top":280});
	this.doCountDown=function(){
		setTimeout(function(){
			_this.elem[0].src="2.png";
		},1000);
		setTimeout(function(){
			_this.elem[0].src="1.png";
		},2000);
		setTimeout(function(){
			_this.elem[0].style.display="none";
		},3000);
	}	
	$("body").append(this.elem);
}