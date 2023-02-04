var today = new Date(); //Current Date
var future = new Date("2022-02-7T23:50:21.817Z"); //Set Timer Here
var diff = future.getTime()/1000 - today.getTime()/1000;

var clock = $('#flip-clock').FlipClock(diff,{
	clockFace: 'HourlyCounter',
	countdown: true,
	showSeconds: true
});

