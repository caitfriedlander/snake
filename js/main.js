console.log("snek");
//var y = grid[i]
//var x = grid[i][i]
//play button function that launches the game screen
// var snake = [[2,3],
//              [2,4],
//              [2,5],
//              [2,6],
//              [2,7],
//              [1,7]]
var snake = [];
var apple = [];

//BUTTONS
$(function(){
    $("#gameScreen").hide();
    $("#pauseButton").hide();
    $("#playButton").on("click", function(){
        $("#startScreen, #gameScreen").toggle();
        $("#playButton, #pauseButton").toggle();
        //function to spawn the apple randomly using the x and y grid
        //function to make the starter snake head appear in the same spot
        //on start every time
        fillSnake();
        fillApple();
    });
});

//GRID
$(document).ready(function() {
    for(var x = 0; x < 37; x++) {
        for(var y = 0; y < 37; y++) {
            var space = $("<div class='space'></div>");
            space.appendTo('#gameScreen');
        }
    }
});

//SNAKE
$(document).ready(function generateSnake() {
    var snakeHead = [];
    function getRandomX(min, max) {
      min = Math.ceil(0);
      max = Math.floor(37);
      return Math.floor(Math.random() * (max - min)) + min;
    };
    snakeHead.push(getRandomX());
    function getRandomY(min, max) {
      min = Math.ceil(0);
      max = Math.floor(37);
      return Math.floor(Math.random() * (max - min)) + min;
    };
    snakeHead.push(getRandomY());
    snake.push(snakeHead);
})

function fillSnake() {
    $(".space").css("background-color", "#EAEEE6")
    for (var i=0; i < snake.length; i++) {
        var row = snake[i][0];
        var column = snake[i][1];
        var currentSpace = (37 * row + column);
        $('.space').eq(currentSpace).css("background-color","black");
    }
}

//APPLE
$(document).ready(function generateApple() {
    function getRandomX(min, max) {
      min = Math.ceil(0);
      max = Math.floor(37);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    apple.push(getRandomX())
    function getRandomY(min, max) {
      min = Math.ceil(0);
      max = Math.floor(37);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    apple.push(getRandomY())
})

function fillApple() {
        var row = apple[0];
        var column = apple[1];
        var currentSpace = (37 * row + column);
        $('.space').eq(currentSpace).css("background-color","red");
}


//function to move the cube around the grid using the arrow keys
//make all cubes attached to the snake follow the same motion as the head

//function to add a block to the end of the snake once the apple has been eaten

//lose states
//if snake head touches wall div function launch game over screen
//if snake head touches snake body function launch game over screen

