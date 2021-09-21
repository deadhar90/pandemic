<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>pandemic</title>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script type="text/javascript" src="js/planetary.js" defer></script>
	<script type="text/javascript" src="js/clickOnPlanet.js" defer></script>
	<script type="text/javascript" src="js/start_simulation.js" defer></script>
	<script type="text/javascript" src="js/pandemicStart.js" defer></script>
	<script type="text/javascript" src="js/alarmWindowOpen.js" defer></script>
	
	<style type="text/css">
		@import url(css/planetary_style.css);
		@import url(css/general_style.css);
		@import url(css/planetaryInfo_style.css);
		@import url(css/alarmWindow_style.css);
	</style>
</head>
<body>
	<div id="youDestroer">
		<h1>You have just shrunk this solar system. You destroyed it! Don't do this again!</h1>
	</div>
	<div id="content">
			<!-------- Normall Screen resolution------>
				<!----------Planetary System (only for Normal resolution)--->
		<?php include "planetInfo.php" ?>
		<?php include "alarmWindow.php" ?>
		<div id="planetarySystem">
			<div class="orbit" id="orbitFirstPlanet"></div>
			<div class="orbit" id="orbitSecondPlanet"></div>
			<div class="orbit" id="orbitThirdPlanet"></div>
			<div class="orbit" id="orbitFourthPlanet"></div>
			<div class="planetStyle" id="planetarySun"></div>
			<div class="planetStyle" id="firstPlanet"></div>
			<div class="planetStyle" id="secondPlanet"></div>
			<div class="planetStyle" id="thirdPlanet"></div>		
			<div class="planetStyle" id="fourthPlanet"></div>
		</div>
		<!---------- End Portfolio / Planetari portfolio ------------->
		<button id="simulation" class="start">Star Simulation</button>
	</div>
	<?php include "footer.php" ?>
</body>
</html>