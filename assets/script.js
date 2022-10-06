// $("#currentDay").text(moment().format("[Today], dddd, MMMM Do YYYY h:mm:ss a"));
var businessHours = [];
var listHours = ["9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM",]
$(document).ready(function () {

var realTime = function () {
    var currentTime = moment().format('[Today], dddd MMMM Do YYYY h:mm:ss a')
    $("#currentDay").text(currentTime)
}
var currentHour = moment().format("HH")
// var currentHour = 23;
if(currentHour < 12){
  currentHour += "AM";
}else{
  currentHour -= 12;
  currentHour += "PM";
}

if(currentHour > 9){
  $('#9AM').addClass('past')
}else if(currentHour === 9){
  $('#9AM').addClass('present')
}else{
  $('#9AM').addClass('future')
}
if(currentHour > 10){
  $('#10AM').addClass('past')
}else if(currentHour === 10){
  $('#10AM').addClass('present')
}else{
  $('#10AM').addClass('future')
}
if(currentHour > 11){
  $('#11AM').addClass('past')
}else if(currentHour === 11){
  $('#11AM').addClass('present')
}else{
  $('#11AM').addClass('future')
}
if(currentHour > 12){
  $('#12PM').addClass('past')
}else if(currentHour === 12){
  $('#12PM').addClass('present')
}else{
  $('#12PM').addClass('future')
}
if(currentHour > 13){
  $('#1PM').addClass('past')
}else if(currentHour === 13){
  $('#1PM').addClass('present')
}else{
  $('#1PM').addClass('future')
}
if(currentHour > 14){
  $('#2PM').addClass('past')
}else if(currentHour === 14){
  $('#2PM').addClass('present')
}else{
  $('#2PM').addClass('future')
}
if(currentHour > 15){
  $('#3PM').addClass('past')
}else if(currentHour === 15){
  $('#3PM').addClass('present')
}else{
  $('#3PM').addClass('future')
}
if(currentHour > 16){
  $('#4PM').addClass('past')
}else if(currentHour === 16){
  $('#4PM').addClass('present')
}else{
  $('#4PM').addClass('future')
}
if(currentHour > 17){
  $('#5PM').addClass('past')
}else if(currentHour === 17){
  $('#5PM').addClass('present')
}else{
  $('#5PM').addClass('future')
}

setInterval(realTime, 1000)
// setInterval(realHour, 1000)
// setInterval(realMinutes, 1000);
// setInterval(realSeconds, 1000);
// setInterval(countdown, 1);
})

$(".saveBtn").on("click", function(){
  var id = $(this).attr("id")
  console.log(id.split("-")[1])
  var text = $("#description-"+(id.split("-")[1])).val()
  console.log(text)
  localStorage.setItem(id,text)
})

$("#description-9").val(localStorage.getItem("reserve-9"));
$("#description-10").val(localStorage.getItem("reserve-10"));
$("#description-11").val(localStorage.getItem("reserve-11"));
$("#description-12").val(localStorage.getItem("reserve-12"));
$("#description-1").val(localStorage.getItem("reserve-1"));
$("#description-2").val(localStorage.getItem("reserve-2"));
$("#description-3").val(localStorage.getItem("reserve-3"));
$("#description-4").val(localStorage.getItem("reserve-4"));
$("#description-5").val(localStorage.getItem("reserve-5"));