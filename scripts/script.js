var display = document.getElementById('display');

var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var start = document.getElementById('start');

var chronometerSec;

var minutesCurrent;
var secondsCurrent;

var interval;

for(var i = 0; i <= 60; i++){
    minutes.innerHTML+='<option value="'+i+'">'+i+'</option>';
}

for(var i = 1; i <= 60; i++){
    seconds.innerHTML+='<option value="'+i+'">'+i+'</option>';
}