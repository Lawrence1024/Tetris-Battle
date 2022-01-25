function Deco (DecoObject,x,y,xSpd,ySpd){
	var _this = this;
	this.DecoObject = DecoObject;
	this.x = x;
	this.y = y;
	this.xSpd = xSpd;
	this.ySpd = ySpd;
	this.radius = 20;
	this.size = 40;

	this.drawLBlock = function(ctx){	
		ctx.translate(this.x,this.y);
		ctx.beginPath();				
		ctx.strokeStyle="black";
		ctx.fillStyle = "orange";
		ctx.fillRect(0,0,40,40);
		ctx.strokeRect(0,0,40,40);
		ctx.fillRect(0,40,40,40);
		ctx.strokeRect(0,40,40,40);
		ctx.fillRect(0,80,40,40);
		ctx.strokeRect(0,80,40,40);
		ctx.fillRect(40,80,40,40);
		ctx.strokeRect(40,80,40,40);
		ctx.translate(-this.x,-this.y);
		this.x += this.xSpd;
		this.y += this.ySpd;
		if(this.x < 0 || this.x > 900 - this.size*2){
				this.xSpd = -this.xSpd;
		}else if(this.y < 0 || this.y > 700 - this.size*3){
				this.ySpd = -this.ySpd;						
		}
	}
	this.drawIBlock = function(ctx){
		ctx.translate(this.x,this.y);	
		ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.fillStyle = "lightblue";
		ctx.fillRect(0,0,40,40);
		ctx.strokeRect(0,0,40,40);
		ctx.fillRect(0,40,40,40);
		ctx.strokeRect(0,40,40,40);
		ctx.fillRect(0,80,40,40);
		ctx.strokeRect(0,80,40,40);
		ctx.fillRect(0,120,40,40);
		ctx.strokeRect(0,120,40,40);
		ctx.translate(-this.x,-this.y);
		this.x += this.xSpd;
		this.y += this.ySpd;
		if(this.x < 0 || this.x > 900 - this.size){
				this.xSpd = -this.xSpd;
		}else if(this.y < 0 || this.y > 700 - this.size*4){
				this.ySpd = -this.ySpd;						
		}
	}
	this.drawTBlock = function (ctx){
		ctx.translate(this.x,this.y);	
		ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.fillStyle = "pink";
		ctx.fillRect(40,0,40,40);
		ctx.strokeRect(40,0,40,40);
		ctx.fillRect(0,40,40,40);
		ctx.strokeRect(0,40,40,40);
		ctx.fillRect(40,40,40,40);
		ctx.strokeRect(40,40,40,40);
		ctx.fillRect(80,40,40,40);
		ctx.strokeRect(80,40,40,40);
		ctx.translate(-this.x,-this.y);
		this.x += this.xSpd;
		this.y += this.ySpd;
		if(this.x < 0 || this.x > 900 - this.size*3){
				this.xSpd = -this.xSpd;
		}else if(this.y < 0 || this.y > 700 - this.size*2){
				this.ySpd = -this.ySpd;						
		}
	}
	this.drawSBlock = function (ctx){
		ctx.translate(this.x,this.y);	
		ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.fillStyle = "lightgreen";
		ctx.fillRect(40,0,40,40);
		ctx.strokeRect(40,0,40,40);
		ctx.fillRect(80,0,40,40);
		ctx.strokeRect(80,0,40,40);
		ctx.fillRect(0,40,40,40);
		ctx.strokeRect(0,40,40,40);
		ctx.fillRect(40,40,40,40);
		ctx.strokeRect(40,40,40,40);
		ctx.translate(-this.x,-this.y);
		this.x += this.xSpd;
		this.y += this.ySpd;
		if(this.x < 0 || this.x > 900 - this.size*3){
				this.xSpd = -this.xSpd;
		}else if(this.y < 0 || this.y > 700 - this.size*2){
				this.ySpd = -this.ySpd;						
		}
	}
	this.drawZBlock = function (ctx){
		ctx.translate(this.x,this.y);
		ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.fillStyle = "red";
		ctx.fillRect(0,0,40,40);
		ctx.strokeRect(0,0,40,40);
		ctx.fillRect(40,40,40,40);
		ctx.strokeRect(40,40,40,40);
		ctx.fillRect(40,0,40,40);
		ctx.strokeRect(40,0,40,40);
		ctx.fillRect(80,40,40,40);
		ctx.strokeRect(80,40,40,40);
		ctx.translate(-this.x,-this.y);
		this.x += this.xSpd;
		this.y += this.ySpd;
		if(this.x < 0 || this.x > 900 - this.size*3){
				this.xSpd = -this.xSpd;
		}else if(this.y < 0 || this.y > 700 - this.size*2){
				this.ySpd = -this.ySpd;						
		}
	}
	this.drawOBlock = function (ctx){
		ctx.translate(this.x,this.y);
		ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.fillStyle = "yellow";
		ctx.fillRect(0,0,40,40);
		ctx.strokeRect(0,0,40,40);
		ctx.fillRect(40,40,40,40);
		ctx.strokeRect(40,40,40,40);
		ctx.fillRect(40,0,40,40);
		ctx.strokeRect(40,0,40,40);
		ctx.fillRect(0,40,40,40);
		ctx.strokeRect(0,40,40,40);
		ctx.translate(-this.x,-this.y);
		this.x += this.xSpd;
		this.y += this.ySpd;
		if(this.x < 0 || this.x > 900 - this.size*2){
				this.xSpd = -this.xSpd;
		}else if(this.y < 0 || this.y > 700 - this.size*2){
				this.ySpd = -this.ySpd;						
		}
	}
	this.drawJBlock = function (ctx){
		ctx.translate(this.x,this.y);
		ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.fillStyle = "blue";
		ctx.fillRect(0,0,40,40);
		ctx.strokeRect(0,0,40,40);
		ctx.fillRect(0,40,40,40);
		ctx.strokeRect(0,40,40,40);
		ctx.fillRect(0,80,40,40);
		ctx.strokeRect(0,80,40,40);
		ctx.fillRect(40,80,40,40);
		ctx.strokeRect(40,80,40,40);
		ctx.translate(-this.x,-this.y);
		this.x += this.xSpd;
		this.y += this.ySpd;
		if(this.x < 0 || this.x > 900 - this.size*2){
				this.xSpd = -this.xSpd;
		}else if(this.y < 0 || this.y > 700 - this.size*3){
				this.ySpd = -this.ySpd;						
		}
	}
}	
