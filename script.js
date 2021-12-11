// код для скрытия и открытия чекбоксов
// определяем кнопку-стрелку
let buttonArrow = document.getElementsByClassName('button__js');

//проходим по всем классам и при клике на определенный запускаем функцию
for (var i = 0; i < buttonArrow.length; i++) {
  buttonArrow[i].addEventListener('click', function () {

    let sibling = this.nextElementSibling;
    // sibling.style.display = 'none';

    //  делаем проверку на наличие класса
    if (sibling.classList.contains('element__none')) {

      // если класс есть, удаляем его
      sibling.classList.remove('element__none');

    } else {
      // если класса нет, добавляем его
      sibling.classList.add('element__none');
    }

  }, false);
}

//код для открытия меню
// определяем кнопку меню и кнопку закрытия
let openMenu = document.getElementsByClassName('header__filter')[0];
let menu = document.getElementsByClassName('menu')[0];
let closeMenu = document.getElementsByClassName('menu__close')[0];

// клик на кнопку открытия меню
openMenu.addEventListener('click', function () {

  menu.style.display = 'block';

}, false);

// клик на кнопку закрытия меню
closeMenu.addEventListener('click', function () {

  menu.style.display = 'none';

}, false);

//код для открытия фильтра
// определяем кнопку фильтра и кнопку закрытия
let openFilter = document.getElementsByClassName('catalog__filter')[0];
let filter = document.getElementsByClassName('filter')[0];
let closeFilter = document.querySelectorAll('.filter__apply .filter__dropping')[0];


// клик на кнопку открытия фильтра
openFilter.addEventListener('click', function () {

  if (filter.classList.contains('filter__block')) {

    // если класс есть, удаляем его
    filter.classList.remove('filter__block');

  } else {
    // если класса нет, добавляем его
    filter.classList.add('filter__block');
  }

}, false);

closeFilter.addEventListener('click', function () {

  if (filter.classList.contains('filter__block')) {

    // если класс есть, удаляем его
    filter.classList.remove('filter__block');

  } else {
    // если класса нет, добавляем его
    filter.classList.add('filter__block');
  }

}, false);


//слайдер 
!function (a) { function f(a, b) { if (!(a.originalEvent.touches.length > 1)) { a.preventDefault(); var c = a.originalEvent.changedTouches[0], d = document.createEvent("MouseEvents"); d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d) } } if (a.support.touch = "ontouchend" in document, a.support.touch) { var e, b = a.ui.mouse.prototype, c = b._mouseInit, d = b._mouseDestroy; b._touchStart = function (a) { var b = this; !e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown")) }, b._touchMove = function (a) { e && (this._touchMoved = !0, f(a, "mousemove")) }, b._touchEnd = function (a) { e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1) }, b._mouseInit = function () { var b = this; b.element.bind({ touchstart: a.proxy(b, "_touchStart"), touchmove: a.proxy(b, "_touchMove"), touchend: a.proxy(b, "_touchEnd") }), c.call(b) }, b._mouseDestroy = function () { var b = this; b.element.unbind({ touchstart: a.proxy(b, "_touchStart"), touchmove: a.proxy(b, "_touchMove"), touchend: a.proxy(b, "_touchEnd") }), d.call(b) } } }(jQuery);

console.log($('.slider'));

$(".slider").slider({
  animate: "slow",
  range: true,
  min: 3000,
  max: 36000, 
  values: [ 3000, 23000 ],
  slide : function(event, ui) {    
      $(".first-value").text( + ui.values[ 0 ]);
      $(".second-value").text( + ui.values[ 1 ] ); 
      $(".slider span:after").css('content' , + ui.values[ 1 ]);     
  }
});
$( ".first-value" ).text( + $(".slider").slider("values", 0));
$( ".second-value" ).text( + $(".slider").slider("values", 1));
$( ".slider span:after" ).text( + $(".slider").slider("values", 1));