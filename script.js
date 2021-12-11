// код для скрытия и открытия чекбоксов
// определяем кнопку-стрелку
let buttonArrow = document.getElementsByClassName('filter__heating_button');

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
let closeFilter = document.getElementsByClassName('filter__close')[0];

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