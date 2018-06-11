// gloabl variables
var score = 0;
var fallingImages = $('.falling');
var remainingTime = 30;
var fallSpeed = 30;
var playerPoints = null;

$('#player-one').click(function() {
  score = 0;
  playerPoints = $('.points1');
});

$('#player-two').click(function() {
  score = 0;
  playerPoints = $('.points2');
});

// run function for each cookie
// recieve one point per user's click

$('.falling').hide();
$.each($('.falling'), function(){

});

$('.falling.cookie').click(function(){
  $(this).hide();
    score++;
  playerPoints.text(score);
});

$('.falling.pepper').click(function(){
  $(this).hide();
    score--;
  playerPoints.text(score);
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
  };

// starts game
$('.start-button').click(startGame);

// reset game function
var resetGame = function(){
  $('.start-button').css('visibility', 'visible');
  score = 0;
  playerPoints.text(score);
  remainingTime = 30;
};

$('.play-again').click(resetGame);

var monster = {
  element: $('#blue-monster'),
  position: 0
};

var moveMonster = function(e) {
  // LEFT
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    monster.position -= 10;
    monster.element.css('left', monster.position + 'px');
    // RIGHT
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    monster.position += 10;
    monster.element.css('left', monster.position + 'px');
  }
};

$(window).keydown(moveMonster);
