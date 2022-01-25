function PlayField(background){
	var _this=this;
	this.background=background;
	this.boxes=[];
	this.blocks=[];
	this.occupiedPosition=[];
	this.fullRowNum=false;
	this.rows=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	this.holdChange=false;
	this.nextBlockNum=parseInt(Math.random()*7);
	this.dropSpeed=500;
	this.playerNum=this.background.playerNum;
	this.trashNum=0;
	this.bombNum=0;
	this.bombPositionArray=[];
	this.bombArray=[];
	this.ifIgniteBomb=false;
	this.twoLineSound=new Sound("twoLineSound.mp3",0.7);
	this.twoLineSound.loadSound();
	this.fourLineSound=new Sound("fourLineSound.mp3",0.7);
	this.fourLineSound.loadSound();
	this.bombSound=new Sound("bombSound.mp3",1);
	this.bombSound.loadSound();
	this.points=0;
	
	this.trashBar=
		$("<div></div>")
			.css({"position":"absolute","backgroundColor":"red","borderRadius":20,"left":-12
					,"height":0,"width":10,"top":990,"zIndex":5});
					
	/**setMargin() sets the margin of the playfield inorder to make sure no blocks go beyond.
		input: n/a
		output: n/a
		other effects: create a margin surrounding the playfield
	*/
	this.setMargin=function(){
		for(var k=0;k<22;k++){
			var i=-1;
			this.occupiedPosition.push([i,k])
		}
		for(var k=0;k<22;k++){
			var i=10;
			this.occupiedPosition.push([i,k])
		}
		for(var k=-1;k<11;k++){
			var i=-1;
			this.occupiedPosition.push([k,i])
		}
		for(var k=-1;k<11;k++){
			var i=22;
			this.occupiedPosition.push([k,i])
		}
	}	
	this.setMargin();
	this.wrapper=
		$("<div></div>")
			.css({"position":"absolute","left":160
					,"height":900,"width":450,"top":-90});
	for(var i=0;i<22;i++){
		for(var k=0;k<10;k++){
			var tempBox=new Box([k,i],this);
			if(i<2){
				tempBox.elem[0].style.display="none";
			}
			this.wrapper.append(tempBox.elem);
			this.boxes.push(tempBox);
		}
	}
	this.createBlock=[function(){return new T_Block("T_Block",400,_this.boxes[24],[[0,0],[1,0],[0,-1],[-1,0]],_this,[4,2]);}
					,function(){return new I_Block("I_Block",400,_this.boxes[14],[[0,0],[0,1],[0,2],[0,-1]],_this,[4,1]);}
					,function(){return new O_Block("O_Block",400,_this.boxes[14],[[0,0],[1,0],[0,1],[1,1]],_this,[4,1]);}
					,function(){return new J_Block("J_Block",400,_this.boxes[25],[[0,0],[-1,0],[-1,-1],[1,0]],_this,[5,2]);}
					,function(){return new L_Block("L_Block",400,_this.boxes[24],[[0,0],[-1,0],[1,-1],[1,0]],_this,[4,2]);}
					,function(){return new S_Block("S_Block",400,_this.boxes[14],[[0,0],[1,0],[0,1],[-1,1]],_this,[4,1]);}
					,function(){return new Z_Block("Z_Block",400,_this.boxes[14],[[0,0],[1,1],[0,1],[-1,0]],_this,[4,1]);}]
	/**randomBlockCreater() makes a random block everytime the old block is placed.
							Call on other functions to make blocks fall and detect other events.
		input: n/a
		output: n/a
		other effects: create new blocks randomly, detect all events.
	*/
	this.randomBlockCreater=function(){
		if(this.holdChange){
			this.holdChange=false;
			if(_this.tempBlock.type=="T_Block"){
				_this.currentBlock=_this.createBlock[0]();
			}else if(_this.tempBlock.type=="I_Block"){
				_this.currentBlock=_this.createBlock[1]();
			}else if(_this.tempBlock.type=="O_Block"){
				_this.currentBlock=_this.createBlock[2]();
			}else if(_this.tempBlock.type=="J_Block"){
				_this.currentBlock=_this.createBlock[3]();
			}else if(_this.tempBlock.type=="L_Block"){
				_this.currentBlock=_this.createBlock[4]();
			}else if(_this.tempBlock.type=="S_Block"){
				_this.currentBlock=_this.createBlock[5]();
			}else if(_this.tempBlock.type=="Z_Block"){
				_this.currentBlock=_this.createBlock[6]();
			}
		}else{
			this.currentBlock=this.createBlock[this.nextBlockNum]();
			this.nextBlockNum=parseInt(Math.random()*7);
			this.background.nextBlockHolder.clearCanvas();
			if(this.nextBlockNum==0){
				_this.background.nextBlockHolder.drawHolder("T_Block");
			}else if(this.nextBlockNum==1){
				_this.background.nextBlockHolder.drawHolder("I_Block");
			}else if(this.nextBlockNum==2){
				_this.background.nextBlockHolder.drawHolder("O_Block");
			}else if(this.nextBlockNum==3){
				_this.background.nextBlockHolder.drawHolder("J_Block");
			}else if(this.nextBlockNum==4){
				_this.background.nextBlockHolder.drawHolder("L_Block");
			}else if(this.nextBlockNum==5){
				_this.background.nextBlockHolder.drawHolder("S_Block");
			}else if(this.nextBlockNum==6){
				_this.background.nextBlockHolder.drawHolder("Z_Block");
			}
		}
		this.currentBlock.draw();
		this.currentBlock.createGuideLine();
		this.bottom=false;
		_this.timer=setInterval(function(){
			if(!_this.bottom){
				_this.bottom=_this.currentBlock.fall();
			}
			if(_this.bottom){
				_this.dropSpeed=_this.dropSpeed-5;
				if(_this.dropSpeed<410){
					_this.dropSpeed=410;
				}
				if(_this.currentBlock.shifting){
					setTimeout(function(){
						_this.doBomb();
						_this.doLoseAndTrash();
					},400);
				}else{
					_this.doRow();
					_this.doBomb();
					_this.doLoseAndTrash();
				}
			}
		},_this.dropSpeed);
	}
	
	_this.randomBlockCreater();
	/**doRow() check if lines match and react when true
		input: n/a
		output: n/a
		other effects: n/a
	*/
	this.doRow=function(){
		_this.fullRowNum=_this.checkIfFullRow();
		_this.fullRowNum=orderArrayFromLowToHigh(_this.fullRowNum);
		if(_this.fullRowNum){
			_this.score(_this.fullRowNum,_this.playerNum);
		}
	}
	/**doBomb() check if bomb is ignited and react when ignited
		input: n/a
		output: n/a
		other effects: n/a
	*/
	this.doBomb=function(){
		_this.ifIgniteBomb=_this.detectBomb();
		if(_this.ifIgniteBomb){
			_this.igniteBomb();
		}		
	}
	/**doLoseAndTrash() check if loose or trash should be sent and react when true
		input: n/a
		output: n/a
		other effects: n/a
	*/
	this.doLoseAndTrash=function(){
		var lose=_this.checkIfLose();
		if(lose){
			loser=this.playerNum;
			_this.endGame();
		}else{
			clearInterval(_this.timer);
			_this.currentBlock.eraseGuideLine();
			if(_this.trashNum!=0){
				_this.receiveTrash();
				_this.trashNum=0
			}
			_this.randomBlockCreater();
		}
	}
	/**receiveTrash() calls on the createTrash function.
		input: n/a
		output: n/a
		other effects: trashBar is reseted
	*/
	this.receiveTrash=function(){
		this.createTrash();
		this.currentBlock.eraseGuideLine();
		this.currentBlock.createGuideLine();
		this.trashBar.stop();
		this.trashBar[0].style.height=0;
		this.trashBar[0].style.top=990;
	}
	/**createTrash() calls on other functions to create a line of trash and a bomb in it.
		input: n/a
		output: n/a
		other effects: a complete line of trash created.
	*/
	this.createTrash=function(){
		for(var i=0;i<this.trashNum;i++){
			this.createLine();
			this.createBomb();
		}
		
	}
	/**createLine() creates a line of trash
		input: n/a
		output: n/a
		other effects: a line of trash created
	*/
	this.createLine=function(){
		//move Bomb Up
		if(this.bombNum!=0){
			for(var i=0;i<this.bombNum;i++){
				this.bombPositionArray[i][1]=this.bombPositionArray[i][1]-1;
				var oldTop=parseInt(this.bombArray[i].canvas[0].style.top);
				this.bombArray[i].canvas[0].style.top=oldTop-45;
			}
		}
		//move position up
		for(var i=this.occupiedPosition.length-1;i>=68;i--){
			this.occupiedPosition[i][1]=this.occupiedPosition[i][1]-1;
		}
		//move color
		for(var i=0;i<this.boxes.length;i++){
			if(this.boxes[i+10]){
				this.boxes[i].color=this.boxes[i+10].color;
				this.boxes[i].elem[0].style.backgroundColor=this.boxes[i+10].color;
			}
		}
		//Create Black Trash
		for(var k=0;k<10;k++){
			if(this.boxes[21*10+k]){
				this.boxes[21*10+k].color="rgb(30,30,30)";
				this.boxes[21*10+k].elem[0].style.backgroundColor="rgb(30,30,30)";
			}
			this.occupiedPosition.push([k,21]);
		}
	}
	/**createBomb() creates a bomb
		input: n/a
		output: n/a
		other effects: bomb created
	*/
	this.createBomb=function(){
		var num=parseInt(Math.random()*10);
		var bomb=new Bomb(this,[num,21]);
		this.bombArray.push(bomb);
		this.bombPositionArray.push([num,21]);
		this.bombNum++;
	}
	/**checkIfFullRow() to see if any rows are matched.
		input: n/a
		output: rows that matched or false if none
		other effects: n/a
	*/
	this.checkIfFullRow=function(){
		var tempSuccessRow=[];
		_this.rows=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		for(var i=68;i<_this.occupiedPosition.length;i++){
			_this.rows[_this.occupiedPosition[i][1]]++;
			if(_this.rows[_this.occupiedPosition[i][1]]==10&&_this.boxes[_this.occupiedPosition[i][0]+_this.occupiedPosition[i][1]*10].color!="rgb(30,30,30)"){
				tempSuccessRow.push(_this.occupiedPosition[i][1]);
			}
		}
		if(tempSuccessRow.length!=0){
			return tempSuccessRow;
		}else{
			return false;
		}
	}
	/**score() call other functions when lines are matched.
		input: an array of rows
		output: n/a
		other effects: rows deleted, point added, trash sent.
	*/
	this.score=function(rows,sender){
		if(rows.length>=2){
			var lines;
			if(rows.length==2){
				lines=1;
				_this.twoLineSound.playSound(0);
			}else if(rows.length==3){
				lines=2;
				_this.twoLineSound.playSound(0);
			}else if(rows.length==4){
				lines=4;
				_this.fourLineSound.playSound(0);
			}
			this.sendTrash(lines,sender);
		}
		this.addPoints(rows);
		this.deleteRows(rows);
		_this.currentBlock.eraseGuideLine();
		_this.currentBlock.createGuideLine();
		this.rows=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		this.fullRowNum=false;
	}
	/**deleteRows() delete an entire row and let the blocks above to fall.
		input: an array of rows needed to be deleted
		output: n/a
		other effects: rows deleted and blocks above falls.
	*/
	this.deleteRows=function(rows){
		for(var k=0;k<rows.length;k++){
			var shouldClear=[];
			//Clear Row
			for(var i=68;i<_this.occupiedPosition.length;i++){
				if(_this.occupiedPosition[i][1]==rows[k]){
					shouldClear.push(i);
				}
			}
			for(var i=shouldClear.length-1;i>=0;i--){
				if(this.occupiedPosition[i][1]<=rows[k]){
					this.occupiedPosition.splice(shouldClear[i],1);
				}
			}
			//Shift Postion 1 down
			for(var i=this.occupiedPosition.length-1;i>=68;i--){
				if(this.occupiedPosition[i][1]<=rows[k]){
					this.occupiedPosition[i][1]=this.occupiedPosition[i][1]+1;
				}
			}
			//Shift Color 1 down
			var boxValueLimit=rows[k]*10;
			for(var i=this.boxes.length-1;i>=0;i--){
				if(i<boxValueLimit+10){
					if(this.boxes[i-10]){
						this.boxes[i].color=this.boxes[i-10].color;
						this.boxes[i].elem[0].style.backgroundColor=this.boxes[i-10].color;
					}
				}
			}
		}
		rows=[];
	}
	/**addPoints() call the updatePoints function with correct arguments.
		input: how much points to add.
		output: n/a
		other effects: n/a
	*/
	this.addPoints=function(rows){
		//add points
		if(rows.length==4){
			this.updatePoints(5);
		}else{
			this.updatePoints(rows.length);
		}
	}
	/**updatePoints() add points to player when scored
		input: how much points to add
		output: n/a
		other effects: points are added
	*/
	this.updatePoints=function(addScore){
		this.points=parseInt(this.background.pointsArea.score[0].innerHTML)+addScore;
		this.background.pointsArea.score[0].innerHTML=parseInt(this.background.pointsArea.score[0].innerHTML)+addScore;
	}
	/**checkIfLose() checks if the player have lost
		input: n/a
		output: true or false
		other effects: n/a
	*/
	this.checkIfLose=function(){
		for(var i=0;i<this.occupiedPosition.length;i++){
			if(this.occupiedPosition[i].join()==[3,0].join()){
				return true;
			}else if(this.occupiedPosition[i].join()==[4,0].join()){
				return true;
			}else if(this.occupiedPosition[i].join()==[5,0].join()){
				return true;
			}else if(this.occupiedPosition[i].join()==[3,1].join()){
				return true;
			}else if(this.occupiedPosition[i].join()==[4,1].join()){
				return true;
			}else if(this.occupiedPosition[i].join()==[5,1].join()){
				return true;
			}else if(this.occupiedPosition[i].join()==[3,2].join()){
				return true;
			}else if(this.occupiedPosition[i].join()==[4,2].join()){
				return true;
			}else if(this.occupiedPosition[i].join()==[5,2].join()){
				return true;
			}
		}
		return false;
	}
	
	
	this.holdBlock=[];
	/**hold() holds the current block.
		input: n/a
		output: n/a
		other effects: current block is hold.
	*/
	this.hold=function(){
		//Hold the block
		if(this.currentBlock.ifSink){
			
		}else{
			if(_this.holdBlock.length==0){
				_this.background.holder.drawHolder(_this.currentBlock.type);
				_this.holdBlock.push(_this.currentBlock);
				clearInterval(_this.timer);
				_this.currentBlock.eraseSelf();
				_this.currentBlock.eraseGuideLine();
				_this.randomBlockCreater();
			}else{
				_this.background.holder.clearCanvas();
				_this.background.holder.drawHolder(_this.currentBlock.type);
				clearInterval(_this.timer);
				_this.currentBlock.eraseSelf();
				_this.currentBlock.eraseGuideLine();
				_this.holdChange=true;
				_this.tempBlock=_this.holdBlock.pop();
				_this.holdBlock.push(_this.currentBlock);
				_this.randomBlockCreater();
			}
		}
	}
	/**sendTrash() sends trash to the oppotnent in two player mode.
		input: how much trash to send and who send the trash.
		output: n/a
		other effects: trash is delivered to the opponent.
	*/
	this.sendTrash=function(lines,sender){
		if(onePlayer){
			
		}else if(twoPlayer){
			if(sender==1){
				var oldTop=parseInt(wrapper2.playField.trashBar[0].style.top);
				var oldHeight=parseInt(wrapper2.playField.trashBar[0].style.height);
				wrapper2.playField.trashBar.animate({top:oldTop-45*lines,height:oldHeight+45*lines},250,"linear");
				wrapper2.playField.trashNum+=lines;
			}else if(sender==2){
				var oldTop=parseInt(wrapper1.playField.trashBar[0].style.top);
				var oldHeight=parseInt(wrapper1.playField.trashBar[0].style.height);
				wrapper1.playField.trashBar.animate({top:oldTop-45*lines,height:oldHeight+45*lines},250,"linear");
				wrapper1.playField.trashNum+=lines;
			}
		}
	}
	/**detectBomb() checks if the fallen block successfully ignites a bomb.
		input: n/a
		output: true or false
		other effects: n/a
	*/
	this.detectBomb=function(){
		var center=this.currentBlock.centerPosition;
		var relative=this.currentBlock.relativePosition;
		for(var i=0;i<this.bombPositionArray.length;i++){
			for(var k=0;k<relative.length;k++){
				if((center[1]+relative[k][1]+1==this.bombPositionArray[i][1])&&(center[0]+relative[k][0]==this.bombPositionArray[i][0])){
					return true;
				}
				
			}
		}
		return false;
	}
	/**igniteBomb() takes out the bomb from memory, playes sound, and clear the row of trash.
		input: n/a
		output: n/a
		other effects: trash is cleaned and bomb disappear from screen and memory.
	*/
	this.igniteBomb=function(){
		this.bombSound.playSound(0);
		this.deleteRows([22-this.bombNum+1]);
		this.bombNum--;
		var last=this.bombArray.length-1;
		this.bombArray[0].canvas[0].style.display="none";
		this.bombArray.splice(0,1);
		this.bombPositionArray.splice(0,1);
	}
	/**endGame() ends the game and show the final page.
		input: n/a
		output: n/a
		other effects: final page is shown
	*/
	this.endGame=function(){
		this.background.timeArea.cleanUp();
		if(onePlayer){
			clearInterval(wrapper.playField.timer);
		}else{
			clearInterval(wrapper1.playField.timer);
			clearInterval(wrapper2.playField.timer);
		}
		if(endGame){
			
		}else{
			endGame=true;
			this.endWord=new GameOverWord();
			setTimeout(function(){
				_this.endWord.elem[0].style.display="none";
				if(onePlayer){
					wrapper.wrapper[0].style.display="none";
					doRanking(wrapper);
				}else{
					wrapper1.wrapper[0].style.display="none";
					wrapper2.wrapper[0].style.display="none";
				}
				backgroundMusic.aC.channel.pause();
				gmenu.gameoverWindow[0].style.display="block";
				showFinalScore();
				wrapper=null;
				wrapper1=null;
				wrapper2=null;
			},5000);
		}
	}
	
	this.background.wrapper.append(this.wrapper);
	this.wrapper.append(this.trashBar);
}





