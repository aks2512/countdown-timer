var today = new Date(); //Current Date
var future = new Date("November 2, 2023"); //Set Timer Here
var diff = future.getTime()/1000 - today.getTime()/1000;

var clock = $('#flip-clock').FlipClock(diff,{
	clockFace: 'DailyCounter',
	countdown: true
});

