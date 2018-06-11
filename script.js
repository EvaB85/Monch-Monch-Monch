// gloabl variables
var score = 0;
var fallingImages = $('.falling');
var remainingTime = 30;
var fallSpeed = 30;
var playerPoints = null;
// var cookieImage = src="images/cookie-monster-empty.png"

$('#player-one').click(function() {
  score = 0;
  playerPoints = $('.points1');

});

$('#player-two').click(function() {
  score = 0;
  playerPoints = $('.points2');
});


// get document ready
// run function for each cookie
// recieve one point per user's click
$(document).ready(function(){
  $('.falling').hide();
  $.each($('.falling'), function(){
});
  $('.falling').click(function(){
    $(this).hide();
      score++;
    playerPoints.text(score);
    });
});

var randomNum = function(max) {
  return Math.ceil(Math.random() * max);
};

var endGame = function() {
  if (score >= 10) {
    console.log('YOU WIN!');
    $('.blue-monster').addClass('monster-jump');
  } else {
  console.log('TRY AGAIN!')
  }
  // console.log('HEY this is the end!');
};

// function that starts timer
var startTimer = function () {
  $('.falling').show();
  // $('.cookie1').css('animation', 'fall ' + randomNum(12) + 's infinite linear');
  // for (let i = 0; i < fallingImages.length; i++) {
    // console.log(fallingImages[i]);
    // fallingImages[i].css('animation', 'fall ' + randomNum(12) + 's infinite linear');
  // };

  // function that loops over every falling image
  fallingImages.each(function() {
    $(this).css('animation', 'fall ' + randomNum(fallSpeed) + 's infinite linear');
  });
  var timer = setInterval(function() {
    remainingTime--;
    $('.timer span').text(remainingTime);
    if (remainingTime <= 0) {
      clearInterval(timer);
      $('.falling').hide();
      // console.log(clearInterval);
      endGame();
      $('.play-again').css('visibility', 'visible');
    };
  }, 1000);
};



// function to call startTimer
var startGame = function () {
  startTimer()
    $('.start-button').css('visibility', 'hidden');
    $('.play-again').css('visibility', 'hidden');
    // NEEDS TO WORK BROKEN....
    // $('.image').css('background-image', cookieImage);
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
  playerPoints.text(score);
  remainingTime = 30;
  // $('.s').show();
  // cookies to start falling
  console.log('reset Game!');
};

$('.play-again').click(resetGame);






// Original game idea, old code may remove, haven't decided yet
// function that allows user to move blue-monster to move left and right
    var moveMonster = function(e) {
      // does the event key property equal left?
      console.log('move monster function')
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        monster.position -= 10;
        monster.element.css('left', monster.position + 'px');
        console.log('moveMonster');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        monster.position += 10;
        monster.element.css('left', monster.position + 'px');
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
