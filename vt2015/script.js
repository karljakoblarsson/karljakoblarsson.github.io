var sounds = {};
var norrlands;

var moving = false;
var start = false;
var prep = false;


var splash, baton;

var x, y, oldX, oldY = 0;


function toPx (s) {
  return "" + Math.floor(s) + "px";
}



window.onload = function() {

  window.scroll(0,1);
  norrlands = document.querySelector("#norrlands");

  document.body.addEventListener("touchmove", function mouse(e) {
    //oldX = x;
    //oldY = y;
    x = e.changedTouches[0].pageX;
    y = e.changedTouches[0].pageY;
  });

  document.body.addEventListener("touchstart", function mouse(e) {
      e.preventDefault();
      moving = true;
      if (start) {
        norrlands.play();
      }
  });

  document.body.addEventListener("touchend", function mouse(e) {
    moving = false;
  });


  splash = document.querySelector('.splash');
  baton = document.querySelector('#baton')


  var update = function update() {
    requestAnimationFrame(update);

    if (!start) {
      if ((window.innerHeight < window.innerWidth) && !prep) {
        prep = true;
        window.setTimeout(function() {
          splash.style.opacity = 0;
          baton.style.opacity = 1;
          start = true;
        },2500)
      }
    } else {
      //if ((Math.abs(oldX - x) > 1.5) || (Math.abs(oldY - y) > 1.5)) {
        //moving = true;
      //} else {
        //moving = false;
      //}
      //console.log(moving);

      if (moving) {
        baton.style.opacity = 1;
        baton.style.top = toPx(y);
        baton.style.left = toPx(x);

        norrlands.play();
      } else if (!moving) {
        baton.style.opacity = 0;
        norrlands.pause();
      }
    };
  }

  update();
}
