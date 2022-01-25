/**keyDown() sets the margin of the playfield inorder to make sure no blocks go beyond.
	input: event
	output: n/a
	other effects: blocks are moved or the command is pushed into "moveKeyArray".
*/
function keyDown(e){
	if(!endGame){
		var day=new Date();
		var time=day.getTime();
		if(moveKeyArray.indexOf(e.keyCode)==-1){
			moveKeyArray.push(e.keyCode);
		}
		if(onePlayer){
			if(e.keyCode==38){
				//rotate
				wrapper.playField.currentBlock.rotate();
			}else if(e.keyCode==32){
				//sink
				wrapper.playField.currentBlock.sink();
			}
			if(e.keyCode==40){
				downTime1=parseFloat(time);
				wrapper.playField.currentBlock.moveDown(1);
			}else if(e.keyCode==37){
				leftTime1=parseFloat(time);
				wrapper.playField.currentBlock.moveLeft();
			}else if(e.keyCode==39){
				rightTime1=parseFloat(time);
				wrapper.playField.currentBlock.moveRight();
			}
		}else{
			if(e.keyCode==87){
				//rotate
				wrapper1.playField.currentBlock.rotate();
			}else if(e.keyCode==81){
				//sink
				wrapper1.playField.currentBlock.sink();
			}else if(e.keyCode==192){
				//hold
				wrapper1.playField.hold();
			}
			if(e.keyCode==38){
				//rotate
				wrapper2.playField.currentBlock.rotate();
			}else if(e.keyCode==13){
				//sink
				wrapper2.playField.currentBlock.sink();
			}else if(e.keyCode==191){
				//hold
				wrapper2.playField.hold();
			}
			if(e.keyCode==83){
				downTime1=parseFloat(time);
				wrapper1.playField.currentBlock.moveDown(1);
			}else if(e.keyCode==65){
				leftTime1=parseFloat(time);
				wrapper1.playField.currentBlock.moveLeft();
			}else if(e.keyCode==68){
				rightTime1=parseFloat(time);
				wrapper1.playField.currentBlock.moveRight();
			}
			if(e.keyCode==40){
				downTime2=parseFloat(time);
				wrapper2.playField.currentBlock.moveDown(1);
			}else if(e.keyCode==37){
				leftTime2=parseFloat(time);
				wrapper2.playField.currentBlock.moveLeft();
			}else if(e.keyCode==39){
				rightTime2=parseFloat(time);
				wrapper2.playField.currentBlock.moveRight();
			}
		}
	}else{
		if(e.keyCode==13){
			var ifCorrect=gmenu.checkClearRankingPassword();
			gmenu.clearRankingPasswordInput[0].value="";
			gmenu.clearRankingPasswordInput[0].style.display="none";
			if(ifCorrect){
				eraseRanking(ifCorrect);
				
			}
		}
		
	}
}
/**keyUp() erase keyCode from "moveKeyArray"
	input: event
	output: n/a
	other effects: n/a
*/
function keyUp(e){
	if(moveKeyArray.indexOf(e.keyCode)!=-1){
		var num=moveKeyArray.indexOf(e.keyCode);
		moveKeyArray.splice(num,1);
	}
}
/**moveBlock() move the block accordingly to the "moveKeyArray"
	input: n/a
	output: n/a
	other effects: blocks are moved
*/
function moveBlock(){
	var dayStop=new Date();
	var timeStop=dayStop.getTime();
	if(onePlayer){
		if(moveKeyArray.indexOf(40)!=-1){
			if(timeStop>=downTime1+282.8476){
				wrapper.playField.currentBlock.moveDown(1);
			}
		}else if(moveKeyArray.indexOf(37)!=-1){
			if(timeStop>=leftTime1+282.8476){
				wrapper.playField.currentBlock.moveLeft();
			}
		}else if(moveKeyArray.indexOf(39)!=-1){
			if(timeStop>=rightTime1+282.8476){
				wrapper.playField.currentBlock.moveRight();
			}
		}
	}else{
		if(moveKeyArray.indexOf(83)!=-1){
			if(timeStop>=downTime1+282.8476){
				wrapper1.playField.currentBlock.moveDown(1);
			}
		}else if(moveKeyArray.indexOf(65)!=-1){
			if(timeStop>=leftTime1+282.8476){
				wrapper1.playField.currentBlock.moveLeft();
			}
		}else if(moveKeyArray.indexOf(68)!=-1){
			if(timeStop>=rightTime1+282.8476){
				wrapper1.playField.currentBlock.moveRight();
			}
		}
		if(moveKeyArray.indexOf(40)!=-1){
			if(timeStop>=downTime2+282.8476){
				wrapper2.playField.currentBlock.moveDown(1);
			}
		}else if(moveKeyArray.indexOf(37)!=-1){
			if(timeStop>=leftTime2+282.8476){
				wrapper2.playField.currentBlock.moveLeft();
			}
		}else if(moveKeyArray.indexOf(39)!=-1){
			if(timeStop>=rightTime2+282.8476){
				wrapper2.playField.currentBlock.moveRight();
			}
		}
	}
}
/**orderArrayFromLowToHigh() takes in an array of number and order it from low to high then return it.
	input: array of number
	output: ordered array of number
	other effects: n/a
*/
function orderArrayFromLowToHigh(array){
	var toggle=true;
	while(toggle){
		toggle=false;
		for(var i=0;i<array.length-1;i++){
			if(array[i]>array[i+1]){
				toggle=true;
				var tempCup=array[i];
				array[i]=array[i+1]
				array[i+1]=tempCup;
			}
		}
	}
	return array;
}
/**showFinalScore() show the final page when game ends
	input: n/a
	output: n/a
	other effects: final page is shown
*/
function showFinalScore(){
	gmenu.trophyName[0].style.display="block";
	if(onePlayer){
		gmenu.scoreDisplay[0].style.fontSize="50px";
		gmenu.crown[0].style.display="none";
		gmenu.gameoverWindowTitle[0].innerHTML="GAME OVER!";
		if(name[name.length-1]=="s"){
			gmenu.scoreDisplay[0].innerHTML=name+"'<br>Score:<br><span id='score'>"+wrapper.playField.points+"</span><br>Points!";	
		}else{
			gmenu.scoreDisplay[0].innerHTML=name+"'s<br>Score:<br><span id='score'>"+wrapper.playField.points+"</span><br>Points!";	
		};
		document.getElementById("score").style.color="red";
		document.getElementById("score").style.fontSize="100px";
		document.getElementById("score").style.fontWeight="bold";
	}else if(twoPlayer){
		gmenu.scoreDisplay[0].style.fontSize="35px";
		var string1;
		var string2;
		if(name1[name1.length-1]=="s"){
			string1=name1+"'<br>Score:<br><span id='score1'>"+wrapper1.playField.points+"</span><br>Points!";	
		}else{
			string1=name1+"'s<br>Score:<br><span id='score1'>"+wrapper1.playField.points+"</span><br>Points!";	
		};
		if(name2[name2.length-1]=="s"){
			string2=name2+"'<br>Score:<br><span id='score2'>"+wrapper2.playField.points+"</span><br>Points!";	
		}else{
			string2=name2+"'s<br>Score:<br><span id='score2'>"+wrapper2.playField.points+"</span><br>Points!";	
		};
		gmenu.scoreDisplay[0].innerHTML=string1+"<br>"+string2;	
		document.getElementById("score1").style.color="red";
		document.getElementById("score1").style.fontSize="90px";
		document.getElementById("score1").style.fontWeight="bold";
		document.getElementById("score2").style.color="red";
		document.getElementById("score2").style.fontSize="90px";
		document.getElementById("score2").style.fontWeight="bold";
		showWinner();
	}
}
/**showWinner() shows who win after two player mode game
	input: n/a
	output: n/a
	other effects: winner's name is displayed on trophy and a crown is set above winner's name.
*/		
function showWinner(){
	gmenu.crown[0].style.display="block";
	if(loser==1){
		gmenu.crown[0].style.top="260px";
		gmenu.gameoverWindowTitle[0].innerHTML=name2+" Wins!";
		gmenu.trophyName[0].innerHTML=name2;
		document.getElementById("score1").innerHTML="KO";
	}else if(loser==2){
		gmenu.crown[0].style.top="10px";
		gmenu.gameoverWindowTitle[0].innerHTML=name1+" Wins!";
		gmenu.trophyName[0].innerHTML=name1;
		document.getElementById("score2").innerHTML="KO";
	}else if(loser=="time"){
		if(wrapper1.playField.points>wrapper2.playField.points){
			gmenu.crown[0].style.top="10px";
			gmenu.gameoverWindowTitle[0].innerHTML=name1+" Wins!";
			gmenu.trophyName[0].innerHTML=name1;
		}else if(wrapper1.playField.points<wrapper2.playField.points){
			gmenu.crown[0].style.top="260";
			gmenu.gameoverWindowTitle[0].innerHTML=name2+" Wins!";
			gmenu.trophyName[0].innerHTML=name2;
		}else if(wrapper1.playField.points==wrapper2.playField.points){
			gmenu.crown[0].style.display="none";
			gmenu.gameoverWindowTitle[0].innerHTML="There Is A Tie!";
			gmenu.trophyName[0].innerHTML="Tie";
		}
	}
}
/**doRanking() ranks the current score in the high score list.
	input: n/a
	output: n/a
	other effects: the rank is displayed on the trophy
*/
function doRanking(wrapper){
	var ifSameName=false;
	var ifHigher=false;
	var insertNum=0;
	var currentUser={};
	var oldCurrentUser=0;
	var d=new Date();
	var year=d.getFullYear();
	var month=d.getMonth()+1;
	var day=d.getDate();
	currentUser.name=name;
	currentUser.score=wrapper.playField.points;
	currentUser.date=month+"/"+day+"/"+year;
	for(var i=0;i<highScores.length;i++){
		if(currentUser.name==highScores[i].name){
			ifSameName=true;
			if(currentUser.score>highScores[i].score){
				oldCurrentUser=i;
				ifHigher=true;
			}
		}
	}
	if(ifSameName){
		if(ifHigher){
			highScores.splice(oldCurrentUser,1);
			for(var i=0;i<highScores.length;i++){
				if(currentUser.score<=highScores[i].score){
					insertNum=i+1;
				}
			}
			gmenu.trophyName[0].innerHTML="#"+parseInt(insertNum+1);
			currentUser.rank=insertNum;
			highScores.splice(insertNum,0,currentUser);
			localStorage.highScores=JSON.stringify(highScores);
			updateHighScoreMenu();
		}else{
			for(var i=0;i<highScores.length;i++){
				if(currentUser.score<=highScores[i].score){
					insertNum=i+1;
				}
			}
			gmenu.trophyName[0].innerHTML="#"+parseInt(insertNum+1);
		}
	}else{
		for(var i=0;i<highScores.length;i++){
			if(currentUser.score<=highScores[i].score){
				insertNum=i+1;
			}
		}
		gmenu.trophyName[0].innerHTML="#"+parseInt(insertNum+1);
		currentUser.rank=insertNum;
		highScores.splice(insertNum,0,currentUser);
		localStorage.highScores=JSON.stringify(highScores);
		updateHighScoreMenu();	
	}
}
/**updateHighScoreMenu() updates the high score menu with new player's score
	input: n/a
	output: n/a
	other effects: ranking is updated
*/	
function updateHighScoreMenu(){
	gmenu.highscoreDisplay[0].innerHTML="&nbsp;&nbsp;Rank&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Score&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date\r";
	for(var i=0;i<highScores.length;i++){
		if(highScores[i].name.length==3||highScores[i].name.length==4){
			var spaceNum0=10-JSON.stringify((i+1)).length-2;
			var spaceNum1=20-highScores[i].name.length*2;
			var spaceNum2=15-JSON.stringify(highScores[i].score).length*2;
		}else{
			var spaceNum0=10-JSON.stringify((i+1)).length-2;
			var spaceNum1=19-highScores[i].name.length*2;
			var spaceNum2=15-JSON.stringify(highScores[i].score).length*2;
		}
		gmenu.highscoreDisplay[0].innerHTML=addSpaces(gmenu.highscoreDisplay[0].innerHTML,4);
		gmenu.highscoreDisplay[0].innerHTML+=i+1+"."
		gmenu.highscoreDisplay[0].innerHTML=addSpaces(gmenu.highscoreDisplay[0].innerHTML,spaceNum0);
		gmenu.highscoreDisplay[0].innerHTML+=highScores[i].name;
		gmenu.highscoreDisplay[0].innerHTML=addSpaces(gmenu.highscoreDisplay[0].innerHTML,spaceNum1);
		gmenu.highscoreDisplay[0].innerHTML+=highScores[i].score;
		gmenu.highscoreDisplay[0].innerHTML=addSpaces(gmenu.highscoreDisplay[0].innerHTML,spaceNum2);
		gmenu.highscoreDisplay[0].innerHTML+=highScores[i].date;
		gmenu.highscoreDisplay[0].innerHTML+="\r";
	}
}
/**addSpaces() takes in a string and put in specific amount of spaces then return.
	input: a string and the amount of space required
	output: n/a
	other effects: n/a
*/
function addSpaces(string,num){
	for(var i=0;i<num;i++){
		string+="&nbsp";
	}
	return string;
}
/**clearRanking() shows the input box for password in order to clear ranking.
	input: n/a
	output: n/a
	other effects: blocks are moved
*/
function clearRanking(){
	alert("Please input password then press \"Enter\" to clear ranking.\r(Enter a number behind to clear a specific term)");
	gmenu.clearRankingPasswordInput[0].style.display="block";
}
/**eraseRanking() erase the ranking on the page and local storage
	input: which lines to erase or all if num equals to true
	output: n/a
	other effects: all or parts of the ranking erased.
*/
function eraseRanking(num){
	if(num===true){
		highScores=[];
		localStorage.removeItem("highScores");
	}else if(!isNaN(num)){
		highScores.splice(num-1,1);
		localStorage.highScores=JSON.stringify(highScores);
	}
	updateHighScoreMenu();
}





	
			
			
			
			