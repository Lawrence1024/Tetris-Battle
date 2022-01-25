function J_Block(){
	Blocks.apply(this,arguments);
	var _this=this;
	this.draw = function(){
		for(var i=0;i<this.relativePosition.length;i++){
			this.playField.boxes[(this.centerPosition[0]+this.centerPosition[1]*10)+(this.relativePosition[i][0]+this.relativePosition[i][1]*10)].elem[0].style.backgroundColor="blue";
			this.playField.boxes[(this.centerPosition[0]+this.centerPosition[1]*10)+(this.relativePosition[i][0]+this.relativePosition[i][1]*10)].color="blue";
		}
	}
}