function GameOverWord(){
	var _this=this;
	this.elem=
		$("<div></div>")
			.attr({"id":"gameOverWordElem"})
			.html("Game Over")
			.css({"fontFamily":"arial","fontSize":300,"color":"yellow",
					"position":"absolute","top":250,"left":300,"opacity":0.5});
	$("body").append(this.elem);
}