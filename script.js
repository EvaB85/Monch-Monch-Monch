// gloabl variables
var score = 0;
var cookies = [];
var remainingTime = 10;
// var cookieImage = src="images/cookie-monster-empty.png"


$('.s').css('visibility', 'visible');

// get document ready
// run function for each cookie
// recieve one point per user's click
$(document).ready(function(){
  $('.s').hide();
  $.each($('.s'), function(){
});
  $(".s").click(function(){
    $(this).hide();
      score++;
    $('.points').text(score);
    });
});

var endGame = function() {
  if (score >= 10) {
    console.log("YOU WIN!");
  } else {
  console.log("YOU'RE A LOSER!")
  }
  // console.log('HEY this is the end!');
};

// function that starts timer
var startTimer = function () {
  $('.s').show();
  $('.s').css("animation", "fall 15s infinite linear");
  var timer = setInterval(function() {
    remainingTime--;
    $('.timer span').text(remainingTime);
    if (remainingTime <= 0) {
      clearInterval(timer);
      // console.log(clearInterval);
      endGame();
    };
  }, 1000);
};


// function to call startTimer
var startGame = function () {
  startTimer()
    $('.start-button').css('visibility', 'hidden');

    // NEEDS TO WORK BROKEN....
    $('.image').css('background-image', cookieImage);
  };

// starts game
$('.start-button').click(startGame);


// blue-monster's position set to zero
    var monster = {
      element: $('#blue-monster'),
      position: 0
    };


// reset game function
var resetGame = function(){
  $('.start-button').css('visibility', 'visible');
  score = 0;
  $('.points').text(score);
  remainingTime = 10;
  $('.s').show();
  // cookies to start falling
  console.log("reset Game!");
};

$('.reset-button').click(resetGame);






// Original game idea, old code may remove, haven't decided yet
// function that allows user to move blue-monster to move left and right
    var moveMonster = function(e) {
      // does the event key property equal left?
      console.log("move monster function")
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        monster.position -= 10;
        monster.element.css("left", monster.position + "px");
        console.log("moveMonster");
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        monster.position += 10;
        monster.element.css("left", monster.position + "px");
        console.log('moveMonster right')
      }
    };

    // $(window).on('keydown', moveMonster);
    $(window).keydown(moveMonster);


    // if time permits, use array to clean up css for each cookie
        // .cookie1 {
        //   position: absolute;
        //   /* top: 15vh; */
        //   left: 15vw;
        //   height: 80px;
        //   width: 80px;
        //   background: red;
        //   animation-delay: 4.2s;
        //   border-radius: 50%;
        // }
