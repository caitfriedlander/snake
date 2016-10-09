console.log("snek")

//play button function that launches the game screen
$(function(){
    $("#gameScreen").hide();
    $("#playButton").on("click", function(){
        $("#startScreen, #gameScreen").toggle();
    });
});

//function to spawn a grid of divs for the game board
//use the array of arrays like cartesian coordinates to build a
//grid of divs
// var x = [ ['','','','','','','','','','','','','','','','','','','','','',''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['',x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,''],
//       ['','','','','','','','','','','','','','','','','','','','','',''] ]

//function to spawn the apple randomly using the x and y grid
