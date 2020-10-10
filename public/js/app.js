var daysEl = document.getElementById('days');
var hoursEl = document.getElementById('hours');
var minutesEl = document.getElementById('minutes');
var secondsEl = document.getElementById('seconds');
var newYears = '1 Jan 2021';
function countdown() {
    var newYearsDate = new Date(newYears);
    var currentDate = new Date();
    var totalSeconds = (newYearsDate - currentDate) / 1000;
    var days = Math.floor(totalSeconds / 3600 / 24);
    var hours = Math.floor(totalSeconds / 3600) % 24;
    var minutes = Math.floor(totalSeconds / 60) % 60;
    var seconds = Math.floor(totalSeconds % 60);
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time) {
    return time < 10 ? ("0" + time) : "" + time;
}
countdown();
setInterval(countdown, 1000);
