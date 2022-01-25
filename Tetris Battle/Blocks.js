var Blocks_ID_COUNT=-1
function Blocks (type,size,center,relativePosition,pF,cP,){
	var _this = this;
	Blocks_ID_COUNT++;
	this.type = type;
	this.size = size;
	this.center=center;
	this.relativePosition=relativePosition;
	this.playField=pF;
	this.id=this.type+Blocks_ID_COUNT;
	this.centerPosition=cP;
	this.bottom=false;
	this.left=false;
	this.right=false;
	this.rot=false;
	this.shifting=false;
	this.ifSink=false;
	
	this.draw = function(){
		for(var i=0;i<this.relativePosition.length;i++){
			this.playField.boxes[(this.centerPosition[0]+this.centerPosition[1]*10)+(this.relativePosition[i][0]+this.relativePosition[i][1]*10)].elem[0].style.backgroundColor="green";
			this.playField.boxes[(this.centerPosition[0]+this.centerPosition[1]*10)+(this.relativePosition[i][0]+this.relativePosition[i][1]*10)].color="green";
		}
		if(this.shifting){
			this.bottom=this.checkIfCollideBottom;
			this.shifting=false;
		}
	}
	
	this.fall=function(){
		this.moveDown(1);
		if(_this.bottom){
			if(_this.shift){
				_this.shift=false;
			}else{
				for(var i=0;i<_this.relativePosition.length;i++){
					_this.playField.occupiedPosition.push([(_this.centerPosition[0]+_this.relativePosition[i][0]),(_this.centerPosition[1]+_this.relativePosition[i][1])]);
				}
				_this.bottom=true;
			}
		}else{
			this.bottom=false;
		}
		return this.bottom;
	}
	this.checkIfCollideBottom=function(){
		for(var i=0;i<this.playField.occupiedPosition.length;i++){
			for(var k=0;k<_this.relativePosition.length;k++){
				if(this.playField.occupiedPosition[i].join()==[(this.centerPosition[0]+this.relativePosition[k][0]),(this.centerPosition[1]+this.relativePosition[k][1])+1].join()){
					return true;
				}
			}
		}
		return false;
	}
	
	this.moveDown=function(moveDownUnit){
		this.bottom=_this.checkIfCollideBottom();
		if(this.bottom){
			
		}else{
			for(var i=0;i<_this.relativePosition.length;i++){
				this.playField.boxes[(this.centerPosition[0]+this.centerPosition[1]*10)+(this.relativePosition[i][0]+this.relativePosition[i][1]*10)].elem[0].style.backgroundColor="rgb(160,160,160)";
				this.playField.boxes[(this.centerPosition[0]+this.centerPosition[1]*10)+(this.relativePosition[i][0]+this.relativePosition[i][1]*10)].color="rgb(160,160,160)";
			}	
			this.centerPosition[1]=this.centerPosition[1]+moveDownUnit;
			this.draw();
		}
	}
	
	this.checkIfCollideLeft=function(){
		for(var i=0;i<this.playField.occupiedPosition.length;i++){
			for(var k=0;k<_this.relativePosition.length;k++){
				if(this.playField.occupiedPosition[i].join()==[(this.centerPosition[0]+this.relativePosition[k][0]-1),(this.centerPosition[1]+this.relativePosition[k][1])].join()){
					return true;
				}
			}
		}
		return false;
	}
	
	this.moveLeft=function(){
		if(this.ifSink){
			
		}else{
			this.left=_this.checkIfCollideLeft();
			if(this.left){
				
			}else{
				this.eraseGuideLine();
				for(var i=0;i<_this.relativePosition.length;i++){
					this.playField.boxes[(this.centerPosition[0]+this.centerPosition[1]*10)+(this.relativePosition[i][0]+this.relativePosition[i][1]*10)].elem[0].style.backgroundColor="rgb(160,160,160)";
					this.playField.boxes[(this.centerPosition[0]+this.centerPosition[1]*10)+(this.relativePosition[i][0]+this.relativePosition[i][1]*10)].color="rgb(160,160,160)";
				}
				this.centerPosition[0]=this.centerPosition[0]-1;
				this.draw();
				this.createGuideLine();
			}
		}
	}
	
	this.checkIfCollideRight=function(){
		for(var i=0;i<this.playField.occupiedPosition.length;i++){
			for(var k=0;k<_this.relativePosition.length;k++){
				if(this.playField.occupiedPosition[i].join()==[(this.centerPosition[0]+this.relativePosition[k][0]+1),(this.centerPosition[1]+this.relativePosition[k][1])].join()){
					return true;
				}
			}
		}
		return false;
	}
	
	this.moveRight=function(){
		if(this.ifSink){
			
		}else{
			this.right=_this.checkIfCollideRight();
			if(_this.right){
				
			}else{
				this.eraseGuideLine();
				for(var i=0;i<_this.relativePosition.length;i++){
					this.playField.boxes[(this.centerPosition[0]+this.centerPosition[1]*10)+(this.relativePosition[i][0]+this.relativePosition[i][1]*10)].elem[0].style.backgroundColor="rgb(160,160,160)";
					this.playField.boxes[(this.centerPosition[0]+this.centerPosition[1]*10)+(this.relativePosition[i][0]+this.relativePosition[i][1]*10)].color="rgb(160,160,160)";
				}				
				this.centerPosition[0]=this.centerPosition[0]+1;
				this.draw();
				this.createGuideLine();
			}
		}
	}
	
	this.checkIfCollideRotate=function(){
		var tempPostitions=[];
		for(var i=0;i<relativePosition.length;i++){
			var x=relativePosition[i][0];
			var y=relativePosition[i][1];
			tempPostitions.push([-y+this.centerPosition[0],x+this.centerPosition[1]]);
		}
		for(var i=0;i<this.playField.occupiedPosition.length;i++){
			for(var k=0;k<tempPostitions.length;k++){
				if(this.playField.occupiedPosition[i].join()==tempPostitions[k].join()){
					return true;
				}
			}
		}
		return false;
	}
	
	this.rotate=function(){
		if(this.ifSink){
			
		}else{
			this.rot=this.checkIfCollideRotate();
			if(this.rot){
				
			}else{
				this.eraseGuideLine();
				for(var i=0;i<this.relativePosition.length;i++){
					this.playField.boxes[(this.centerPosition[0]+this.centerPosition[1]*10)+(this.relativePosition[i][0]+this.relativePosition[i][1]*10)].elem[0].style.backgroundColor="rgb(160,160,160)";
					this.playField.boxes[(this.centerPosition[0]+this.centerPosition[1]*10)+(this.relativePosition[i][0]+this.relativePosition[i][1]*10)].color="rgb(160,160,160)";
				}
				for(var i=0;i<relativePosition.length;i++){
					var x=relativePosition[i][0];
					var y=relativePosition[i][1];
					relativePosition[i]=[-y,x];
				}
				this.draw();
				this.createGuideLine();
			}
		}
	}
	
	this.checkIfShifting=function(){
		if(this.bottom&&this.shifting){
			return true;
		}
		return false;
	}
	
	this.sink=function(){
		var num=this.getSinkNumber();
		this.moveDown(num);
		this.ifSink=true;
	}
	this.getSinkNumber=function(){
		var shouldBreak=false;
		for(var k=0;k<22;k++){
			for(var i=0;i<this.playField.occupiedPosition.length;i++){
				for(var j=0;j<_this.relativePosition.length;j++){
					if(this.playField.occupiedPosition[i].join()==[(this.centerPosition[0]+this.relativePosition[j][0]),(this.centerPosition[1]+this.relativePosition[j][1])+k].join()){
						shouldBreak=true;
					}
				}
			}
			if(shouldBreak){break};
		}
		return (k-1);
	}
	
	this.createGuideLine=function(){
		var num=this.getSinkNumber();
		this.bottom=_this.checkIfCollideBottom();
		if(this.bottom){
			
		}else{
			var y=this.centerPosition[1]+num;
			for(var i=0;i<_this.relativePosition.length;i++){
				this.playField.boxes[(this.centerPosition[0]+y*10)+(this.relativePosition[i][0]+this.relativePosition[i][1]*10)].elem[0].style.backgroundColor="rgb(230,230,230)";
			}
		}
	}
	
	this.eraseGuideLine=function(){
		var num=this.getSinkNumber();
		this.bottom=_this.checkIfCollideBottom();
		if(this.bottom){
			
		}else{
			var y=this.centerPosition[1]+num;
			for(var i=0;i<_this.relativePosition.length;i++){
				this.playField.boxes[(this.centerPosition[0]+y*10)+(this.relativePosition[i][0]+this.relativePosition[i][1]*10)].elem[0].style.backgroundColor="rgb(160,160,160)";
			}
		}
	}
	
	this.eraseSelf=function(){
		for(var i=0;i<_this.relativePosition.length;i++){
				this.playField.boxes[(this.centerPosition[0]+this.centerPosition[1]*10)+(this.relativePosition[i][0]+this.relativePosition[i][1]*10)].elem[0].style.backgroundColor="rgb(160,160,160)";
				this.playField.boxes[(this.centerPosition[0]+this.centerPosition[1]*10)+(this.relativePosition[i][0]+this.relativePosition[i][1]*10)].color="rgb(160,160,160)";
		}
	}
}









