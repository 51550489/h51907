var car1=document.getElementsByClassName("carousel")[0]
var btns=car1.getElementsByTagName("button")
var imgs=car1.getElementsByTagName("img")
var lis=car1.getElementsByTagName("li")
var j=0
for(var i=0;i<btns.length;i++){
	if(btns[i].innerHTML=="&gt;"){
		btns[i].onclick=function(){
			j++;
			if(j==3){
				j=0
			}
			for(var i=0;i<lis.length;i++){
				lis[i].className="";
				imgs[i].className="";
			}
			lis[j].className="active"
			imgs[j].className="active"
		}
	}else if(btns[i].innerHTML=="&lt;"){
		btns[i].onclick=function(){
			j--;
			if(j==-1){
				j=2
			}
			for(var i=0;i<lis.length;i++){
				lis[i].className="";
				imgs[i].className="";
			}
			lis[j].className="active"
			imgs[j].className="active"
		}
	}
}

	timer=setInterval(function(){
		j++;
			if(j==3){
				j=0
			}
			for(var i=0;i<lis.length;i++){
				lis[i].className="";
				imgs[i].className="";
			}
			lis[j].className="active"
			imgs[j].className="active"
	},1000);
	car1.onmouseover=function(){
				clearInterval(timer);
				timer=null;
			}
	car1.onmouseout=function(){
			timer=setInterval(function(){
				j++;
				if(j==3){
					j=0
				}
				for(var i=0;i<lis.length;i++){
					lis[i].className="";
					imgs[i].className="";
				}
				lis[j].className="active"
				imgs[j].className="active"
		},1000);	
	}
	
	for(var i=0;i<lis.length;i++){
		lis[i].onclick=function(){
		j=this.getAttribute("zd");
		for(var i=0;i<lis.length;i++){
			lis[i].className="";
			imgs[i].className="";
		}
		 lis[j].className="active"
		 imgs[j].className="active"
		 
	}
}
	



var nav1=document.querySelector(".nav1");
var liss=nav1.querySelectorAll(".nl li")
var nr=nav1.querySelectorAll(".nav1 .nr");
for(var i=0;i<liss.length;i++){
	liss[i].onclick=e=>{
		e=e|| window.event
		var target=e.target || e.srcElement
		for(var i=0;i<nr.length;i++){
			nr[i].className="nr"
		}
		var j=target.getAttribute("dy")
		nr[j].className="nr cl active1";
	}
}


var sels=document.querySelectorAll(".nav select")[0]
sels.onchange=e=>{
	e=e || window.event
	var target=e.target  || e.srcElement
	var xl=target.selectedIndex;
	for(var i=0;i<nr.length;i++){
		nr[i].className="nr"
	}
	nr[xl].className="nr  active1";
}
