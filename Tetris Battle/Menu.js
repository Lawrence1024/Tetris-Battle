function Menu(){
	var _this = this;
//MAIN MENU	
	this.gameTitle = $("<div></div>")
		.attr({"id":"gameTitle", "class":"mainmenuItems"})
		.html("TETRIS")
		.css({"background-color":"lemonchiffon", "width":"300","height":"100","position":"absolute","left":"300","top":"125", "fontFamily":"Arial","fontSize":"80", "textAlign":"center"});		
	$(this.gameTitle).css('box-shadow', '10px 8px 20px #333');	
	this.selectMenu = $("<div></div>")
		.attr({"id":"selectMenu","class":"mainmenuItems"})
		.css({"background-color":"lemonchiffon", "width":"300","height":"280","position":"absolute","left":"300","top":"275"});	
	$(this.selectMenu).css('box-shadow', '10px 8px 20px #333');	
	this.playButton =  $("<div></div>")
		.attr({"id":"playButton"})
		.html("PLAY")
		.css({"cursor":"pointer","background-color":"LightCoral", "width":"270","height":"80","position":"absolute","left":"15","top":"10","fontFamily":"Arial","fontSize":"40", "textAlign":"center"})
		.hover(function(){
			$("#playButton").css("background-color", "DarkSeaGreen");
			}, function(){
			$("#playButton").css("background-color", "LightCoral");
			})
		.click(function(){
			$(".mainmenuItems").hide();
			$(".gamemodeButtons").show();
			$("#backButton").show();
			$("#backButton")[0].style.width="380px";
			$("#backButton")[0].style.left="285px";
			$("#backButton")[0].style.top="600px";
		});
		
	this.controlsButton = $("<div></div>")
		.attr({"id":"controlsButton"})
		.html("HOW TO PLAY")
		.css({"cursor":"pointer","background-color":"LightCoral", "width":"270","height":"80","position":"absolute","left":"15","top":"100","fontFamily":"Arial","fontSize":"36", "textAlign":"center"})
		.hover(function(){
			$("#controlsButton").css("background-color", "DarkSeaGreen");
			}, function(){
			$("#controlsButton").css("background-color", "LightCoral");
			})
		.click(function(){
			$(".mainmenuItems").hide();
			$("#controlsText").show();
			$("#backButton").show();
			$("#backButton")[0].style.width="380px";
			$("#backButton")[0].style.left="285px";
			$("#backButton")[0].style.top="600px";
		});	
		
	this.scoreButton = $("<div></div>")
		.attr({"id":"scoreButton"})
		.html("HIGH SCORES")
		.css({"cursor":"pointer","background-color":"LightCoral", "width":"270","height":"80","position":"absolute","left":"15","top":"190","fontFamily":"Arial","fontSize":"36", "textAlign":"center"})
		.hover(function(){
			$("#scoreButton").css("background-color", "DarkSeaGreen");
			}, function(){
			$("#scoreButton").css("background-color", "LightCoral");
			})
		.click(function(){
			$(".mainmenuItems").hide();
			$("#highscoreDisplay").show();
			$("#clearRankingBut").show();
			$("#backButton").show();
			$("#rankingTitle").show();
			$("#backButton")[0].style.width="280px";
			$("#backButton")[0].style.left="125px";
			$("#backButton")[0].style.top="590px";
		});
	
	
//GAME MODE WINDOW
	this.classicmodeButton = $("<div></div>")
		.attr({"id":"classicmodeButton","class":"gamemodeButtons"})
		.html("Classic")
		.css({"cursor":"pointer","background-color":"LightCoral", "width":"270","height":"80","position":"absolute","left":"50","top":"150","fontFamily":"Arial","fontSize":"36", "textAlign":"center"})
		.hover(function(){
			$("#classicmodeButton").css("background-color", "#9DC679");
			$("#gamemodeDesc").show();
				$("#gamemodeDesc").html("The classical Tetris game. Match and clear rows of blocks to get more points!"+
										" There is no hold function in this mode! You will gain 1 point by clearing 1 row,"+
										" 2 points for 2 row, 3 points for 3 rows, 5 points for 4 rows at a time. Try to get as many"+
										" points as possible within 3 minutes. Let's start the game and beat the high score!!");
				$("#gamemodeDesc")[0].style.fontSize="34px";
			}, function(){
			$("#classicmodeButton").css("background-color", "LightCoral");
			$("#gamemodeDesc").hide();
			})
		.click(function(){
			userNameMenu=new UserNameMenu(1);
			_this.classicmodeButton.hide();
			_this.backButton.hide();
			_this.multiplayermodeButton.hide();
			_this.gamemodeDesc.hide();
		});	
	$(this.classicmodeButton).css('box-shadow', '10px 10px 15px #333');	
	
	this.multiplayermodeButton = $("<div></div>")
		.attr({"id":"multiplayermodeButton","class":"gamemodeButtons"})
		.html("2-Person Multiplayer")
		.css({"cursor":"pointer","background-color":"LightCoral", "width":"270","height":"80","position":"absolute","left":"50","top":"400","fontFamily":"Arial","fontSize":"36", "textAlign":"center"})
		.hover(function(){
			$("#multiplayermodeButton").css("background-color", "#9DC679");
			$("#gamemodeDesc").show();
				$("#gamemodeDesc").html("Play Tetris with another player. Clear rows of two or more to send trash to your opponent!"+
										" Put blocks above bombs can clear trash. You can win by getting more points within 3 minutes,"+
										" or knocking out your opponent. Let's get started and good luck!");
				$("#gamemodeDesc")[0].style.fontSize="38px";
			}, function(){
			$("#multiplayermodeButton").css("background-color", "LightCoral");
			$("#gamemodeDesc").hide();
			})
		.click(function(){
			userNameMenu=new UserNameMenu(2);
			_this.classicmodeButton.hide();
			_this.backButton.hide();
			_this.multiplayermodeButton.hide();
			_this.gamemodeDesc.hide();
		});	
		
	$(this.multiplayermodeButton).css('box-shadow', '10px 10px 15px #333');	
	this.gamemodeDesc = $("<div></div>")
		.attr({"id":"gamemodeDesc"})
		.css({"background-color":"bisque", "width":"400","height":"550","position":"absolute","left":"450", "top":"25","fontFamily":"Arial","fontSize":"34","padding":10});	
	$(this.gamemodeDesc).css('box-shadow', '10px 10px 15px #333');	
	
//GAME OVER WINDOW
	this.gameoverWindow = $("<div></div>")
		.attr({"id":"gameoverWindow"})
		.css({"fontWeight":"bold","display":"none","background-color":"bisque", "width":"800","height":"600","position":"absolute","left":"50","top":"50","fontFamily":"Arial","fontSize":"60", "textAlign":"center","zIndex":"1"});
		$(this.gameoverWindow).css('box-shadow', '10px 10px 15px #333');
	this.gameoverWindowTitle=
		$("<div></div>")
			.attr({"id":"gameoverWindowTitle"})
			.html("Game Over!")
			.css({"width":800,"fontWeight":"bold","fontFamily":"Arial","fontSize":"60", "textAlign":"center","position":"absolute"});
	this.trophyName=
		$("<div></div>")
			.attr({"id":"trophyName"})
			.html("#1")
			.css({"zIndex":3,"top":450,"left":152,"width":160,"fontWeight":"bold","fontFamily":"Arial","fontSize":"30", "textAlign":"center","position":"absolute"});

	this.trophyDisplay=$("<img></img>")
		.attr({"id":"trophyDisplay","src":"trophy.png","alt":"File not found"})
		.css({"position":"absolute","top":70,"left":30,"width":400,"height":450});
	this.crown=$("<img></img>")
		.attr({"id":"crown","src":"crown.png","alt":"File not found"})
		.css({"display":"none","zIndex":"3","position":"absolute","top":260,"left":430,"width":100,"height":100});
	this.scoreDisplay = $("<div></div>")
		.attr({"id":"scoreDisplay"})
		.html("Score goes here")
		.css({"background-color":"lightblue", "width":"300","height":"450","position":"absolute","left":"470","top":"70","fontFamily":"Arial","fontSize":"50", "textAlign":"center","zIndex":"2"});				
	this.quitButton2 = $("<div></div>")
		.attr({"id":"quitButton2"})
		.html("BACK TO MENU")
		.css({"cursor":"pointer","padding":2,"background-color":"LightCoral", "width":"400","height":"50","position":"absolute","left":"20","top":"540","fontFamily":"Arial","fontSize":"40", "textAlign":"center", "zIndex":"2"})
		.hover(function(){
				$("#quitButton2").css("background-color", "#9DC679");
			}, function(){
				$("#quitButton2").css("background-color", "LightCoral");
			}
		)
		.click(function(){
				$("#gameoverWindow").hide();
				$(".mainmenuItems").show();
				_this.canvaswrapper.show();
				$("body")[0].style.backgroundImage=null;
		});	
	this.playagainButton = $("<div></div>")
		.attr({"id":"playagainButton"})
		.html("PLAY AGAIN")
		.css({"cursor":"pointer","padding":2,"background-color":"LightCoral", "width":"340","height":"50","position":"absolute","left":"440","top":"540","fontFamily":"Arial","fontSize":"40", "textAlign":"center", "zIndex":"2"})
		.hover(function(){
				$("#playagainButton").css("background-color", "#9DC679");
			}, function(){
				$("#playagainButton").css("background-color", "LightCoral");
			}
		)
		.click(function(){
			$("#gameoverWindow").hide();
			if(onePlayer){
				runGame(1);
			}else if(twoPlayer){
				runGame(2);
			}
		});	

//CONTROLS WINDOW	
	this.controlsText = $("<div></div>")
		.attr({"id":"controlsText"})
		.html("<span class='controlTitleBold'>Classic Mode:</span><br>Right arrow: move right<br>Left Arrow: move left<br>Up Arrow: rotate left<br>Down Arrow: soft drop" + 
				"<br>Space: hard drop<br><span class='controlTitleBold'>Multiplayer Mode:</span><br>Player 1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
				"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Player2:<br>"+
				"A: move left&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
				"Left Arrow: move left<br>D: move right&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
				"&nbsp;&nbsp;&nbsp;Right Arrow: move right<br>S: soft drop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
				"&nbsp;&nbsp;&nbsp;&nbsp;Down Arrow: soft drop<br>W: rotate left&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
				"&nbsp;&nbsp;&nbsp;Up Arrow: rotate left<br>Q: hard drop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
				"&nbsp;&nbsp;&nbsp;Enter: hard drop<br>~: hold&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
				"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?: hold")
		.css({"padding":5,"background-color":"bisque","width":"600","height":"620", "padding":"5","position":"absolute","left":"150","top":"50","fontFamily":"Arial","fontSize":"28"});
		$(this.controlsText).css('box-shadow', '10px 10px 15px #333');
	
//HIGHSCORE WINDOW
	this.rankingTitle = $("<div></div>")
		.attr({"id":"rankingTitle"})
		.html("HIGH SCORES")
		.css({"fontWeight":"bold","padding":15,"background-color":"gold", "width":"870","height":"50","position":"absolute","left":"8","top":"20","fontFamily":"Arial","fontSize":"60", "textAlign":"center"});	
		
	this.highscoreDisplay = $("<textarea></textarea>")
		.attr({"id":"highscoreDisplay","readonly":"readonly","rows":10})
		.html("&nbsp;&nbsp;Rank&nbsp;&nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Score&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date\r")
		.html("&nbsp;&nbsp;Rank&nbsp;&nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Score&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date\r")
		.css({"resize":"none","background-color":"#fff48c", "width":"750","height":"400","position":"absolute","left":"75", "top":"150","fontFamily":"Arial","fontSize":"36"});	
		$(this.highscoreDisplay).css('box-shadow', '10px 10px 15px #333');
		
	this.clearRankingBut = $("<div></div>")
		.attr({"id":"clearRankingBut"})
		.html("CLEAR RANKING")
		.css({"cursor":"pointer","padding":15,"background-color":"LightCoral", "width":"280","height":"30","position":"absolute","left":"480","top":"590","fontFamily":"Arial","fontSize":"32", "textAlign":"center"})
		.hover(function(){
				$("#clearRankingBut").css("background-color", "#9DC679");
			}, function(){
				$("#clearRankingBut").css("background-color", "LightCoral");
			}
		)
		.click(function(){
			clearRanking();			
		});	
		$(this.clearRankingBut).css('box-shadow', '10px 8px 20px #333');
		
	this.clearRankingPasswordInput=
		$("<input></input>")
			.attr({"id":"clearRankingPasswordInput","type":"password","autofocus":"autofocus"})
			.css({"position":"absolute","left":"480","top":"670"});
		$(this.clearRankingPasswordInput).css('box-shadow', '10px 8px 20px #333');
		
	this.checkClearRankingPassword=function(){
		var code=this.clearRankingPasswordInput[0].value;
		var partCode=code.slice(0,13);
		if(partCode=="lawrenceClear"){
			if(code.slice(13)==""){
				return true;
			}else if(isNaN(code.slice(13))){
				return false;
			}else{
				return (parseInt(code.slice(13)));
			}
		}else{
			return false;
		}
	}
		
//BACK BUTTON
	this.backButton = $("<div></div>")
		.attr({"id":"backButton"})
		.html("BACK TO MENU")
		.css({"cursor":"pointer","padding":15,"background-color":"LightCoral", "width":"380","height":"30","position":"absolute","left":"250","top":"600","fontFamily":"Arial","fontSize":"32", "textAlign":"center"})
		.hover(function(){
				$("#backButton").css("background-color", "#9DC679");
			}, function(){
				$("#backButton").css("background-color", "LightCoral");
			}
		)
		.click(function(){
			$("#backButton").hide();
			$(".gamemodeButtons").hide();
			$("#controlsText").hide();
			$("#highscoreDisplay").hide();
			$(".mainmenuItems").show();	
			$("#clearRankingBut").hide();
			$("#clearRankingPasswordInput").hide();	
			$("#rankingTitle").hide();			
		});	
		$(this.backButton).css('box-shadow', '10px 8px 20px #333');
		
// CANVAS	
	this.canvaswrapper= $("<canvas></canvas>")
		.attr({"width":900,"height":700,"id":"canvas"});	
	$("#wrapper").append(this.canvaswrapper);
	var ctx = this.canvaswrapper[0].getContext("2d");

	setInterval(function(){	var grd = ctx.createLinearGradient (0,0,0,500);
		grd.addColorStop(0,"#FBF5A0");
		grd.addColorStop(0.20,"#76FBA7");
		grd.addColorStop(0.50,"#23B2DE");
		grd.addColorStop(1,"#18617C");	
		ctx.fillStyle = grd;
		ctx.fillRect(0,0,900,700);},30);
	this.wrapperDeco1 = new Deco(_this,50,100,5,-1);
	this.wrapperDeco2 = new Deco(_this,200,50,4,5);
	this.wrapperDeco3 = new Deco(_this,0,400,2,-7);
	this.wrapperDeco4 = new Deco(_this,550,500,3,3);
	this.wrapperDeco5 = new Deco(_this,300,250,-3,1);
	this.wrapperDeco6 = new Deco(_this,40,450,-3,-2);
	this.wrapperDeco7 = new Deco(_this,250,350,2,-3);
	this.drawAllBlock=function (){
		setInterval(function(){_this.wrapperDeco1.drawLBlock(ctx);},30);
		setInterval(function(){_this.wrapperDeco2.drawIBlock(ctx);},30);
		setInterval(function(){_this.wrapperDeco3.drawTBlock(ctx);},30);
		setInterval(function(){_this.wrapperDeco4.drawSBlock(ctx);},30);
		setInterval(function(){_this.wrapperDeco5.drawZBlock(ctx);},15);
		setInterval(function(){_this.wrapperDeco6.drawOBlock(ctx);},15);
		setInterval(function(){_this.wrapperDeco7.drawJBlock(ctx);},15);
	}
	this.drawAllBlock();
	
// APPENDING	
		$("#wrapper").append(this.gameoverWindow);
		$("#wrapper").append(this.gameTitle);
		$("#wrapper").append(this.selectMenu);
		$("#selectMenu").append(this.playButton);
		$("#selectMenu").append(this.controlsButton);
		$("#selectMenu").append(this.scoreButton);
		
		$("#wrapper").append(this.classicmodeButton);
		$("#wrapper").append(this.multiplayermodeButton);
		$("#wrapper").append(this.gamemodeDesc);
		$("#gamemodeDesc").hide();
		$(".gamemodeButtons").hide();
		
		$("#gameoverWindow").append(this.quitButton2);
		$("#gameoverWindow").append(this.crown);
		$("#gameoverWindow").append(this.trophyDisplay);
		$("#gameoverWindow").append(this.gameoverWindowTitle);
		$("#gameoverWindow").append(this.playagainButton);
		$("#gameoverWindow").append(this.trophyName);
		$("#gameoverWindow").append(this.scoreDisplay);
		
		$("#wrapper").append(this.controlsText);
		$("#controlsText").hide();
		$("#wrapper").append(this.highscoreDisplay);
		$("#highscoreDisplay").hide();
		$("#wrapper").append(this.clearRankingBut);
		$("#clearRankingBut").hide();
		$("#wrapper").append(this.clearRankingPasswordInput);
		$("#clearRankingPasswordInput").hide();
		$("#wrapper").append(this.rankingTitle);
		$("#rankingTitle").hide();
		var boldTitles=document.getElementsByClassName("controlTitleBold");
		boldTitles[0].style.fontWeight="bold";
		boldTitles[1].style.fontWeight="bold";
		boldTitles[0].style.fontSize="40px";
		boldTitles[1].style.fontSize="40px";
		
		$("#wrapper").append(this.backButton);
		$("#backButton").hide();
}
