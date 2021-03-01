const convert = document.getElementById("convert") ;
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

convert.addEventListener("click", function() {
    let numberOfYears = document.getElementById("numberOfYears").value;


    let resultatJours = numberOfYears * daysInYear;
    let resultatHeure = resultatJours * hoursInDay;
    let resultatMinute = resultatHeure * minutesInHour;
    let resultatSeconde = resultatMinute * secondsInMinute;

    resultSeconds.innerHTML = resultatSeconde + ' secondes';
    resultMinutes.innerHTML = resultatMinute + ' minutes';
    resultHours.innerHTML = resultatHeure + ' heures';
    resultDays.innerHTML = resultatJours + ' jours';

    console.log(resultatJours);
    console.log(resultatHeure);
    console.log(resultatMinute);
    console.log(resultatSeconde);

});