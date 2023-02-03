
var pastSeconds;
var pastMinutes;
var pastHours;
var pastDays;


function setNewTIme(selector, pastTimer, restTimer) {
    if (pastTimer != restTimer) {
        // document.querySelector(selector).classList.toggle('flip');
        document.querySelector(selector + ' .flip-card .flip-card__back-bottom').setAttribute('data-value', restTimer)
        document.querySelector(selector + ' .flip-card .flip-card__back').setAttribute('data-value', restTimer)
        document.querySelector(selector + ' .flip-card .flip-card__top').innerHTML = restTimer;
        document.querySelector(selector + ' .flip-card .flip-card__bottom').setAttribute('data-value', restTimer)
    }
}

function timer(date) {

    var limitDate = new Date(date);
    var actualDate = new Date();
    var restTime = limitDate - actualDate ;
    var totalSeconds = (restTime/1000);
    var restSeconds = Math.floor(totalSeconds) % 60;
    var restMinutes = Math.floor(totalSeconds / 60) % 60;
    var restHours = Math.floor(totalSeconds / 3600) % 24;
    var restDays = Math.floor(totalSeconds / 3600 / 24);

    setNewTIme('.seconds', pastSeconds, restSeconds);
    setNewTIme('.minutes', pastMinutes, restMinutes);
    setNewTIme('.hours', pastHours, restHours);
    setNewTIme('.days', pastDays, restDays);

    pastSeconds = restSeconds;
    pastMinutes = restMinutes;
    pastHours = restHours;
    pastDays = restDays;
}

setInterval(function() {
    timer('1 Janeiro 2024');
}, 1000);
