var wins;
var ties;
var loses;
var strw = localStorage.getItem("w");
var strt = localStorage.getItem("t");
var strl = localStorage.getItem("l");

function display(){
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("ties").innerHTML = ties;
	document.getElementById("loses").innerHTML = loses;
}

function startUp(){
	if(strw == null || strw == "null"){
		wins = 0;
		ties = 0;
		loses = 0;
	}else{
		wins = parseInt(strw);
		ties = parseInt(strt);
		loses = parseInt(strl);
	}
	display();
}

function letssee(){
	var choice = ["Rock", "Paper", "Scissors"];
	var x = Math.floor(Math.random() * 3);
	var ob = document.getElementById("result");
	var player;
	if(document.getElementById("rock").checked == true){
		player = 0;
	}else if(document.getElementById("papers").checked == true){
		player = 1;
	}else if(document.getElementById("scissors").checked == true){
		player = 2;
	}else{
		return;
	}
	var out;
	if((x + 1) % 3 == player){
		out = "You WIN";
		ob.style.color = "green";
		wins++;
		localStorage.setItem("w", wins);
	}else if(x == player){
		out = "It's a TIE"
		ob.style.color = "blue";
		ties++;
		localStorage.setItem("t", ties);
	}else{
		out = "You LOSE";
		ob.style.color = "red";
		loses++;
		localStorage.setItem("l", loses);
	}
	ob.innerHTML = "You chose " + choice[player] + ", AI chose " + choice[x] + "! " + out + "!";
	display();
	document.getElementById("rock").checked = false;
	document.getElementById("papers").checked = false;
	document.getElementById("scissors").checked = false;
}

function reset(){
	wins = 0;
	ties = 0;
	loses = 0;
	localStorage.setItem("w", wins);
	localStorage.setItem("t", ties);
	localStorage.setItem("l", loses);
	display();

}