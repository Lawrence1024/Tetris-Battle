function Sound(src,volume){
	var _this=this;
	this.src=src;
	this.aC={};
	this.src=src;
	this.volume=volume;
	this.htmlAudio=
		$("<audio></audio>")
			.attr({"src":this.src,"preload":"auto","webkit-playsinline":true});
	this.aC.channel=new Audio();
	this.loadSound=function(){
		this.aC.channel.src=this.htmlAudio[0].src;
		this.aC.channel.volume=this.volume;
		this.aC.channel.load();
	}
	this.playSound=function(waitTime){
		setTimeout(function(){
			_this.aC.channel.play();
		},waitTime);
	}
}