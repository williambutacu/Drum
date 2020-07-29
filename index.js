/*for (var i=0;i<3;i++){
function add(n1,n2){
return n1+n2;
}
function multiply(n1,n2){
return n1*n2;
}
function divide(n1,n2){
return n1/n2;
}
function substract(n1,n2){
return n1-n2;
}
function calculator(n1,n2,operator){
return operator(n1,n2);

var audio = new Audio('sounds/tom-4.mp3');
audio.play();
}
*/
for (var i=0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll("button")[i].addEventListener("click", onClick);
  function onClick(){
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }
}
document.addEventListener("keydown",function(event){
makeSound(event.key);
buttonAnimation(event.key);

})
function makeSound(key){
  switch (key) {
    case "w":
      var tom1= new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
      case "a":
        var tom2= new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
    case "s":
    var tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case "d":
    var tom4=new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    case "j":
    var snare=new Audio("sounds/snare.mp3");
    snare.play();
    break;
    case "k":
    var crash=new Audio("sounds/crash.mp3");
    crash.play();
    break;
    case "l":
    var kickBass=new Audio("sounds/kick-bass.mp3");
    kickBass.play();
    break;

    default:console.log(buttonInnerHTML);

  }
}
function buttonAnimation(currentKey){
  var activeButton= document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");},
    100);
  }
