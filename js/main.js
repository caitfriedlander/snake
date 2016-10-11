var snake = [];
var apple = [];
var newSnakeHead;
snake.isASnake = false;

//BUTTONS
$(function(){
    $("#gameScreen").hide();
    $("#pauseButton").hide();
    $("#restart").hide();
    $("#gameOver").hide();
    $("#playButton").on("click", function(){
        $("#startScreen, #gameScreen").toggle();
        $("#playButton, #pauseButton").toggle();

        fillSnake();
        fillApple();
    });
});

//Restart
$("#restart").on("click", function (){
        $("#gameOver, #gameScreen").toggle();
        $("#restart, #pauseButton").toggle();
        function generateNewSnake() {
          newSnakeHead = [];
          newSnakeHead.push(getRandomX());
          newSnakeHead.push(getRandomY());
          snake  = [];
          snake.push(newSnakeHead);
      }
          generateNewSnake();
          fillSnake();
          generateApple();
          fillApple();
          //score 0
    })

//GRID
$(document).ready(function() {
    for(var x = 0; x < 37; x++) {
        for(var y = 0; y < 37; y++) {
            var space = $("<div class='space'></div>");
            space.appendTo('#gameScreen');
        }
    }
});

//SCORE
function growScore(){
   $('#scoreboard').text(snake.length -1);
}

//APPLE
function getRandomX(min, max) {
  min = Math.ceil(1);
  max = Math.floor(36);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomY(min, max) {
  min = Math.ceil(1);
  max = Math.floor(36);
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateApple() {
    apple = []
    apple.push(getRandomX());
    apple.push(getRandomY());
}

$(document).ready(generateApple)

function fillApple() {
        var row = apple[0];
        var column = apple[1];
        var currentSpace = (37 * row + column);
        $('.space').eq(currentSpace).css("background-color","red");
}

//SNAKE
$(document).ready(function generateSnake() {
    newSnakeHead = [];
    newSnakeHead.push(getRandomX());
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

// //directional animation
// function moveLeft(){
//     var snakeHead = snake[0];
//     $(snakeHead).animate(1000, function(){
//        if(/* keep moving */){
//            move_left(snakeHead);
//        }
//     }
// }

//loop through snake array
//not working right
var checkSnake = function () {
  for (var i = 1; i<snake.length; i++) {
    if (_.isEqual(snake[0], snake[i]) === true) {
      snake.isASnake = true;
    }
    break;
  }
}

//move and grow snake
$(document).keydown(function(e) {
    switch(e.which) { // snake.direction
        case 37: // left
        checkSnake();
        var snakeHead = snake[0];
        var newHead = [snakeHead[0], snakeHead[1]-1];
        if (newHead[0] === apple[0] && newHead[1] === apple[1]
            && snake.isASnake === false) {
            snake.unshift(apple);
            //still not working right
            $(snake).eq(0).css("background-color","black");
            generateApple();
            growScore();
        }
        else if (newHead[1] < 0 || snake.isASnake === true) {
          $(" #gameScreen, #gameOver").toggle();
          $("#pauseButton, #restart").toggle();
        }
        else {
            snake.unshift(newHead);
            snake.pop();
            fillSnake();
            fillApple();
        }
        break;

        case 38: // up
        checkSnake();
        var snakeHead = snake[0];
        var newHead = [snakeHead[0]-1, snakeHead[1]];
        if (newHead[0] === apple[0] && newHead[1] === apple[1]
            && snake.isASnake === false) {
            snake.unshift(apple);
            //still not working right
            $(snake).eq(0).css("background-color","black");
            generateApple();
            growScore();
        }
        else if (newHead[1] < 0 || snake.isASnake === true) {
          $(" #gameScreen, #gameOver").toggle();
          $("#pauseButton, #restart").toggle();
        }
        else {
            snake.unshift(newHead);
            snake.pop();
            fillSnake();
            fillApple();
        }
        break;
        break;

        case 39: // right
        checkSnake();
        var snakeHead = snake[0];
        var newHead = [snakeHead[0], snakeHead[1]+1];
        if (newHead[0] === apple[0] && newHead[1] === apple[1]
            && snake.isASnake === false) {
            snake.unshift(apple);
            //still not working right
            $(snake).eq(0).css("background-color","black");
            generateApple();
            growScore();
        }
        else if (newHead[1] < 0 || snake.isASnake === true) {
          $(" #gameScreen, #gameOver").toggle();
          $("#pauseButton, #restart").toggle();
        }
        else {
            snake.unshift(newHead);
            snake.pop();
            fillSnake();
            fillApple();
        }
        break;

        case 40: // down
        checkSnake();
        var snakeHead = snake[0];
        var newHead = [snakeHead[0]+1, snakeHead[1]];
        if (newHead[0] === apple[0] && newHead[1] === apple[1]
            && snake.isASnake === false) {
            snake.unshift(apple);
            //still not working right
            $(snake).eq(0).css("background-color","black");
            generateApple();
            growScore();
        }
        else if (newHead[1] < 0 || snake.isASnake === true) {
          $(" #gameScreen, #gameOver").toggle();
          $("#pauseButton, #restart").toggle();
        }
        else {
            snake.unshift(newHead);
            snake.pop();
            fillSnake();
            fillApple();
        }
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});



//lose states
//if snake head touches snake body function launch game over screen

