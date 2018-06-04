var cookieOne = {
  element: $('#cookie1'),
  position: 0
}

$( "#cookie1" ).on( "click", function() {
     runEffect();
     return false;
   });

var cookieTwo = {
  element: $('#cookie2'),
  position: 0
};

var monster = {
  element: $('#blue-monster'),
  position: 0
};

var moveMonster = function(e) {
  // does the event key property equal left?
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    monster.position -= 15;
    monster.element.css("left", monster.position + "px");
    console.log("moveMonster");
  } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      monster.position += 15;
      monster.element.css("left", monster.position + "px");
      console.log('moveMonster right')
  }
};

$(window).keydown(moveMonster);
