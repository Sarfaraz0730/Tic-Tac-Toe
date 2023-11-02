let turnAudio =new Audio("turn.mp3")
let turn ="X"
let isGameover =false

// function to change the turn 
const changeTurn=()=>{
 return turn ==="X"?"0":"X"
}
// function to check value 

const checkWin =()=>{
    var boxText = document.getElementsByClassName("boxtext")
let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,5],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
wins.forEach(e=>{
    if((boxText[e[0]].innerText===boxText[e[1]].innerText ) && (boxText[e[2]].innerText===boxText[e[1]].innerText) && (boxText[e[0]].innerText !=="") ){
     document.querySelector(".info").innerText=boxText[e[0]].innerText + ` :  Won`;
     isGameover = true;
     document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="230px"
    }
})


}

const matchTied = ()=>{
    
    let boxText = document.getElementsByClassName("boxtext");
    let isTied = true;

    for (let i = 0; i < boxText.length; i++) {
        if (boxText[i].innerText === "") {
            isTied = false;
            break;
        }
    }

    if (isTied && !isGameover) {
        document.querySelector(".info").innerText = "Match Tied!";
        isGameover = true;
    }
}

// Game logic 
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(Element=>{

    let boxtext = Element.querySelector(".boxtext");
    Element.addEventListener("click", ()=>{
        if(boxtext.innerText ===""){
        boxtext.innerText= turn;
        turn = changeTurn();
         turnAudio.play()
         checkWin()
         matchTied()
         if(!isGameover){
            document.getElementsByClassName("info")[0].innerText ="Turn for : " +turn
         }
        }
    })


})

reset.addEventListener("click", (e)=>{
    let boxText = document.querySelectorAll(".boxtext");
    Array.from(boxText).forEach(element=>{
        element.innerText=""
    })
    turn ="X";
    isGameover=false;
    document.getElementsByClassName("info")[0].innerText ="Turn for : " +turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px"


})