	$(document).scroll(() => {
		if($(window).scrollTop() >=50) {
			$("header").css({
				"position": "fixed",
				"top": "0",
				"left": "0",
				"background-color":"gray",
			})
//			$("header").stop().animate({
//				"top": "0"
//			}, 1000)
		} 
		else if($(window).scrollTop() < 50) {
			$("header").css({
				"position": "fixed",
				"top": "0",
				"left": "0",
				"background-color":"transparent"
				
			})
		}
	})
	

setInterval(()=>{
	$(".bgk_yuan .dian").animate({
		"top":"60px",
		"opacity":"0",
	},500).animate({
		"top":"20px",
	},500,()=>{
		$(".bgk_yuan .dian").css({
			"top":"20px",
			"opacity":"1",
		})
	})
})

var i=0;
setInterval(()=>{	
	i++;
	if(i==3){
		i=0; 
	}
	if(i==2){
		$(".btn_yuan").children().eq(1).css("backgroundColor","orange");
		$(".btn_yuan").children().eq(0).css("backgroundColor","gray");
	}else{
		$(".btn_yuan").children().eq(0).css("backgroundColor","orange");
		$(".btn_yuan").children().eq(1).css("backgroundColor","gray");	
	}
		
	$(".middle").animate({
		"margin-left":-400*i+"px",
	},2000)
},5000)


$(".btn_yuan li").click(function() {
	console.log(1)
//	if(!$("img").is(":animated")) {
//		var target = e.target;
		i++;
		i = $(this).index();
		var oldi = $(".active").index();
		if(i > oldi) {
			$(".middle").animate({
				"margin-left": -400 * i + "px",
			})
			$(".btn_yuan").children().eq(1).css("backgroundColor","orange");
			$(".btn_yuan").children().eq(0).css("backgroundColor","gray");
		} else if(i < oldi) {
			$(".middle").animate({
				"margin-left": +400 * i + "px",
			})
		}
			$(".btn_yuan").children().eq(0).css("backgroundColor","orange");
			$(".btn_yuan").children().eq(1).css("backgroundColor","gray");
//	}

})


$(".our_menu .tit_table .nav1").click(function (){
//	var target = e.target;
	if(!$("img").is(":animated")) {
		i = $(this).index();
			console.log(i)
			$(".j_middle").animate({
			"margin-left": 1200 * -i + "px",
		},1000)
	}
})

