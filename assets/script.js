
$(document).ready(function () {

var realTime = function () {
    var currentTime = moment().format('[Today], dddd MMMM Do YYYY h:mm:ss a')
    $("#currentDay").text(currentTime)
}
var currentHour = moment().format("HH")

console.log(currentHour)
console.log(typeof currentHour)
if(currentHour > 9){
  $('#description-9').addClass('past').removeClass('present').removeClass('future')
}else if(currentHour == 9){
  $('#description-9').addClass('present').removeClass('past').removeClass('future')
}else{
  $('#description-9').addClass('future').removeClass('past').removeClass('present')
}
if(currentHour > 10){
  $('#description-10').addClass('past').removeClass('present').removeClass('future')
}else if(currentHour == 10){
  $('#description-10').addClass('present').removeClass('past').removeClass('future')
}else{
  $('#description-10').addClass('future').removeClass('past').removeClass('present')
}
if(currentHour > 11){
  $('#description-11').addClass('past').removeClass('present').removeClass('future')
}else if(currentHour == 11){
  $('#description-11').addClass('present').removeClass('past').removeClass('future')
}else{
  $('#description-11').addClass('future').removeClass('past').removeClass('present')
}
if(currentHour > 12){
  $('#description-12').addClass('past').removeClass('present').removeClass('future')
}else if(currentHour == 12){
  $('#description-12').addClass('present').removeClass('past').removeClass('future')
}else{
  $('#description-12').addClass('future').removeClass('past').removeClass('present')
}
if(currentHour > 13){
  $('#description-1').addClass('past').removeClass('present').removeClass('future')
}else if(currentHour == 13){
  $('#description-1').addClass('present').removeClass('past').removeClass('future')
}else{
  $('#description-1').addClass('future').removeClass('past').removeClass('present')
}
if(currentHour > 14){
  $('#description-2').addClass('past').removeClass('present').removeClass('future')
}else if(currentHour == 14){
  $('#description-2').addClass('present').removeClass('past').removeClass('future')
}else{
  $('#description-2').addClass('future').removeClass('past').removeClass('present')
}
if(currentHour > 15){
  $('#description-3').addClass('past').removeClass('present').removeClass('future')
}else if(currentHour == 15){
  $('#description-3').addClass('present').removeClass('past').removeClass('future')
}else{
  $('#description-3').addClass('future').removeClass('past').removeClass('present')
}
if(currentHour > 16){
  $('#description-4').addClass('past').removeClass('present').removeClass('future')
}else if(currentHour == 16){
  $('#description-4').addClass('present').removeClass('past').removeClass('future')
}else{
  $('#description-4').addClass('future').removeClass('past').removeClass('present')
}
if(currentHour > 17){
  $('#description-5').addClass('past').removeClass('present').removeClass('future')
}else if(currentHour == 17){
  $('#description-5').addClass('present').removeClass('past').removeClass('future')
}else{
  $('#description-5').addClass('future').removeClass('past').removeClass('present')
}

setInterval(realTime, 1000)
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