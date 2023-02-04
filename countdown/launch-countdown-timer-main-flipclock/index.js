var start = new Date();
start.setDate(start.getDate());
start.setHours(0,0,0,0)
//======================================
var future   = new Date('1 de Janeiro 2024');

var diff = (future.getTime() - start.getTime()) / 1000;

var clock = $('#flip-clock').FlipClock(diff, {
	clockFace: 'DailyCounter',
	countdown: true,
	showSeconds: true,
});
