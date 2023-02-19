console.log("app.js loaded")
array = []
output = ['rock','paper','scissors']
guess = output[Math.floor(Math.random()*3)]
let incorrectDiv = document.createElement("div");
incorrectDiv.id = 'guess'
incorrectDiv.textContent = guess + ", you lost";

document.querySelector(".rock").addEventListener("click", () => {
    
  
    if(array !== []){
        array.pop();
    }
    rockrules();
    
});
document.querySelector(".paper").addEventListener("click", () => {
    if(array !== []){
        array.pop();
    }
    paper();
});
document.querySelector(".scissors").addEventListener("click", () => {
    if(array !== []){
        array.pop();
    }
    scissors();
});

function rockrules(){
     
    array.push('rock')
	
    if(array[0]== "rock" && guess == "rock" ){
        let outputdiv = document.createElement("div");
        outputdiv.textContent = "Tie, it is " + guess
        document.querySelector("body").appendChild(outputdiv);
	
    }
    else if(array[0]== "rock" && guess == "scissors"  ){
        let outputdiv = document.createElement("div");
        outputdiv.textContent = "Won, it is " + guess
        document.querySelector("body").appendChild(outputdiv);
    }
    else{
        let outputdiv = document.createElement("div");
        outputdiv.textContent = "Lost, it is " + guess 
        document.querySelector("body").appendChild(outputdiv);
    }

	
	
}
function paper(){
    array.push('paper')
    if(array[0]== "paper" && guess == "paper" ){
        let outputdiv = document.createElement("div");
        outputdiv.textContent = "Tie, it is " + guess
        document.querySelector("body").appendChild(outputdiv);
    }
    else if(array[0]== "paper" && guess == "rock"  ){
        let outputdiv = document.createElement("div");
        outputdiv.textContent = "Won, it is " + guess
        document.querySelector("body").appendChild(outputdiv);
    }
    else{
        let outputdiv = document.createElement("div");
        outputdiv.textContent = "Lost, it is " + guess 
        document.querySelector("body").appendChild(outputdiv);
    }
}
function scissors(){
    array.push('scissors')
    if(array[0]== "scissors" && guess == "scissors" ){
        let outputdiv = document.createElement("div");
        outputdiv.textContent = "Tie, it is " + guess
        document.querySelector("body").appendChild(outputdiv);
    }
    else if(array[0]== "scissors" && guess == "paper"  ){
        let outputdiv = document.createElement("div");
        outputdiv.textContent = "Won, it is " + guess
        document.querySelector("body").appendChild(outputdiv);
    }
    else{
        let outputdiv = document.createElement("div");
        outputdiv.textContent = "Lost, it is " + guess 
        document.querySelector("body").appendChild(outputdiv);
    }
}
function reset(){
location.reload();
}

