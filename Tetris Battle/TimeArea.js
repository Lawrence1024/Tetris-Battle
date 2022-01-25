function TimeArea(bG){
	var _this=this;
	this.background=bG;
	this.min=3;
	this.sec=0;
	this.timeString="3:00";
	this.wrapper=
		$("<div></div>")
			.attr({"id":"holder"})
			.css({"position":"absolute","backgroundColor":"rgb(120,120,120)","width":148
				,"height":198,"margin":1,"top":340,"left":617});
	this.timerTitle=
		$("<div></div>")
			.attr({"id":"timerTitle"})
			.html("TIME")
			.css({"position":"absolute","color":"black","width":148,"height":20
				,"margin":3,"top":-40,"fontSize":60,"fontFamily":"Modak","left":5});
				
	this.timeElem=
		$("<div></div>")
			.attr({"id":"timeElem"})
			.html(this.timeString)
			.css({"position":"absolute","color":"black","width":148,"height":20
				,"margin":3,"top":55,"fontSize":60,"fontFamily":"Modak","left":5});
				
	this.timer=setInterval(function(){
		if(_this.min==0&&_this.sec==0){
			if(!endGame){
				loser="time";
				_this.background.playField.endGame();
			}
		}else{
			_this.sec--;
			if(_this.min==0){
				
			}else{
				if(_this.sec<0){
					_this.sec=59;
					_this.min--;
				}
			}
			if(_this.sec<10){
				_this.timeString=_this.min+":0"+_this.sec;
			}else{
				_this.timeString=_this.min+":"+_this.sec;
			}
			_this.timeElem[0].innerHTML=_this.timeString;
		}
	},1000);
	
	this.cleanUp=function(){
		if(onePlayer){
			clearInterval(wrapper.timeArea.timer);
			wrapper.timeArea=null;
		}else{
			clearInterval(wrapper1.timeArea.timer);
			clearInterval(wrapper2.timeArea.timer);
			wrapper1.timeArea=null;
			wrapper2.timeArea=null;
		}
	}
			
	this.background.wrapper.append(this.wrapper);
	this.wrapper.append(this.timerTitle);
	this.wrapper.append(this.timeElem);
}