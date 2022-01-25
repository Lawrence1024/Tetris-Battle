function UserNameMenu(player){
	var _this=this;
	this.player=player;
	this.wrapper=
		$("<div></div>")
			.attr({"id":"userNameMenuWrapper"})
			.css({"position":"absolute","width":900,"height":700,
					"top":0,"left":0,"display":"block"});
	
	this.title=
		$("<div></div>")
			.attr({"id":"userNameMenuTitle"})
			.html("Please type in your name.")
			.css({"position":"absolute","width":900,"height":80,"textAlign":"center","color":"purple",
					"top":40,"left":0,"display":"block","fontWeight":"bold","fontSize":70});
	this.player1Title=
		$("<div></div>")
			.attr({"id":"player1Title"})
			.html("Player 1:")
			.css({"position":"absolute","width":300,"height":100,
					"textAlign":"center","color":"purple",
					"top":200,"left":40,"display":"block","fontWeight":"bold","fontSize":70});
	this.player1Box=
		$("<input></input>")
			.attr({"id":"player1Box","type":"text"})
			.html("")
			.css({"position":"absolute","width":400,"height":50,
					"textAlign":"center","color":"purple",
					"top":225,"left":340,"display":"block","fontWeight":"bold","fontSize":40});
	
	this.player2Title=
		$("<div></div>")
			.attr({"id":"player2Title"})
			.html("Player 2:")
			.css({"position":"absolute","width":300,"height":100,
					"textAlign":"center","color":"purple",
					"top":350,"left":40,"display":"none","fontWeight":"bold","fontSize":70});
	
	this.player2Box=
		$("<input></input>")
			.attr({"id":"player2Box","type":"text"})
			.html("")
			.css({"position":"absolute","width":400,"height":50,
					"textAlign":"center","color":"purple",
					"top":375,"left":340,"display":"none","fontWeight":"bold","fontSize":40});
	
	this.submitNameBut=
		$("<input></input>")
			.attr({"id":"submitNameBut","type":"button","value":"Play"})
			.css({"position":"absolute","width":200,"height":60,"backgroundColor":"#76FBA7",
					"textAlign":"center","color":"purple","textAlign":"center","cursor":"pointer",
					"top":500,"left":350,"display":"block","fontWeight":"bold","fontSize":50})
			.hover(function(){
				$("#submitNameBut").css("background-color", "#9DC679");
			}, function(){
				$("#submitNameBut").css("background-color", "#76FBA7");
			})
			.click(function(){
				if(_this.player==2){
					_this.submitName([_this.player1Box[0].value,_this.player2Box[0].value]);
				}else if(_this.player==1){
					_this.submitName([_this.player1Box[0].value]);
				}
			});
			
	this.backBut=
		$("<input></input>")
			.attr({"id":"backFormMenuBut","type":"button","value":"Menu"})
			.css({"position":"absolute","width":200,"height":60,"backgroundColor":"#76FBA7",
					"textAlign":"center","color":"purple","textAlign":"center","cursor":"pointer",
					"top":600,"left":350,"display":"block","fontWeight":"bold","fontSize":50})
			.hover(function(){
				$("#backFormMenuBut").css("background-color", "#9DC679");
			}, function(){
				$("#backFormMenuBut").css("background-color", "#76FBA7");
			}
		)
			.click(function(){
				$("#gameoverWindow").hide();
				$(".mainmenuItems").show();
				gmenu.canvaswrapper.show();
				$("body")[0].style.backgroundImage=null;
				_this.hideUserNameMenu();
			});	
			
	this.submitName=function(names){
		var haveName=true;
		for(var i=0;i<names.length;i++){if(names[i]==""){alert("Please Enter A Name.");haveName=false;break;}}
		if(haveName){
			$("body")[0].style.backgroundImage="linear-gradient(#FBF5A0,#76FBA7,#23B2DE,#18617C)";
			_this.hideUserNameMenu();
			if(_this.player==2){
				name1=names[0];
				name2=names[1];
				runGame(2);
				$("#canvas").hide();
			}else if(_this.player==1){
				names[0]=names[0].toLowerCase();
				var oldFirstLetter=names[0][0];
				var newFirstLetter=names[0][0].toUpperCase();
				names[0]=names[0].replace(oldFirstLetter,newFirstLetter);
				name=names[0];
				runGame(1);
				$("#canvas").hide();
			}
		}
	}
	this.showUserNameMenu=function(){
		this.wrapper[0].style.display="block";
	}
	this.hideUserNameMenu=function(){
		this.wrapper[0].style.display="none";
	}
	if(this.player==2){
		this.player1Title[0].style.top="200px";
		this.player1Box[0].style.top="225px";
		this.player2Title[0].style.display="block";
		this.player2Box[0].style.display="block";
	}else if(this.player==1){
		this.player1Title[0].style.top="250px";
		this.player1Box[0].style.top="275px";
		this.player2Title[0].style.display="none";
		this.player2Box[0].style.display="none";
	}
	$("body").append(this.wrapper);
	$(this.wrapper).append(this.player1Title);
	$(this.wrapper).append(this.title);
	$(this.wrapper).append(this.player1Box);
	$(this.wrapper).append(this.player2Title);
	$(this.wrapper).append(this.player2Box);
	$(this.wrapper).append(this.submitNameBut);
	$(this.wrapper).append(this.backBut);
}