function Bomb(pF,position){
	var _this=this;
	this.playField=pF;
	this.position=position;
	this.canvas=
		$("<canvas></canvas>")
			.attr({"width":45,"height":45})
			.css({"position":"absolute","backgroundColor":"rgb(30,30,30)"
					,"left":45*_this.position[0],"top":45*_this.position[1]});
			
	this.ctx=this.canvas[0].getContext("2d");
	/**drawBomb() draws out a bomb on canvas.
		input: the context of the canvas
		output: n/a
		other effects: bomb is drawn
	*/
	this.drawBomb = function(ctx){
		ctx.beginPath();
		ctx.strokeStyle="black";
		var grd = ctx.createRadialGradient(25, 10, 1, 25, 10, 15);
		grd.addColorStop(0, "white");
		grd.addColorStop(1, "red");
		ctx.beginPath();
		ctx.arc(18,18, 18, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fillStyle = grd;
		ctx.fill();
		ctx.beginPath();
		ctx.rotate(-25* Math.PI / 180);
		ctx.fillRect(26, 20, 5, 8);
		ctx.strokeRect(26, 20, 5, 8);
		ctx.rotate((25* Math.PI / 180));
	}
	
	this.drawBomb(this.ctx);
	
	_this.playField.wrapper.append(this.canvas);
}