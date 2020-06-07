var c=0;
function loadCat(){
	// document.getElementById('box').style.display="inline";
	var image = document.createElement('img');
	var div = document.getElementById('box');
	var link = document.createElement('div');
	link.id="first"+c;
	// document.getElementById(link.id).innerHTML+()
	link.setAttribute('onclick',"del(this.id);");

	image.src = "css/download.jpeg";
	link.appendChild(image);
	div.appendChild(link);
	c++;

}
function del(id){
	document.getElementById(id).style.display='none';
	// alert("image deleted")
	

}
// function delCats(id){
// 	document.getElementById(id).style.display="none";
// }


//challanging 2 coding....

function rpsGame(yourChoice){
	// console.log(yourChoice);
	var humnaChoice, botChoice;
	humnaChoice=yourChoice.id;
	botChoice=numberToChoice(randToRpsInt());
	var results = decidewinner(humnaChoice,botChoice);
	console.log(results);
	var message = finalMessage(results);//{message:"you won!",'color': 'green'}
	console.log(message)
	rpsforntEnd(humnaChoice,botChoice,message);
}
function randToRpsInt(){
	return Math.floor(Math.random()*3);
}
function numberToChoice(number){
	return ['rock','paper','scissors'][number];
}
function decidewinner(yourChoice,computerChoice){
	var rpsDatabase={
		'rock':{'scissors':1,'rock': 0.5, 'paper':0},
		'paper':{'rock': 1,'paper':0.5,'scissors':0},
		'scissors':{ 'paper':1,'scissors':0.5,'rock':0}
	}
	var youScore = rpsDatabase[yourChoice][computerChoice];
	var computerScrore= rpsDatabase[computerChoice][yourChoice];
	return [youScore,computerScrore];
}

function finalMessage(results){
	if(results[0]==1){
		return {'message':'you Won!!','color':'green'};
	}
	if(results[0]==0.5){
		return {'message':'Drow','color':'yellow'};
	}
	else{
		return {'message':'you Loss!!','color':'red'}
	}
}

function rpsforntEnd(humnaChoice,botChoice,finalMessage){
	var imageDatabase={
		'rock': document.getElementById('rock').src,
		'paper':document.getElementById('paper').src,
		'scissors':document.getElementById('scissors').src
	};
	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissors').remove();

    var humandiv = document.createElement('div');
    var botdiv= document.createElement('div');
    var message = document.createElement('div');
    var button  = document.createElement('div');
    
    button.setAttribute('id','btndiv');

    humandiv.innerHTML= "<img id='human' src = '"+imageDatabase[humnaChoice]+"'height=150 width= 150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>"
    message.innerHTML="<h1 id='message' style='color: "+finalMessage['color']+"; font-size: 60px; padding: 30px; '>" + finalMessage['message']+"</h1>"
    botdiv.innerHTML = "<img id='bot' src = '"+imageDatabase[botChoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>";
    button.innerHTML= "<button  class='btn btn-success' id='reset' onclick='reset()'>Restart</button>"
    document.getElementById('flex-box-rps-div').appendChild(humandiv);
    
    document.getElementById('flex-box-rps-div').appendChild(message)

    document.getElementById('flex-box-rps-div').appendChild(botdiv);
    document.getElementById('flex-box-rps-div').appendChild(button)
}
// by using template reuse of the same code
function reset(){
	// alert("reset is called");
	document.getElementById('human').remove();
	 document.getElementById('message').remove();
	 document.getElementById('bot').remove();
     document.getElementById('reset').remove();
    var temp= document.getElementsByTagName('template')[0];
    var clone = temp.content.cloneNode(true);
    document.getElementById('flex-box-rps-div').appendChild(clone);

}

//Challagne 3 javaScript starting....
let all_buttons=document.getElementsByTagName('button').value;
// let array=['manohar':'1','kavita':2,'prakash':3];
// console.log(array)
// console.log();

var copyAllButtons=document.getElementsByTagName('button');

console.log(all_buttons)
console.log(copyAllButtons)
function buttonColorChange(buttonValue){
	
if(buttonValue.value==='red'){
	buttonsRed();
}
else if(buttonValue.value==='green'){
    buttonGreen();
}
else if(buttonValue.value==='reset'){
   buttonReset();
}
else if(buttonValue.value==='random'){
	buttonRandom();
}
}
function buttonsRed(){
	for(let i=0;i<copyAllButtons.length;i++){
		// copyAllButtons[i].reset();
		copyAllButtons[i].setAttribute('style','background-color:red');
	}

}
function buttonGreen(){
	for(let i=0;i<copyAllButtons.length;i++){
		copyAllButtons[i].setAttribute('style','background-color:green')
	}
}
function buttonRandom(){
	l=['red','blue','red','yellow','green','orange']
	for(let i=0;i<copyAllButtons.length;i++){
		console.log(l[Math.floor(Math.random()*6)])
		copyAllButtons[i].setAttribute('style','background-color:'+l[Math.floor(Math.random()*6)]);
	}
}
function buttonReset(){
	for(let i=0;i<copyAllButtons.length;i++){
		copyAllButtons[i].setAttribute('style','xyz')
	}
}
