/*
* Basic Count Down to Date and Time
* Author: @guwii / guwii.com
* https://guwii.com/bytes/easy-countdown-to-date-with-javascript-jquery/
*/
window.onload = function() {
var dateObj = new Date();
var year = dateObj.getFullYear();
var month = (dateObj.getMonth()+1);
var day = (dateObj.getDate() + 2);
var today = "2023/08/03 17:33:00"
var today1 = "2023/08/03 17:33:00"

// Month Day, Year Hour:Minute:Second, id-of-element-container
countDownToTime(today, 'countdown1'); // ****** Change this line!
countDownToTime1(today1, 'countdown2');
}
    
function countDownToTime(countTo, id) {

var now = new Date(),
countTo = new Date(countTo),
timeDifference = (countTo - now);

var timeout = timeDifference;


var secondsInADay = 60 * 60 * 1000 * 24,
secondsInAHour = 60 * 60 * 1000;

days = Math.floor(timeDifference / (secondsInADay) * 1);
hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

var idEl = document.getElementById(id);

/*if(parseInt(days) < 10){ 
        days = 0 + "" + days; 
}*/ 

if(parseInt(hours) < 10){ 
        hours = 0 + "" + hours; 
} 
if(parseInt(mins) < 10){ 
        mins = 0 + "" + mins; 
} 	
        if(parseInt(secs) < 10){ 
        secs = 0 + "" + secs; 
} 	

if(timeout <=0)
{
    $('.countdown').hide();
    $('.time_out').show().text("마감 종료").toggleClass("blink");
    $('.scb').text("2만원 할인 혜택 받기!");/*상단 신청 버튼*/
    $('#submit4').val("신청하기");/*하단 신청 버튼*/
}
else{
idEl.getElementsByClassName('days')[0].innerHTML = days;
idEl.getElementsByClassName('hours')[0].innerHTML = hours;
idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
}
clearTimeout(countDownToTime.interval);
countDownToTime.interval = setTimeout(function(){ countDownToTime(countTo, id); },1000);}


function countDownToTime1(countTo, id) {

var now = new Date(),
countTo = new Date(countTo),
timeDifference = (countTo - now);
var timeout = timeDifference;

var secondsInADay = 60 * 60 * 1000 * 24,
secondsInAHour = 60 * 60 * 1000;

days = Math.floor(timeDifference / (secondsInADay) * 1);
hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

var idEl = document.getElementById(id);

/*if(parseInt(days) < 10){ 
        days = 0 + "" + days; 
}*/ 

if(parseInt(hours) < 10){ 
        hours = 0 + "" + hours; 
} 
if(parseInt(mins) < 10){ 
        mins = 0 + "" + mins; 
} 	
        if(parseInt(secs) < 10){ 
        secs = 0 + "" + secs; 
} 	

if(timeout <=0)
{
    $('.countdown').hide();
    $('.time_out').show().text("마감 종료").toggleClass("blink");
    $('.scb').text("신청하기");
    $('#submit4').val("신청하기");


}
else{
idEl.getElementsByClassName('days')[0].innerHTML = days;
idEl.getElementsByClassName('hours')[0].innerHTML = hours;
idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
}

clearTimeout(countDownToTime1.interval);
countDownToTime1.interval = setTimeout(function(){ countDownToTime1(countTo, id); },1000);
}
