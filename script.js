
$(document).ready(function(){
  $(".cookie1").click(function(){
    $(".cookie1").hide();
  });
});

$(document).ready(function(){
  $(".cookie2").click(function(){
    $(".cookie2").hide();
  });
});

$(document).ready(function(){
  $(".cookie3").click(function(){
    $(".cookie3").hide();
  });
});

$(document).ready(function(){
  $(".cookie4").click(function(){
    $(".cookie4").hide();
  });
});

$(document).ready(function(){
  $(".cookie5").click(function(){
    $(".cookie5").hide();
  });
});

$(document).ready(function(){
  $(".cookie6").click(function(){
    $(".cookie6").hide();
  });
});

$(document).ready(function(){
  $(".cookie7").click(function(){
    $(".cookie7").hide();
  });
});

$(document).ready(function(){
  $(".cookie8").click(function(){
    $(".cookie8").hide();
  });
});

$(document).ready(function(){
  $(".cookie9").click(function(){
    $(".cookie9").hide();
  });
});

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
