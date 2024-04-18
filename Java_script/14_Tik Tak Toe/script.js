const boxes = document.getElementsByClassName(box);
let win = false;
Currentplayer = "O";

function printbox(x){ 
if(boxes[x].innerHTML == "" && win != true) {
  boxes[x].innerHTML = Currentplayer;
    
  if(Currentplayer == "X" && win != true){
    Currentplayer = "O";
  }
else if(Currentplayer == "O" && win != true)
  Currentplayer = "X";
}
}

