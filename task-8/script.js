window.addEventListener('DOMContentLoaded', function go() {
    let div = document.querySelector('div'),
        p = document.querySelector('p');

    document.body.style.backgroundColor = "pink";  
    div.style.textAlign = "center";
    p.style.textAlign = "center";
    p.style.fontSize = "20" + 'px';
    div.style.fontSize = "50" + 'px';
    div.style.marginTop = '0';

    let timerId = window.setInterval(timer, 1000);

    function timer() {
        let hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds'),
            now = new Date(),
            tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0),
            diff = Math.floor((tomorrow - now)/1000);

        let hoursTo = Math.floor(diff / (60*60)),
            minutesTo = Math.floor((diff - hoursTo *60*60)/60),
            secondsTo = Math.floor(diff - hoursTo*60*60 - minutesTo*60);
        
       if (diff>=0) {
           hours.innerHTML = addZero(hoursTo);
            minutes.innerHTML = addZero(minutesTo);
            seconds.innerHTML = addZero(secondsTo);
       } else {
           return false;
       }
    }     
    
    function addZero(num) {
        if (num > 0 && num < 10) {
            return '0' + num;
        } if (num == 0) {
            return '00';
        } else {
            return num;
        }
    }

});
