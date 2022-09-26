//game const and varibles

let inputDir = {x: 0, y: 0};
const  foodSound = new Audio("music/food.mp3");
const  gameOver = new Audio("music/gameover.mp3");
const  moveSound = new Audio("music/move.mp3");
const  musicSound = new Audio("music/music.mp3");
let speed=2;
let score =0;
let lastPaintTime=0;
let snakeArr = [
    {x:13, y:15}
];
food= {x:6,y:7};



// game functions
function main(ctime)
{
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000 < 1/speed)
    {return;}
    lastPaintTime=ctime;
    gameEngine();
    
}
function isCollide(sarr)
{
    return false;
}
function gameEngine()
{
    //part:1 upadting the snake array and food
     if(isCollide(snakeArr))
     {
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x: 0, y: 0};
        alert("Game Over! press any key to start again!");
        snakeArr = [{x:13, y:15}];
        musicSound.play();
        score =0;

     }

     //if you ave eaten the food, increment the score and regenerate the food
     if(snakeArr[0].y===food.y && snakeArr[0].x===food.x)
     {
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y})
     }










    //part:2 render the snake and food
    //Display Snake
    //borad.innerHTML="";
    board.innerHTML="";
    snakeArr.forEach((e,index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        
        if(index===0)
        {
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });

    //Display of food
    foodElement=document.createElement('div');
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

}
//main logic starts here
window.requestAnimationFrame(main);
window.addEventListener('keydown', e=>{
    inputDir = {x:0,y:1}    //strat the game
    moveSound.play();
    switch(e.key)
    {
        case "ArrowUp":
            inputDir.x=0;
            inputDir.y=-1;
            break;
        case "ArrowDown":
            inputDir.x=0;
            inputDir.y=1;
            break;
        case "ArrowLeft":
            inputDir.x=-1;
            inputDir.y=0;
            break;
        case "ArrowRight":
            inputDir.x=1;
            inputDir.y=0;
            break;
        
    }
})