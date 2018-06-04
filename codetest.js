
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
