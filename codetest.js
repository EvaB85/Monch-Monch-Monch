
// document.getElementById('blue-monster'); = $('#blue-monster');
// const monster = $('#blue-monster');  $('#blue-monster').position -= 10;
// put zero to start
// var monsterPosition = 0;

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





// test things out



$('.cookie1').click(function() {
  $('.cookie1').gone();
});

$('.cookie2').click(function() {
  $('.cookie2').toggle();
});

$('.cookie3').click(function() {
  $('.cookie3').toggle();
});

$('.cookie4').click(function() {
  $('.cookie4').toggle();
});

$('.cookie5').click(function() {
  $('.cookie5').toggle();
});

$('.cookie6').click(function() {
  $('.cookie6').toggle();
});

$('.cookie7').click(function() {
  $('.cookie7').toggle();
});

$('.cookie8').click(function() {
  $('.cookie8').toggle();
});

$('.cookie9').click(function() {
  $('.cookie9').toggle();
});

function reset


var cookieOne = {
  element: $('#cookie1'),
  position: 0
}

  $('.box').click(cardFlip);




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
