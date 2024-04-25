let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#R-btn");
let newBtn = document.querySelector("#N-btn");
let allButtons =  document.querySelectorAll(".buttons");
let msg =  document.querySelector("#msg");
let turn0 = true;
let boxCount = 0;
let winner = "";

const winPattern = [

    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {

        turn0 = true;
        enableBoxes();
        msg.classList.add("hide");        

};


boxes.forEach( box => {

    box.addEventListener("click", () => {

      if(turn0){

        box.innerText = "0";
        turn0 = false;

      }else{
        box.innerText = "x";
        turn0 = true;
      }
      box.disabled = true;
      boxCount++;
      checkWinner();
  });

});

const disableBoxes = () =>{

            for(let box of boxes){

                box.disabled = true;

            }
}

const enableBoxes = () =>{

          for(let box of boxes){

            box.disabled = false;
            box.innerText = "";
          }
          
}


const  showWinner = (winner) => {

            msg.innerText = `Winner, Winner Cheken dinner ${winner}`;
            allButtons.forEach(button => button.classList.remove("hide"));
            disableBoxes();
}

const  showDraw = () => {
  msg.innerText = `GAME DRAW!`;
  allButtons.forEach(button => button.classList.remove("hide"));
}

const checkWinner = () => {

      for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !=="" &&  pos2 !== "" && pos3 !== ""){

            if(pos1 == pos2 && pos2 == pos3){
              console.log("winner", pos1);
              winner = pos1;
              showWinner(winner);
            }
        }
      }
      if(boxCount == 9 && winner === ""){
        console.log('DRAW');
        showDraw();
      }
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);

