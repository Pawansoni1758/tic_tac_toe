let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#rstbtn");
let newgame = document.querySelector(".newgame");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");

let turn0 = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],  
]

const resetgame = () => {
    turn0 = true;
    enabledbox();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("button was clicked");
        if(turn0)
        {
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledbox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledbox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation Winner Is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledbox();

}
const checkWinner = () => {

    for(let pattern of winpattern){
        let pos1 =  boxes[pattern[0]].innerText;
        let pos2 =  boxes[pattern[1]].innerText;
        let pos3 =  boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
    }
};

newgame.addEventListener("click",resetgame);
rstbtn.addEventListener("click",resetgame);