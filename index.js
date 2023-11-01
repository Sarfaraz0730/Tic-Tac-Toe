console.log("welcome to tic tac toe")

let turnAudio =new Audio("turn.mp3")
// let turnAudio =new Audio("turn.pm3")
// let gameover =new Audio("gameovermp3")
// console.log("turnAudio", turnAudio)
console.log("turnAudio", turnAudio)

// console.log("gameover", gameover)

let turn ="X"

// function to change the turn 
const changeTurn=()=>{
 return turn ==="X"?"0":"X"
}
// function to check value 

const checkWin =()=>{

}


// Game logic 
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(Element=>{
    console.log("boxes ",boxes)
    let boxtext = Element.querySelector(".boxtext");
    Element.addEventListener("click", ()=>{
        if(boxtext.innerText ===""){
        boxtext.innerText= turn;
         changeTurn();
         turnAudio.play()
         checkWin()
         document.getElementsByClassName("info")[0].innerText ="Turn for : " +turn
        }
    })
console.log("boxtext")

})