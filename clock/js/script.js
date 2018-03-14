function addZero(number){
if(number < 10){
  number = "0" + number;
}
return number;

}


function printTime(){


var current_date = new Date();
var hours = current_date.getHours();
var minutes = addZero(current_date.getMinutes());
var seconds = addZero(current_date.getSeconds());

document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
}

setInterval(printTime, 1000)



























//
// var now = new Date();
// var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
// var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
// var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
// function fourdigits(number) {
//     return (number < 1000) ? number + 1900 : number;
// }
// today =  days[now.getDay()] + ", " +
//          months[now.getMonth()] + " " +
//          date + ", " +
//          (fourdigits(now.getYear())) ;
// document.write(today);
//
//
//
// function startTime() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('txt').innerHTML =
//     h + ":" + m + ":" + s;
//     var t = setTimeout(startTime, 500);
// }
// function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
// }
