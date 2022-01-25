function Wrapper(position,playerNum){
	var_this=this;
	this.position=position;
	this.playerNum=playerNum;
	this.wrapper=
		$("<div></div>")
			.attr({"id":"wrapper"})
			.css({"width":780,"height":950,"backgroundColor":"bisque","top":this.position[1],"left":this.position[0],"position":"absolute"});
	this.pointsArea=new PointsArea(this);
	this.nextBlockHolder=new NextBlockHolder(this);
	this.playField=new PlayField(this);
	this.holder=new Holder(this);
	this.timeArea=new TimeArea(this);
}