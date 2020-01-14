

function lbt(btns,imgs,lis,j){
	this.btns=btns;
	this.imgs=imgs;
	this.lis=lis;
	this.j=j;
}
lbt.prototype.init=function(lz){
	this.bind(lz);
}
lbt.prototype.bind=function(lz){
	for(var i=0;i<this.btns.length;i++){
		this.btns[i].onclick=function(){
			if(this.innerHTML=="&gt;"){
				lz.dql(1)
			}else if(this.innerHTML=="&lt;"){
				lz.dql(-1)
			}
		}
	}
	for(var i=0;i<this.lis.length;i++){
		this.lis[i].onclick=function(){
			j=parseInt(this.getAttribute("dy"))
			lz.dql(j,1);
		}
	}
	timer=setInterval(function(){
		lz.dql(1)
	},2000)
}
lbt.prototype.dql=function(x,y){
	if(y==undefined){
		this.j+=x
		if(this.j==3){
			this.j=0
		}else if(this.j==-1){
			this.j=2
		}
	}else{
		this.j=x;
	}
	for(var i=0;i<this.lis.length;i++){
	this.imgs[i].className="";
	this.lis[i].className="";
	}
	this.imgs[this.j].className="active";
	this.lis[this.j].className="active";
}

var btns=car1.getElementsByTagName("button");
var imgs=car1.getElementsByTagName("img");
var lis=car1.getElementsByTagName("li");
var j=0;
var lbt1=new lbt(btns,imgs,lis,j);





window.onload=function(){
	lbt1.init(lbt1)
}


var zd=document.getElementsByTagName("zd");
var uls=document.getElementsByClassName("uls")[0];
console.log(uls)
var dl=document.getElementsByTagName("dl");
var j=0;
//	uls[i].onclick=function(){
//		j++;
//		if(j%2==0){
//			dl.style.display="block"
//		}else if(j%2!=0){
//			dl.style.display="none"
//		}
//}

