var today = new Date(); //Current Date
var future = new Date("2023-05-09T03:24:00"); //Set Timer Here
console.log(future)
var diff = future.getTime()/1000 - today.getTime()/1000;

var clock = $('#flip-clock').FlipClock(diff,{
	clockFace: 'DailyCounter',
	countdown: true,
	showSeconds: true
});

