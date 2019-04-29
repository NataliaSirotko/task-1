let div = document.createElement('div'),
    p = document.createElement('p');

document.body.appendChild(div);
p.innerHTML = '00:00:00';
div.appendChild(p);
document.body.style.backgroundColor = "pink";
div.style.textAlign = "center";
p.style.textAlign = "center";
p.style.fontSize = "50" + 'px';
p.style.marginTop = '0';

window.addEventListener('DOMContentLoaded', function () {
    let timerId = window.setInterval(setTimer, 1000);
    // window.timerId = window.setInterval(setTimer, 500);
});

function setTimer(){
    let date = new Date();
    p.innerHTML = addZero(date.getHours())+':'+addZero(date.getMinutes())+':'+addZero(date.getSeconds());
}

function addZero(num) {
    if (num > 0 && num < 10) {
        return '0' + num;
    } if (num == 0) {
        return '00';
    } 
    else {
        return num;
    }
}
