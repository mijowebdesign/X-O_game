function game() {
var text = '';
var xo = 'O';
var gamePlace = document.querySelector(".game");
var result = document.querySelector(".result");


  (function() {
    for (var i = 0; i < 9; i++) {
      text+= '<div class="box"></div>'
    }
    gamePlace.innerHTML = text;
  }());


  var box = document.querySelectorAll(".box");
  var arr = [
    [box[0],box[1],box[2]],
    [box[3],box[4],box[5]],
    [box[6],box[7],box[8]],
    [box[6],box[4],box[2]],
    [box[0],box[4],box[8]],
    [box[0],box[3],box[6]],
    [box[1],box[4],box[7]],
    [box[2],box[5],box[8]],
  ];


  for (var i = 0; i < 9; i++) {
    box[i].addEventListener('click', setSign )
};

function setSign() {
  if (this.innerHTML == '') {
    if (xo === 'O') {
      this.innerHTML = xo;
      xo = 'X';
    }else {
      this.innerHTML = xo;
      xo = 'O';
    }
    check();
  }

};

function check() {
for (var i = 0; i < arr.length; i++) {
  if (arr[i][0].innerHTML == arr[i][1].innerHTML && arr[i][0].innerHTML == arr[i][2].innerHTML && arr[i][0].innerHTML != '') {
    result.innerHTML = 'Winer is' + ' ' + arr[i][0].innerHTML;
    for (var i = 0; i < 9; i++) {
      box[i].removeEventListener('click', setSign )
  };
  }
}
}

}

game();
