function Holder(background){
	var _this=this;
	this.background=background;
	this.wrapper=
		$("<div></div>")
			.attr({"id":"holder"})
			.css({"position":"absolute","backgroundColor":"rgb(120,120,120)","width":148
				,"height":198,"margin":1,"top":40,"left":5});
	this.holderTitle=
		$("<div></div>")
			.attr({"id":"holderTitle"})
			.html("HOLD")
			.css({"position":"absolute","color":"black","width":148,"height":20
				,"margin":3,"top":-10,"fontSize":60,"fontFamily":"Modak","left":5});
	this.canvas1Holder=
		$("<canvas></canvas>")
			.attr({"width":250,"height":250,"class":"canvas"})
	
	this.blocksCanvas=new BlocksCanvas();
	
	this.drawHolder=function(type){
		this.blocksCanvas.clearCanvas(this.canvas1Holder[0].getContext("2d"));
		if(type=="T_Block"){
			this.blocksCanvas.drawTBlock(this.canvas1Holder[0].getContext("2d"));
		}else if(type=="I_Block"){
			this.blocksCanvas.drawIBlock(this.canvas1Holder[0].getContext("2d"));
		}else if(type=="J_Block"){
			this.blocksCanvas.drawJBlock(this.canvas1Holder[0].getContext("2d"));
		}else if(type=="L_Block"){
			this.blocksCanvas.drawLBlock(this.canvas1Holder[0].getContext("2d"));
		}else if(type=="Z_Block"){
			this.blocksCanvas.drawZBlock(this.canvas1Holder[0].getContext("2d"));
		}else if(type=="S_Block"){
			this.blocksCanvas.drawSBlock(this.canvas1Holder[0].getContext("2d"));
		}else if(type=="O_Block"){
			this.blocksCanvas.drawOBlock(this.canvas1Holder[0].getContext("2d"));
		}
	}
	this.clearCanvas=function(){
		this.blocksCanvas.clearCanvas(this.canvas1Holder[0].getContext("2d"));
	}
	
	this.wrapper.append(this.canvas1Holder[0]);
	this.background.wrapper.append(this.wrapper);
	this.background.wrapper.append(this.holderTitle);
}





