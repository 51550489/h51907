"use strict";$(document).scroll(function(){50<=$(window).scrollTop()?$("header").css({position:"fixed",top:"0",left:"0","background-color":"gray"}):$(window).scrollTop()<50&&$("header").css({position:"fixed",top:"0",left:"0","background-color":"transparent"})}),setInterval(function(){$(".bgk_yuan .dian").animate({top:"60px",opacity:"0"},500).animate({top:"20px"},500,function(){$(".bgk_yuan .dian").css({top:"20px",opacity:"1"})})});var i=0;setInterval(function(){3==++i&&(i=0),2==i?($(".btn_yuan").children().eq(1).css("backgroundColor","orange"),$(".btn_yuan").children().eq(0).css("backgroundColor","gray")):($(".btn_yuan").children().eq(0).css("backgroundColor","orange"),$(".btn_yuan").children().eq(1).css("backgroundColor","gray")),$(".middle").animate({"margin-left":-400*i+"px"},2e3)},5e3),$(".btn_yuan li").click(function(){console.log(1),i++,i=$(this).index();var n=$(".active").index();n<i?($(".middle").animate({"margin-left":-400*i+"px"}),$(".btn_yuan").children().eq(1).css("backgroundColor","orange"),$(".btn_yuan").children().eq(0).css("backgroundColor","gray")):i<n&&$(".middle").animate({"margin-left":400*i+"px"}),$(".btn_yuan").children().eq(0).css("backgroundColor","orange"),$(".btn_yuan").children().eq(1).css("backgroundColor","gray")}),$(".our_menu .tit_table .nav1").click(function(){$("img").is(":animated")||(i=$(this).index(),console.log(i),$(".j_middle").animate({"margin-left":1200*-i+"px"},1e3))});