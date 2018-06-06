var score = 0;
var cookies = [];

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
  });
  $(".s").click(function(){
    $(this).hide();
    score++;
    // console.log(score)
    $('.points').text(score);
    console.log('here is score: ', score);
  });
});

// look at notes below






// look above at notes






    var monster = {
      element: $('#blue-monster'),
      position: 0

    };

    var moveMonster = function(e) {
      // does the event key property equal left?
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
