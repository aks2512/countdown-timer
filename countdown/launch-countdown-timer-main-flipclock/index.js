var date = new Date('10/2/2023'),
days = date.getDate()*60*60*24,
hours = date.getHours()*60*60,
minutes = date.getMinutes()*60,
sec = date.getSeconds(),
clock = $('#flip-clock').FlipClock({
	clockFace: 'DailyCounter',
	countdown: true,
	showSeconds: true,
});

clock.setTime(days+hours+minutes+sec);
