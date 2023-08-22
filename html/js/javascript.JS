function changetoblue(){
var checkbox = document.getElementById("blue");
var x=document.getElementsByClassName("textc");
if(checkbox.checked==true){
	for(var i = 0; i < x.length; i++){
		x[i].style.color="blue";
	}
}

else if(checkbox.checked==false){
	for(var i = 0; i < x.length; i++){
		x[i].style.color="black";
	}
}

}


function changetored(){
var checkbox = document.getElementById("red");
var x=document.getElementsByClassName("textc");
if(checkbox.checked==true){
	for(var i = 0; i < x.length; i++){
		x[i].style.color="red";
	}
}

else if(checkbox.checked==false){
	for(var i = 0; i < x.length; i++){
		x[i].style.color="black";
	}
}

}



function changetoyellow(){
var checkbox = document.getElementById("yellow");
var x=document.getElementsByClassName("textc");
if(checkbox.checked==true){
	for(var i = 0; i < x.length; i++){
		x[i].style.color="yellow";
	}
}

else if(checkbox.checked==false){
	for(var i = 0; i < x.length; i++){
		x[i].style.color="black";
	}
}

}



function changetogreen(){
var checkbox = document.getElementById("green");
var x=document.getElementsByClassName("textc");
if(checkbox.checked==true){
	for(var i = 0; i < x.length; i++){
		x[i].style.color="green";
	}
}

else if(checkbox.checked==false){
	for(var i = 0; i < x.length; i++){
		x[i].style.color="black";
	}
}

}




  


function changetoblue1(){
var checkbox = document.getElementById("blue2");
if(checkbox.checked==true){
document.body.style.background="blue";
}
else if(checkbox.checked==false){
document.body.style.background="url('images/bc.jpg')";
}
}



function changetored2(){
var checkbox = document.getElementById("red2");
if(checkbox.checked==true){
document.body.style.background="red";
}
else if(checkbox.checked==false){
document.body.style.background="url('images/bc.jpg')";
}
}



function changetoyellow3(){
var checkbox = document.getElementById("yellow2");
if(checkbox.checked==true){
document.body.style.background="yellow";
}
else if(checkbox.checked==false){
document.body.style.background="url('images/bc.jpg')";
}
}



function changetogreen4(){
var checkbox = document.getElementById("green2");
if(checkbox.checked==true){
document.body.style.background="green";
}
else if(checkbox.checked==false){
document.body.style.background="url('images/bc.jpg')";
}
}