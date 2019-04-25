let ul = document.querySelector('ul'),
    lii = document.querySelectorAll('li');
    li = document.createElement('li');
li.classList.add('menu-item');
li.innerHTML = "Пятый пункт";
ul.appendChild(li);

ul.insertBefore(lii[2], lii[1]);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

let title = document.querySelector('.title');
title.innerHTML = "Мы продаем только <b>подлинную</b> технику Apple";

let adv = document.getElementsByClassName('adv');
adv[0].style.display = 'none';

let qu = document.getElementById('prompt');
qu.textContent = prompt('Как Вы относитесь к технике Apple?');
