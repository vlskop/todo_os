let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']; // Дни недели
var months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'декабря'
] // Месяцы

let greetingAtTime = document.querySelector('.greet-time');

window.onload = function () {
    setInterval(function () {
        // Seconds
        var seconds = new Date().getSeconds();
        document.getElementById("seconds").innerHTML = (seconds < 10 ? '0' : '') + seconds;

        // Minutes
        var minutes = new Date().getMinutes();
        document.getElementById("minutes").innerHTML = (minutes < 10 ? '0' : '') + minutes;

        // Hours
        var hours = new Date().getHours();
        document.getElementById("hours").innerHTML = (hours < 10 ? '0' : '') + hours;

        var dayNo = new Date().getDay();
        document.getElementById("dayNo").innerHTML = week[dayNo];

        var date = new Date().getDate();
        document.getElementById("date").innerHTML = date;

        var month = new Date().getMonth();
        document.getElementById("month").innerHTML = months[month];

        var year = new Date().getFullYear();
        document.getElementById("year").innerHTML = year;

        if (hours >= 6 && hours < 12) {
            greetingAtTime.textContent = "Доброе утро,";
        }
        else if (hours >= 12 && hours < 17) {
            greetingAtTime.textContent = "Добрый день,";
        }
        else if (hours >= 17 && hours < 21) {
            greetingAtTime.textContent = "Добрый вечер,";
        }
        else if (hours >= 21 || hours < 6) {
            greetingAtTime.textContent = "Доброй ночи,";
        }
    }, 1000);
}



