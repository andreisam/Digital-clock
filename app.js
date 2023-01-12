const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const hourDisplayEl = document.getElementById("hour-display");
const hourPlusBtn = document.getElementById("hour-plus"); 
const hourMinusBtn = document.getElementById("hour-minus"); 
const minuteDisplayEl = document.getElementById("minute-display");
const minutePlusBtn = document.getElementById("minute-plus"); 
const minuteMinusBtn = document.getElementById("minute-minus");
const alarmSetEl = document.getElementById("alarm-set");
const setAlarmBtn = document.getElementById("set-alarm-btn");
const mon = document.getElementById("mon");
const tue = document.getElementById("tue");
const wed = document.getElementById("wed");
const thu = document.getElementById("thu");
const fri = document.getElementById("fri");
const sat = document.getElementById("sat");
const sun = document.getElementById("sun");

let setHours = 0;
let setMinutes = 0;
const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

hourPlusBtn.addEventListener("click", function() {
	if (setHours >= 0 && setHours <= 22) {
		setHours++;
		hourDisplayEl.textContent = setHours;
	}
});

hourMinusBtn.addEventListener("click", function() {
	if (setHours >= 1 && setHours <= 23) {
		setHours--;
		hourDisplayEl.textContent = setHours;	
	}
});

minutePlusBtn.addEventListener("click", function() {
	setMinutes++;
	minuteDisplayEl.textContent = setMinutes < 10 ? "0" + setMinutes : setMinutes;
});

minuteMinusBtn.addEventListener("click", function() {
	setMinutes--;
	minuteDisplayEl.textContent = setMinutes < 10 ? "0" + setMinutes : setMinutes;
});


function updateTime() {
	let time = new Date();
	let d = time.getDay();
	let dayName = days[d];
	let h = time.getHours();
	let m = time.getMinutes();
	let s = time.getSeconds();
	hours.innerHTML = h < 10 ? "0" + h : h;
	minutes.innerHTML = m < 10 ? "0" + m : m;
	seconds.innerHTML = s < 10 ? "0" + s : s;
	activeDay(dayName);
	alarmSet(h, m);
}

function activeDay(currentDay) {
	if (currentDay === "MON") {
		mon.classList.add("active-day");
	} else if (currentDay === "TUE") {
		tue.classList.add("active-day");
	} else if (currentDay === "WED") {
		wed.classList.add("active-day");
	} else if (currentDay === "THU") {
		thu.classList.add("active-day");
	} else if (currentDay === "FRI") {
		fri.classList.add("active-day");
	} else if (currentDay === "SAT") {
		sat.classList.add("active-day");
	} else if (currentDay === "SUN") {
		sun.classList.add("active-day");
	}
}

setInterval(updateTime, 1000);

function alarmSet(h, m) {
	if ( setHours === h && setMinutes === m) {
	    play();
	}
}

function play() {
	var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
	audio.play();
  }