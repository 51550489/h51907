for(var car1=document.getElementsByClassName("carousel")[0],btns=car1.getElementsByTagName("button"),imgs=car1.getElementsByTagName("img"),lis=car1.getElementsByTagName("li"),j=0,i=0;i<btns.length;i++)"&gt;"==btns[i].innerHTML?btns[i].onclick=function(){3==++j&&(j=0);for(var e=0;e<lis.length;e++)lis[e].className="",imgs[e].className="";lis[j].className="active",imgs[j].className="active"}:"&lt;"==btns[i].innerHTML&&(btns[i].onclick=function(){-1==--j&&(j=2);for(var e=0;e<lis.length;e++)lis[e].className="",imgs[e].className="";lis[j].className="active",imgs[j].className="active"});timer=setInterval(function(){3==++j&&(j=0);for(var e=0;e<lis.length;e++)lis[e].className="",imgs[e].className="";lis[j].className="active",imgs[j].className="active"},1e3),car1.onmouseover=function(){clearInterval(timer),timer=null},car1.onmouseout=function(){timer=setInterval(function(){3==++j&&(j=0);for(var e=0;e<lis.length;e++)lis[e].className="",imgs[e].className="";lis[j].className="active",imgs[j].className="active"},1e3)};for(i=0;i<lis.length;i++)lis[i].onclick=function(){j=this.getAttribute("zd");for(var e=0;e<lis.length;e++)lis[e].className="",imgs[e].className="";lis[j].className="active",imgs[j].className="active"};var nav1=document.querySelector(".nav1"),liss=nav1.querySelectorAll(".nl li"),nr=nav1.querySelectorAll(".nav1 .nr");for(i=0;i<liss.length;i++)liss[i].onclick=function(e){for(var s=(e=e||window.event).target||e.srcElement,a=0;a<nr.length;a++)nr[a].className="nr";var l=s.getAttribute("dy");nr[l].className="nr cl active1"};var sels=document.querySelectorAll(".nav select")[0];sels.onchange=function(e){for(var s=((e=e||window.event).target||e.srcElement).selectedIndex,a=0;a<nr.length;a++)nr[a].className="nr";nr[s].className="nr  active1"};