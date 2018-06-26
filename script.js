// gloabl variables
var playerTurn = 'one';
var playerOneScore = 0;
var playerTwoScore = 0;
var fallingImages = $('.falling');
var remainingTime = 30;
var fallSpeed = 15;
var whichPlayerPointsBox = $('.points1');

var monster = {
  element: $('#blue-monster'),
  position: 0
};

// hides cookies and peppers to start
$('.falling').hide();
$('.reset').css('visibility', 'hidden');
$('.next-turn').css('visibility', 'hidden');

// lets user move monster
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

// run function for each cookie
// recieve one point per user's click
$('.falling.cookie').click(function(){
  $(this).hide();
  if (playerTurn === 'one') {
    console.log('anything');
    playerOneScore++;
    whichPlayerPointsBox.text(playerOneScore);
  } else {
    playerTwoScore++;
    whichPlayerPointsBox.text(playerTwoScore);
  };
});

// run function for each pepper - same as cookie
$('.falling.pepper').click(function(){
  $(this).hide();
  if (playerTurn === 'one') {
    playerOneScore--;
    whichPlayerPointsBox.text(playerOneScore);
  } else {
    playerTwoScore--;
    whichPlayerPointsBox.text(playerTwoScore);
  };
});

// checks for win only if player two has gone
var checkForWin = function() {
  if (playerTurn === 'two') {
    if (playerOneScore > playerTwoScore) {
      $('.winner').text('PLAYER ONE WINS!');
      $('.next-turn').css('visibility', 'hidden');
      $('.blue-monster').addClass('monster-jump');
    } else if (playerOneScore < playerTwoScore) {
      $('.winner').text('PLAYER TWO WINS!');
      $('.next-turn').css('visibility', 'hidden');
      $('.blue-monster').addClass('monster-jump');
    } else if (playerOneScore === playerTwoScore) {
      $('.winner').text('IT\'S A TIE');
      $('.next-turn').css('visibility', 'hidden');
      $('.blue-monster').addClass('monster-jump');
    }
  }
}

// function that starts timer
var startTimer = function () {
  var timer = setInterval(function() {
    remainingTime--;
    if (remainingTime <= 9) {
      $('.timer span').text('0' + remainingTime);
    } else {
      $('.timer span').text(remainingTime);
    }
    if (remainingTime <= 0) {
      clearInterval(timer);
      $('.falling').hide();
      $('.next-turn').css('visibility', 'visible');
      $('.reset').css('visibility', 'visible');
      checkForWin();
    };
  }, 1000);
};

// gets random number for cookie/pepper fall speed
var randomNum = function(max) {
  return Math.ceil(Math.random() * max);
};

// function to call startTimer
var startGame = function () {
  if (whichPlayerPointsBox) {
    startTimer()
    $('.start-button').css('visibility', 'hidden');
    $('.next-turn').css('visibility', 'hidden');
    $('.reset').css('visibility', 'hidden');
    $('.falling').show();
    // function that loops over every falling image
    fallingImages.each(function() {
      $(this).css('animation', 'fall ' + randomNum(fallSpeed) + 's infinite linear');
    });
  }
};

// second player's turn function
var nextTurn  = function() {
  $('.start-button').css('visibility', 'visible');
  playerTurn = 'two';
  whichPlayerPointsBox = $('.points2');
  remainingTime = 30;
  $('.timer span').text(remainingTime);
};

// reset game function
var resetGame = function() {
  $('.start-button').css('visibility', 'visible');
  $('.next-turn').css('visibility', 'hidden');
  playerTurn = 'one';
  playerOneScore = 0;
  playerTwoScore = 0;
  whichPlayerPointsBox.text(playerTwoScore);
  whichPlayerPointsBox = $('.points1');
  whichPlayerPointsBox.text(playerOneScore);
  remainingTime = 30;
  $('.timer span').text(remainingTime);
  $('.winner').text('');
  $('.blue-monster').removeClass('monster-jump');
};

// starts game
$('.start-button').click(startGame);
$(window).keydown(moveMonster);

// hide next turn button on startTimer
// show when time runs out
$('.next-turn').click(nextTurn);
$('.reset').click(resetGame);
