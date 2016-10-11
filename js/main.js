var snake = [];
var apple = [];

//BUTTONS
$(function(){
    $("#gameScreen").hide();
    $("#pauseButton").hide();
    $("#playButton").on("click", function(){
        $("#startScreen, #gameScreen").toggle();
        $("#playButton, #pauseButton").toggle();

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

//if apple = [] spawn a new apple

//SNAKE
$(document).ready(function generateSnake() {
    var newSnakeHead = [];
    function getRandomX(min, max) {
      min = Math.ceil(0);
      max = Math.floor(37);
      return Math.floor(Math.random() * (max - min)) + min;
    };
    newSnakeHead.push(getRandomX());
    function getRandomY(min, max) {
      min = Math.ceil(0);
      max = Math.floor(37);
      return Math.floor(Math.random() * (max - min)) + min;
    };
    newSnakeHead.push(getRandomY());
    snake.push(newSnakeHead);
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

//move and grow snake
//still in progress
function moveSnake () {
    //on upKeyPress {
    var snakeHead = snake[0];
    var i = snakeHead[1];
    var newHead = snakeHead[0]-1;
    // if (newHead === apple[0] && i === apple[1]) {
    //     snake.unshift([apple]);
    // }
    // else {
        snake.unshift([i, newHead]);
        snake.pop();
        for (var i=0; i < snake.length; i++) {
            var row = snake[i][0];
            var column = snake[i][1];
            var currentSpace = (37 * row + column);
            $('.space').eq(currentSpace).css("background-color","black");
        }
    // }
    //}
    // //on downKeyPress {
    // var snakeHead = snake[0];
    // var i = snakeHead[1];
    // var newHead = snakeHead[0]+1;
    // if ([newHead, i] === apple) {
    //     snake.unshift([apple]);
    // }
    // else {
    //     snake.pop();
    //     snake.unshift([i, newHead]);
    // }
    // //}
    // //on leftKeyPress {
    // var snakeHead = snake[0];
    // var i = snakeHead[0];
    // var newHead = snakeHead[1]-1;
    // if ([i, newHead] === apple) {
    //     snake.unshift([apple]);
    // }
    // else {
    //     snake.pop();
    //     snake.unshift([i, newHead]);
    // }
    // //}
    // //on rightKeyPress {
    // var snakeHead = snake[0];
    // var i = snakeHead[0];
    // var newHead = snakeHead[1]+1;
    // if ([i, newHead] === apple) {
    //     snake.unshift([apple]);
    // }
    // else {
    //     snake.pop();
    //     snake.unshift([i, newHead]);
    // }
    // //}
}


//make all cubes attached to the snake follow the same motion as the head

//function to move the cube around the grid using the arrow keys


//lose states
//if snake head touches wall div function launch game over screen
//if snake head touches snake body function launch game over screen

