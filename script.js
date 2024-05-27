let newGameBtn = document.querySelector(".newGame-btn");
let resetBtn = document.querySelector(".reset-btn");
let boxes = Array.from(document.querySelectorAll(".box"));
let h1 = document.querySelector("h1");

let playerName = prompt("Enter Player Name : ");
let turnX = true;
let count = 0;
let gameOver = false;

boxes.forEach(box => {
    box.addEventListener("click",()=>{
        if(!box.innerText && !gameOver){
            if(turnX){
                box.innerText = "X";
                box.classList.add("X");
            }else{
                box.innerText = "O";
                box.classList.add("O");
            }
            count++;
            turnX=!turnX;
            checkDraw();
            winner();
        }
        return count;
    })
});

function checkDraw(){
    if(count==9 && !gameOver){
        h1.innerText="This game ended in Draw";
        gameOver = true;
    }
}

const forResetGame = () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.classList.remove("X","O");
    })
    turnX = true;
    count = 0; 
    h1.innerText = "Made by Muhammad Muntazir Mehdi";
    gameOver = false;
}
newGameBtn.addEventListener("click",forResetGame);
resetBtn.addEventListener("click",forResetGame);

const arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [6,4,2]
];

let winner = () => {
    for(let pattern of arr){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        if(posVal1 !=""&& posVal1==posVal2 && posVal2==posVal3){
                showWinner(posVal1);
                gameOver=true;
                return;
        };
    }
};

let showWinner = (winner) => {
    h1.innerText = `Congratulations ${winner}! You're the Winner`; 
}
winner();