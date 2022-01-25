var ID_COUNT=-1;
function Box(position,pF){
	var _this=this;
	ID_COUNT++;
	this.playField=pF;
	this.position=position;
	this.num=ID_COUNT;
	this.color="rgb(160,160,160)";
	this.elem=
		$("<div></div>")
			.attr({"id":"box"+ID_COUNT})
			.css({"position":"absolute","backgroundColor":"rgb(160,160,160)"
					,"width":parseFloat(this.playField.wrapper[0].style.width)/10
					,"height":parseFloat(this.playField.wrapper[0].style.height)/20
					,"left":this.position[0]*parseFloat(this.playField.wrapper[0].style.width)/10
					,"top":this.position[1]*parseFloat(this.playField.wrapper[0].style.height)/20
					,"border":"rgb(50,50,50) solid 1px"});
	
}