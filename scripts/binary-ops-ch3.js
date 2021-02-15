"use strict";

function and() {
	var a = $("#A").val();
	var b = $("#B").val();

	if(a==b && a!=0){
		$("#outputDisplay").html("1");
	}
	else{
		$("#outputDisplay").html("0");
	};
};
$("#btn1").on("click", and);



function or() {
	var a = $("#A").val();
	var b = $("#B").val();

	if(a==1 || b==1){
		$("#outputDisplay").html("1");
	}
	else{
		$("#outputDisplay").html("0");
	};
};
$("#btn2").on("click", or);



function not() {
	var a = $("#A").val();

	if(a!=1){
		$("#outputDisplay").html("1");
	}
	else{
		$("#outputDisplay").html("0");
	};
};
$("#btn3").on("click", not);



function xor() {
	var a = $("#A").val();
	var b = $("#B").val();

	if((a==1 || b==1)&&(a!=b)){
		$("#outputDisplay").html("1");
	}
	else{
		$("#outputDisplay").html("0");
	};
};
$("#btn4").on("click", xor);