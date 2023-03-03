var character=document.getElementById("character");
var block=document.getElementById("block");
var content = document.getElementById("content");
function jump(){
    if(character.classList!="animate"){
    character.classList.add('animate');
    }
    setTimeout(function(){
    character.classList.remove('animate');
    },500);
}


var checkdead=setInterval(function(){
   var characterTop=   parseInt(  window.getComputedStyle(character).getPropertyValue("top"));
   var blockleft=   parseInt(  window.getComputedStyle(block).getPropertyValue("left"));

   if(blockleft<27 && blockleft>0 && characterTop>=340){
    
    content.innerText=`Restart the game to play again.`;
    alert("You have lost the game..");
    block.style.animation="none";
    block.style.display="none";
   }
},10)

function restart(){
    location.reload();
    
}