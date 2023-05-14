var message=0;
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;
var l=0;
function listen(){
   
    document.getElementById("speak").style.animationPlayState="running"
    recognition.start();
    setTimeout(function(){document.getElementById("speak").style.animationPlayState="paused"},4000)
   
  
}
function preload(){
    img=loadImage("apple.jpeg")
}

function setup(){
    canvas=createCanvas(1300, 500);
    canvas.position(70,150)
    
    
  
    } 

recognition.onresult = function(event){
    console.log(event);
    message = event.results[0][0].transcript;
    document.getElementById("ans").innerHTML=message
    
    
    
    
    
}  

function draw(){
    console.log(message)
  if(l<message){
    x=Math.floor(Math.random() * 1300) + 1;
    y=Math.floor(Math.random() * 500) + 1;
    image(img,x,y,50,50)
    l++
}
if(l==message){
    l=0;
    message=0;
}
}
