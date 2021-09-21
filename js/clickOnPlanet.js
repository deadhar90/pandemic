//---------------------------------------First Planet---------------------------------//
	//--------Open First Planet Info---------//

var clickOnFirstPlanet = document.getElementById('firstPlanet');
var showfirstPlanetInfo = document.getElementById('firstPlanetInfo');

	clickOnFirstPlanet.onclick = function clickOnFirstPlanet() {
		showfirstPlanetInfo.style.display = "block";
	};


	//--------Close First Planet Info---------//
	document.getElementById('closeInfoFirstPlanet').onclick = function Close() {
		setTimeout(function() {
			document.getElementById('firstPlanetInfo').style.display = "none";
		}, 200)
	};


//---------------------------------------Second Planet---------------------------------//
	//--------Open Second Planet Info---------//
	document.getElementById('secondPlanet').onclick = function clickOnSecondPlanet() {
		document.getElementById('secondPlanetInfo').style.display = "block";
	};

	//--------Close Second Planet Info---------//
	document.getElementById('closeInfoSecondPlanet').onclick = function Close() {
		setTimeout(function() {
			document.getElementById('secondPlanetInfo').style.display = "none";
		}, 200)
	};


//---------------------------------------Third Planet---------------------------------//
	//--------Open Third Planet Info---------//
	document.getElementById('thirdPlanet').onclick = function clickOnThirdPlanet() {
		document.getElementById('thirdPlanetInfo').style.display = "block";
	};

	//--------Close Third Planet Info---------//
	document.getElementById('closeInfoThirdPlanet').onclick = function Close() {
		setTimeout(function() {
			document.getElementById('thirdPlanetInfo').style.display = "none";
		}, 200)	
	};


//---------------------------------------Four Planet---------------------------------//
	//--------Open Four Planet Info---------//
	document.getElementById('fourthPlanet').onclick = function clickOnFourthPlanet() {
		document.getElementById('fourthPlanetInfo').style.display = "block";
	};

	//--------Close Four Planet Info---------//
	document.getElementById('closeInfoFourthPlanet').onclick = function Close() {
		setTimeout(function() {
			document.getElementById('fourthPlanetInfo').style.display = "none";
		}, 200)	
	};