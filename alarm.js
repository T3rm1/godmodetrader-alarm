var alarm;
var enabled = false;
var long;
var currentValue;
var headlineElement, currentValueElement;
var wkn;
var beep = new Audio("data:audio/mpeg;base64,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");
var infoHtml = `
<div style="display: inline">
	Kursalarm bei: <input id="alarm" oninput="onInput()" type="number" step="any" style="margin-right: 5px; display: inline">
	<button style="display: inline" id="saveAlarm" onclick="updateAlarm()">Speichern</button>
	<span id="check" style="margin-left: 5px;">&#10003;</span>
</div>
`;

function initialize() {
	let wknElement = document.querySelector(".seo-info > span:nth-child(2) > span > span");
	headlineElement = document.querySelector(".instrument-title");
	currentValueElement = document.querySelector(".chart-view .price .instrument-value");
	if (wknElement == null || headlineElement == null || currentValueElement == null) {
		alert("Die Struktur der Seite hat sich geändert. Möglicherweise funktionieren Kursalarme nicht ordnungsgemäß. Bitte warten Sie auf ein Update.")
	}
	
	wkn = wknElement.innerText;
	headlineElement.style.display = 'inline';
	headlineElement.insertAdjacentHTML("afterend", infoHtml);
	if (Notification.permission === "default") {
		Notification.requestPermission().then(function(permission) {
			if (permission === "denied") {
				alert("Sie müssen Benachrichtungen für diese Webseite erlauben, damit Ihnen der Kursalarm angezeigt werden kann.")
			}
		});
	}
	loadAlarm();
}

function updateAlarm() {
	alarm = parseFloat(document.getElementById("alarm").value.replace(",", "."));
	persistAlarm();
	document.getElementById("saveAlarm").style.display = "none";
	document.getElementById("check").style.display = "";
	long = alarm > currentValue;
	if (!enabled) {
		setTimeout(checkAlarm, 1000);
		enabled = true;		
	}
}

function onInput() {
	document.getElementById("saveAlarm").style.display = "inline";
	document.getElementById("check").style.display = "none";
}

function loadAlarm() {
	alarm = localStorage.getItem(wkn);
	if (alarm != null) {
		document.getElementById("alarm").value = alarm;
		updateAlarm();
	}
}

function persistAlarm() {
	localStorage.setItem(wkn, alarm);
}

function checkAlarm() {
	currentValue = parseFloat(currentValueElement.innerText.replace(".", "").replace(",","."));
	if (enabled) {
		if (long && currentValue >= alarm) {
			triggerAlarm();
			enabled = false;
		} else if (!long && currentValue <= alarm) {
			triggerAlarm();
			enabled = false;
		} else {
			setTimeout(checkAlarm, 1000);
		}
	}	
}

function triggerAlarm() {
	beep.play();
	if (Notification.permission === "granted") {
		new Notification(`Alarm - ${headlineElement.innerText}`, {
			requireInteraction: true,
			body: `Kurs hat ${alarm} erreicht.`,
			icon: long ? "https://rawcdn.githack.com/T3rm1/godmodetrader-alarm/fc0223bee7da5c5b123458a20c95ad69cdd8d157/icons/long.png" : "https://rawcdn.githack.com/T3rm1/godmodetrader-alarm/fc0223bee7da5c5b123458a20c95ad69cdd8d157/icons/short.png"
		});		
	}
}

initialize();
