var home = document.getElementById('home-block');
var dot_2 = document.getElementById('dot-2-block');
var dot_3 = document.getElementById('dot-3-block');

var sel_1 = document.getElementById('home');
var sel_2 = document.getElementById('dot-2');
var sel_3 = document.getElementById('dot-3');

var hm_icon = document.getElementById('home-icon');

function funcHome() {
  home.classList.remove('slider-hidden');
  dot_2.classList.add('slider-hidden');
  dot_3.classList.add('slider-hidden');

  hm_icon.classList.add('home--selected');

  sel_1.classList.add('selected-slide');
  sel_2.classList.remove('selected-slide');
  sel_3.classList.remove('selected-slide');
}

function funcDot_2() {
  home.classList.add('slider-hidden');
  dot_2.classList.remove('slider-hidden');
  dot_3.classList.add('slider-hidden');

  hm_icon.classList.remove('home--selected');

  sel_1.classList.remove('selected-slide');
  sel_2.classList.add('selected-slide');
  sel_3.classList.remove('selected-slide');
}

function funcDot_3() {
  home.classList.add('slider-hidden');
  dot_2.classList.add('slider-hidden');
  dot_3.classList.remove('slider-hidden');

  hm_icon.classList.remove('home--selected');

  sel_1.classList.remove('selected-slide');
  sel_2.classList.remove('selected-slide');
  sel_3.classList.add('selected-slide');
}
