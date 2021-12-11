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

// прогресс бар
// let progressBar = document.getElementsByClassName('myBar');
// for (var i = 0; i < progressBar.length; i++) {
//  progressBar[i].addEventListener('click', function clickBar() {

//     let parent = this.parentNode;
//     let ElementSibling = parent.nextElementSibling

//     // делаем проверку на наличие класса
//     if (this.classList.contains('colorBar') && ElementSibling.classList.contains('colorPercent')) {
//       // если класс есть, удаляем его
//       this.classList.remove('colorBar');
//       ElementSibling.classList.remove('colorPercent');

//     } else {
//       // если класса нет, добавляем его
//       this.classList.add('colorBar');
//       ElementSibling.classList.add('colorPercent');
//     }
//   }, false);
// }