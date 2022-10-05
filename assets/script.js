// $("#currentDay").text(moment().format("[Today], dddd, MMMM Do YYYY h:mm:ss a"));
$(document).ready(function () {

let realTime = function () {
    let currentTime = moment().format('[Today], dddd MMMM Do YYYY h:mm:ss a')
    $("#currentDay").text(currentTime)
}

$( function() {
    $( "#description" ).selectable();
  } );
setInterval(realTime, 1000)
// setInterval(realHour, 1000)
// setInterval(realMinutes, 1000);
// setInterval(realSeconds, 1000);
// setInterval(countdown, 1);
})