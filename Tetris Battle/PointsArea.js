function PointsArea(background){
	var _this=this;
	this.background=background;
	this.wrapper=
		$("<div></div>")
			.attr({"id":"holder"})
			.css({"position":"absolute","backgroundColor":"rgb(120,120,120)","width":148
				,"height":198,"margin":1,"top":340,"left":5});
	this.pointsTitle=
		$("<div></div>")
			.attr({"id":"pointsTitle"})
			.html("POINT")
			.css({"position":"absolute","color":"black","width":148,"height":20
				,"margin":3,"top":310,"fontSize":50,"fontFamily":"Modak","left":7});
	this.score=
		$("<div></div>")
			.html(0)
			.css({"color":"black","fontSize":130,"fontFamily":"Modak","textAlign":"center","margin":"auto"});
	this.wrapper.append(this.score);
	this.background.wrapper.append(this.wrapper);
	this.background.wrapper.append(this.pointsTitle);
}