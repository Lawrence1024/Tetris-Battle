function BlocksCanvas (){
	var _this = this;
	this.clearCanvas = function(ctx){
		ctx.beginPath();
		ctx.fillStyle="rgb(120,120,120)";
		ctx.fillRect(0,0,140,180);
	}
	this.drawIBlock = function(ctx){
		ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.fillStyle = "lightblue";
		ctx.fillRect(50,20,40,40);
		ctx.strokeRect(50,20,40,40);
		ctx.fillRect(50,60,40,40);
		ctx.strokeRect(50,60,40,40);
		ctx.fillRect(50,100,40,40);
		ctx.strokeRect(50,100,40,40);
		ctx.fillRect(50,140,40,40);
		ctx.strokeRect(50,140,40,40);
	}
	this.drawTBlock = function (ctx){
		ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.fillStyle = "pink";
		ctx.fillRect(10,100,40,40);
		ctx.strokeRect(10,100,40,40);
		ctx.fillRect(50,60,40,40);
		ctx.strokeRect(50,60,40,40);
		ctx.fillRect(50,100,40,40);
		ctx.strokeRect(50,100,40,40);
		ctx.fillRect(90,100,40,40);
		ctx.strokeRect(90,100,40,40);
	}
	this.drawSBlock = function (ctx){
		ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.fillStyle = "lightgreen";
		ctx.fillRect(10,100,40,40);
		ctx.strokeRect(10,100,40,40);
		ctx.fillRect(50,60,40,40);
		ctx.strokeRect(50,60,40,40);
		ctx.fillRect(50,100,40,40);
		ctx.strokeRect(50,100,40,40);
		ctx.fillRect(90,60,40,40);
		ctx.strokeRect(90,60,40,40);
	}
	this.drawZBlock = function (ctx){
		ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.fillStyle = "red";
		ctx.fillRect(10,60,40,40);
		ctx.strokeRect(10,60,40,40);
		ctx.fillRect(50,60,40,40);
		ctx.strokeRect(50,60,40,40);
		ctx.fillRect(50,100,40,40);
		ctx.strokeRect(50,100,40,40);
		ctx.fillRect(90,100,40,40);
		ctx.strokeRect(90,100,40,40);
	}
	this.drawLBlock = function (ctx){
		ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.fillStyle = "orange";
		ctx.fillRect(10,100,40,40);
		ctx.strokeRect(10,100,40,40);
		ctx.fillRect(50,100,40,40);
		ctx.strokeRect(50,100,40,40);
		ctx.fillRect(90,60,40,40);
		ctx.strokeRect(90,60,40,40);
		ctx.fillRect(90,100,40,40);
		ctx.strokeRect(90,100,40,40);
	}
	this.drawJBlock = function (ctx){
		ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.fillStyle = "blue";
		ctx.fillRect(10,60,40,40);
		ctx.strokeRect(10,60,40,40);
		ctx.fillRect(10,100,40,40);
		ctx.strokeRect(10,100,40,40);
		ctx.fillRect(50,100,40,40);
		ctx.strokeRect(50,100,40,40);
		ctx.fillRect(90,100,40,40);
		ctx.strokeRect(90,100,40,40);	
	}
	this.drawOBlock = function (ctx){
		ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.fillStyle = "yellow";
		ctx.fillRect(30,60,40,40);
		ctx.strokeRect(30,60,40,40);
		ctx.fillRect(70,60,40,40);
		ctx.strokeRect(70,60,40,40);
		ctx.fillRect(70,100,40,40);
		ctx.strokeRect(70,100,40,40);
		ctx.fillRect(30,100,40,40);
		ctx.strokeRect(30,100,40,40);
	}
}