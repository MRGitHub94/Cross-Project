// JavaScript Document

var x=0;
var y=0;


$("document").ready(function() {	
	setTimeout(img1, 2000);
	setTimeout(img2, 1000);	
	setTimeout(banneranimate, 0);
	portfoliomouse();	       
});


	function img1(){
		if(x==-820){
			x=0;
			$("#conLatestWorksBelt").css("marginTop", "0px");
		}
		x=x-205;
		$("#conLatestWorksBelt").animate({"marginTop": x+"px"}, 1000);
		setTimeout(img1, 4000);
	}
	
	
	function img2(){
		y=y-3;
		if(y>-1915){
			document.getElementById("conClientsBeltImg").style.marginLeft=y+"px";
			//$("#conClientsBeltImg").css("marginLeft", y+"px");
			setTimeout(img2, 50);
		}else{
			y=0;
			img2();
		}
	}
	
function banneranimate(){	
		//function banner(){
			$("#cloud1").css({
				"marginTop": "332px",
				"marginLeft": "412px",
				"opacity": 0,
			});
			$("#cloud2").css({
				"marginTop": "330px",
				"marginLeft": "195px",
				"opacity": 0,
			});
			$("#cloud3").css({
				"marginTop": "335px",
				"marginLeft": "616px",
				"opacity": 0,
			});
			$("#bannerTxt1").css({
				"marginTop": "180px",
				"opacity": 0,
			});
			$("#cloud1").animate({
				"marginTop": "146px",
				"opacity": 1,
			}, 1000);
			setTimeout(banner2, 750);
			setTimeout(banner4, 1900);	  		
		//}
		
}
		
		function banner2(){
			setTimeout(banner3, 200);
			$("#cloud2").animate({
				"marginTop": "197px",
				"opacity": 0.5,
			}, 1000);				
		}
		
		function banner3(){
			$("#cloud3").animate({
				"marginTop": "129px",
				"opacity": 0.75,
			}, 1000);
		}
		
		function banner4(){
			cloudmove();
			$("#bannerTxt1").animate({
				"marginTop": "70px",
				"opacity": 1,
			}, 1000);
			setTimeout(banner5, 3000);		
		}
		
		function banner5(){
			$("#bannerTxt1").animate({
				"marginTop": "180px",
				"opacity": 0,
			}, 1000);	
			setTimeout(banner6, 1000);			
		}
		
		function banner6(){
			$("#bannerTxt2").animate({
				"marginTop": "70px",
				"opacity": 1,
			}, 1000);
			setTimeout(banner7, 3000);
		}
		
		function banner7(){
			$("#bannerTxt2").animate({
				"marginTop": "180px",
				"opacity": 0,
			}, 1000);	
			setTimeout(banner8, 1000);			
		}
		
		function banner8(){
			$("#bannerTxt3").animate({
				"marginTop": "70px",
				"opacity": 1,
			}, 1000);
			setTimeout(banner9, 3000);	
		}
		
		function banner9(){
			$("#bannerTxt3").animate({
				"marginTop": "180px",
				"opacity": 0,
			}, 1000);	
			setTimeout(banner10, 1000);			
		}
		
		function banner10(){
			$("#bannerTxt4").animate({
				"marginTop": "70px",
				"opacity": 1,
			}, 1000);
			setTimeout(banner11, 3000);	
		}
		
		function banner11(){
			$("#bannerTxt4").animate({
				"marginTop": "180px",
				"opacity": 0,
			}, 1000);	
			setTimeout(banner12, 1000);			
		}
		
		function banner12(){
			$("#cloud3").stop().animate({
				"marginTop": "335px",
				"opacity": 0,
			}, 1000);
			setTimeout(banner13, 200);	
		}
		
		function banner13(){
			$("#cloud2").stop().animate({
				"marginTop": "330px",
				"opacity": 0,
			}, 1000);	
			setTimeout(banner14, 200);				
		}
		
		function banner14(){
			$("#cloud1").stop().animate({
				"marginTop": "332px",
				"opacity": 0,
			}, 1000);
			setTimeout(banneranimate, 1500);					
		}
		
		function cloudmove(){
			$("#cloud1").animate({"marginLeft": "190px",}, 20000);
			$("#cloud2").animate({"marginLeft": "100px",}, 20000);
			$("#cloud3").animate({"marginLeft": "500px",}, 20000);
		}

	
//---------------------------------------portfolio script 
	
function portfoliomouse(){
	//When mouse rolls over  
    $(".portfolioVisitBox").mouseover(function(){  
		$(this).stop().animate({"opacity": 0.85}, 700);
    });  
  
    //When mouse is removed  
    $(".portfolioVisitBox").mouseout(function(){ 
		$(this).stop().animate({"opacity": 0}, 700);
    });	
}


//---------------------------------------form validate

var formErr = 0;

function val_name(){
	var valu = document.getElementById("formname").value;
	if((valu==null )||(valu=="")||(valu==" name")){
		document.getElementById("formname").style.borderColor="#FF0000";
		document.getElementById("formname").style.backgroundColor="#FE9CA4";
		formErr = 1;
	}else{
		document.getElementById("formName").style.borderColor="";
		document.getElementById("formName").style.backgroundColor="#fff";
		formErr = 0;
	}
} 
		
function val_mail(){
	var valu2 = document.getElementById("mail").value;
	if((valu2==null )||(valu2=="")||(valu2==" Email")){
		document.getElementById("mail").style.borderColor="#FF0000";
		document.getElementById("mail").style.backgroundColor="#FE9CA4";
		formErr = 1;
	}else{
		checkEmail();
	}
}

function val_msg(){
	var valu3 = document.getElementById("msg").value;
	if((valu3==null )||(valu3=="")||(valu3==" Massage")){
		document.getElementById("msg").style.borderColor="#FF0000";
		document.getElementById("msg").style.backgroundColor="#FE9CA4";
		formErr = 1;
	}else{
		document.getElementById("msg").style.borderColor="";
		document.getElementById("msg").style.backgroundColor="#fff";
		formErr = 0;
	}
}

function val_phone(){
	var valu4 = document.getElementById("phone").value;
	if((valu4==null )||(valu4 =="")||(valu4 ==" Phone")){
		document.getElementById("phone").style.borderColor="#FF0000";
		document.getElementById("phone").style.backgroundColor="#FE9CA4";
		formErr = 1;
	}else{
		document.getElementById("phone").style.borderColor="";
		document.getElementById("phone").style.backgroundColor="#fff";
		document.getElementById("phoneErr").style.visibility="hidden";
		formErr = 0;
	}
} 

function val_form(){
	val_name();
	val_mail();
	val_msg();
	val_phone();
	if(formErr>0){
		alert("Please fill all required fields!");
		return false;
	}	
}

function checkEmail() {
	var email = document.getElementById('mail');
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!filter.test(email.value)) {
		document.getElementById("mail").style.borderColor="#FF0000";
		document.getElementById("mail").style.backgroundColor="#FE9CA4";
		formErr = 1;
	}else{
		document.getElementById("mail").style.borderColor="";
		document.getElementById("mail").style.backgroundColor="#fff";
		formErr = 0;
	}
}

	
	
	