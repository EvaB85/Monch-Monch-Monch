// gloabl variables
var score = 0;
var fallingImages = $('.falling');
var remainingTime = 5;
var fallSpeed = 30;
var playerPoints = null;
var isGameActive = false;

$('#player-one').click(function() {
  if (!isGameActive) {
    score = 0;
    playerPoints = $('.points1');
    playerPoints.text('0');
  }
});

$('#player-two').click(function() {
  if (!isGameActive) {
    score = 0;
    playerPoints = $('.points2');
  }
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

// var selectBox = function(){
//   if (playerPoints) {
//     $('#player-one').click(function() {
//       $('#player-one').css('color', 'plum');
//     }
//   } else {
//   };

  //
  // $("button").click(function(){
  //     $("p").css("color", "red");
  // });


// function to call startTimer
var startGame = function () {
  if (playerPoints) {
    isGameActive = true;
    startTimer()
    $('.start-button').css('visibility', 'hidden');
    $('.play-again').css('visibility', 'hidden');
    $('.falling').show();
    // function that loops over every falling image
    fallingImages.each(function() {
      $(this).css('animation', 'fall ' + randomNum(fallSpeed) + 's infinite linear');
    });
  }
};

// starts game
$('.start-button').click(startGame);

// reset game function
var resetGame = function(){
  $('.start-button').css('visibility', 'visible');
  isGameActive = false;
  score = 0;
  // playerPoints.text(score);
  playerPoints = null;
  remainingTime = 30;
  // add text to DOM to update time
};

$('.play-again').click(resetGame);

// var checkEndGame = function () {
//   if ('#player-one.points1').text === '#player-two.points2').text {
//     // ADD MODAL PLAYER ONE WINS
//   } else if () {
// // ADD MODAL PLAYER TWO WINS
//   } else () {
//   // ADD MODAL TIE GAME
//   }
// };
//
// var checkEndGame = function(){
//   var b = boxStatus;
// // check box 1 2 3 checking to see if box status one is not false
//   if (b.one !== false && b.one === b.two && b.two === b.three){
//     if (b.one === "X") {
//       youWinText.textContent = "PLAYER ONE WINS!"
//       youWinText.style.fontWeight = "bold";
//       youWinText.style.transform = "scale(1)";
//       endGame();
//     } else if (b.one === "O") {
//       youWinText.textContent = "PLAYER TWO WINS!"
//       youWinText.style.fontWeight = "bold";
//       youWinText.style.transform = "scale(1)";
//       endGame();
//     };

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
