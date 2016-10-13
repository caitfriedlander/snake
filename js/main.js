//GLOBAL VARIABLES
var snake = [];
var apple = [];
var newSnakeHead;
var newHead;
var int;
var snakeSpeed;
var lost = false;
var isPaused;
var lastKnownSpeed;
snake.direction = null;

//START SCREEN CONDITIONS
$(function(){
  $("#gameScreen").hide();
  $("#pauseButton").hide();
  $("#unpauseButton").hide();
  $("#restart").hide();
  $("#gameOver").hide();
  $("#playButton").on("click", function(){
    $("#startScreen, #gameScreen").toggle();
    $("#playButton, #pauseButton").toggle();
    isPaused = false;
    fillSnake();
    fillApple();
    snakeSpeed = 200;
    lastKnownSpeed = snakeSpeed;
    animationStart();
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

//SCORE
function growScore(){
  $('#scoreboard').text(snake.length -1);
}

//PAUSE BUTTON
$("#pauseButton").on("click", function (e){
  $("#pauseButton, #unpauseButton").toggle();
  e.preventDefault();
  isPaused = true;
});

//UNPAUSE BUTTON
$("#unpauseButton").on("click", function (e){
  $("#unpauseButton, #pauseButton").toggle();
  e.preventDefault();
  isPaused = false;
});

//GAMEOVER
function youLose () {
  $("#gameScreen").hide();
  $("#gameOver").show();
  $("#pauseButton").hide();
  $("#restart").show();
  clearInterval(int);
}

//RESTART BUTTON
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
    snakeSpeed = lastKnownSpeed;
    generateNewSnake();
    fillSnake();
    clearApple();
    generateApple();
    fillApple();
    animationStart();
    $("#scoreboard").text('0000');
})

//NUMBER GENERATORS
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

//APPLE
function clearApple () {
  var row = apple[0];
  var column = apple[1];
  var currentSpace = (37 * row + column);
  $('.space').eq(currentSpace).css("background-image", "");
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
  $('.space').eq(currentSpace).css("background-image","url(assets/apple.png)");
}

//SNAKE
$(document).ready(function generateSnake() {
  newSnakeHead = [];
  newSnakeHead.push(getRandomX());
  newSnakeHead.push(getRandomY());
  snake.push(newSnakeHead);
})

function fillSnake() {
  $(".space").css("background-color", "")
  for (var i=0; i < snake.length; i++) {
    var row = snake[i][0];
    var column = snake[i][1];
    var currentSpace = (37 * row + column);
    $('.space').eq(currentSpace).css("background-color","green");
  }
}

//CHECK SNAKE BODY FOR MATCHES WITH SNAKE HEAD
function checkSnake () {
  for (var i = 1; i<snake.length; i++) {
    if (_.isEqual(snake[0], snake[i])) {
      return true;
      console.log("totally f'ed")
    }
  }
  return false;
}

//SNAKE GROW FUNCTION
function growSnake () {
  snake.unshift(apple);
  clearApple();
  var row = apple[0];
  var column = apple[1];
  var currentApple = (37 * row + column);
  $('.space').eq(currentApple).css("background-color","green");
  generateApple();
  growScore();
}

//SNAKE MOVE FUNCTION
function moveSnake () {
  snake.unshift(newHead);
  snake.pop();
  fillSnake();
  fillApple();
}

//SNAKE ANIMATION
function animationStart () {
  int = setInterval( function() {
    if(!isPaused) {
    var snakeHead = snake[0];
      if (snake.direction === "left") {
        newHead = [snakeHead[0], snakeHead[1]-1]
        if (newHead[0] === apple[0] && newHead[1] === apple[1]) {
          growSnake();
        } else if (newHead[1] < 0) {
          lost = true;
          youLose();
        } else {
          moveSnake();
        }
      if (checkSnake()) {
          lost = true;
          youLose();
        }
      }
      if (snake.direction === "up") {
        newHead = [snakeHead[0]-1, snakeHead[1]];
        if (newHead[0] === apple[0] && newHead[1] === apple[1]) {
          growSnake();
        } else if (newHead[0] < 0) {
          lost = true;
          youLose();
        } else if (checkSnake()) {
          lost = true;
          youLose();
        } else {
          moveSnake();
        }
      }
      if (snake.direction === "right") {
        newHead = [snakeHead[0], snakeHead[1]+1];
        if (newHead[0] === apple[0] && newHead[1] === apple[1]) {
          growSnake();
        } else if (newHead[1] > 36) {
          lost = true;
          youLose();
        } else if (checkSnake()) {
          lost = true;
          youLose();
        } else {
          moveSnake();
        }
      }
      if (snake.direction === "down") {
        newHead = [snakeHead[0]+1, snakeHead[1]];
        if (newHead[0] === apple[0] && newHead[1] === apple[1]) {
          growSnake();
        } else if (newHead[0] > 36) {
          lost = true;
          youLose();
        } else if (checkSnake()) {
          lost = true;
          youLose();
        } else {
          moveSnake()
        }
      }
    }
  },snakeSpeed);
}

//EVENT LISTENERS
$(document).keydown(function(e) {
  switch(e.which) {
    case 37: // left
    snake.direction = "left";
    break;
    case 38: // up
    snake.direction = "up";
    break;
    case 39: // right
    snake.direction = "right";
    break;
    case 40: // down
    snake.direction = "down";
    break;
    default: return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent scroll
});

//SPEED SELECTORS
$('.speed').click(function(e) {
 var howFast = $(this).attr('value');
 snakeSpeed = null;
 if (howFast === "slow") {
    lastKnownSpeed = 200;
    clearInterval(snakeSpeed);
    snakeSpeed = 200;
    animationStart();
    console.log('so slow')
   } else if (howFast === "medium"){
    lastKnownSpeed = 100;
    clearInterval(snakeSpeed);
    snakeSpeed = 100;
    animationStart();
    console.log('Im average')
   } else if (howFast === "fast"){
    lastKnownSpeed = 50;
    clearInterval(snakeSpeed);
    snakeSpeed = 50;
    animationStart();
    console.log('so fast')
  }
});


