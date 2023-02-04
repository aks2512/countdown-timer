var date = new Date('1 de Janeiro 2024'),
days = date.getDate()*60*60*24,
hours = date.getHours()*60*60,
minutes = date.getMinutes()*60,
sec = date.getSeconds(),

var clock = $('#flip-clock').FlipClock({
	clockFace: 'DailyCounter',
	countdown: true,
	showSeconds: true,
});

clock.setTime(days+hours+minutes+sec);
