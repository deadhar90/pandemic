var toggle = true;
	document.getElementById("simulation").onclick = function startSimulation(){
		if(toggle){	
			document.getElementById("thirdPlanet").style.animation = "alarm 1s infinite";
			document.querySelector(".start").innerHTML = "End Simulation";
			document.getElementById("alarm").style.display = "block";
			document.getElementById("alarmStatus").innerHTML = "Status: Alarm!";
			document.getElementById("alarmStatus").style.color = "red";
			document.getElementById("planetAlarm").style.animation = "alarm 1s infinite";
			
		} else {	
			document.getElementById("thirdPlanet").style.animation = "none";
			document.querySelector(".start").innerHTML = "Start Simulation";
			document.getElementById("alarmStatus").innerHTML = "Status: All OK";
			document.getElementById("alarm").style.display = "none";
			document.getElementById("planetAlarm").style.animation = "none";
			document.getElementById("alarmWindow").style.display = "none";
			document.getElementById("alarmStatus").style.color = "gold";
		}
		
	toggle = !toggle;
};