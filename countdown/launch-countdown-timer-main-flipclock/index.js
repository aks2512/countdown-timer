var today = new Date(); //Current Date
var future = new Date(2023, 11, 8, 12, 0, 0); //Set Timer Here
var diff = future.getTime()/1000 - today.getTime()/1000;

var clock = $('#flip-clock').FlipClock(diff,{
	clockFace: 'DailyCounter',
	countdown: true
});

