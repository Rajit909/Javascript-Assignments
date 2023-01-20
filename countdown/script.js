loadEventListeners();

function loadEventListeners() {
    // DOMContentLoaded event fires when the initial HTML document has been completely loaded
    document.addEventListener('DOMContentLoaded', function () { calcTime(); });
};
//The value of your input time

var timeTo = document.getElementById('time-to').value, date,//Use new Date() to get a Date for the current time or Date
    now = new Date(),
    newYear = new Date('1.1.2020').getTime(),
    startTimer = '';

function calcTime(dates) {
    clearInterval(startTimer);

    if (typeof (dates) == 'undefined') {
        date = new Date(newYear).getTime();
    } else {
        date = new Date(dates).getTime();
    }

    function updateTimer(date) {
        var now = new Date().getTime();

        var distance = date - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // select element
        //innerHTML allows Javascript code to manipulate a website being displayed
        //I stored the time in different var.
        //Now you have to show them in the box
        document.querySelector('.clock-day').innerHTML = days;
        document.querySelector('.clock-hours').innerHTML = hours;
        document.querySelector('.clock-minutes').innerHTML = minutes;
        document.querySelector('.clock-seconds').innerHTML = seconds;

        //When the current time will be more than your input time
        if (now >= date) {
            clearInterval(startTimer);
            document.querySelector('.clock-day').innerHTML = 'D';
            document.querySelector('.clock-hours').innerHTML = 'O';
            document.querySelector('.clock-minutes').innerHTML = 'N';
            document.querySelector('.clock-seconds').innerHTML = 'E';

        }
    }



startTimer = setInterval(function() {
     updateTimer(date); }, 1000);

}


