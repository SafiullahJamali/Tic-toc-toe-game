let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#R-btn");

let turn0 = true;

const winPattern = [

    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 6],
    [6, 7, 8],
];

boxes.forEach((box) => {

    box.addEventListener("click", () => {
    
      // console.log("you clicked box");
      if(turn0){

        box.innerText = "0";
        turn0 = false;

      }else{
        box.innerText = "x";
        turn0 = true;
      }
      box.disabled = true;

      checkwinner();
  });

});

const checkwinner = () => {

      for(let pattern of winPattern){

        let pos1 =boxes[pattern[0]].innerText;
        let pos2 =boxes[pattern[1]].innerText;
        let pos3 =boxes[pattern[2]].innerText;

        if(pos1 != "" &&  pos2 != "" && pos3 != ""){

            if(pos1 == pos2 && pos2 == pos3){

              console.log("winner", pos1);
            }
        }
      }

};
