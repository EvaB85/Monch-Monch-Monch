var score = 0;
var cookies = [];
var remainingTime = 30;


$(document).ready(function(){
  $.each($('.s'), function(){

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

  // adddddd notes
  });
  $(".s").click(function(){
    $(this).hide();
    score++;
    // console.log(score)
    $('.points').text(score);
    console.log('here is score: ', score);
  });
});


// function that starts timer
var startTimer = function () {
  var timer = setInterval(function() {
    remainingTime--;
    $('.timer span').text(remainingTime);
  }, 1000);
};


// function to call startTimer
var startGame = function () {
  startTimer()
    $('.start-button').remove();
  };

$('.start-button').click(startGame);





// look at notes below
//
//
// $("#fade").modal({
//  fadeDuration: 100
// });



// look above at notes






    var monster = {
      element: $('#blue-monster'),
      position: 0

    };

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
