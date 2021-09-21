<div id="alarmWindow">
	<div id="alarmHeader">ALARM!</div>
	<div class="closeWindowAlarm" id="closeAlarmWindow"></div>
	<div class="map">
		<p>An epidemic of an unknown disease has begun on the planet!<p>
		<div class="blocks">
			<div class="alarmHeader">Epidemic Start</div>
			<p>Infection status:<p>
			<div id="startPandemic"></div>
			<div id="totalStart"></div>
			<div id="infectedStart"></div>
		</div>
		<div class="blocks">
			<div class="alarmHeader">Epidemic End (prognosis)</div>
			<p>Infection status:<p>
			<div id="endPandemic"></div>
			<div id="totalEnd"></div>
			<div id="infectedEnd"></div>
		</div>
	</div>
	<p>make a choice:</p>
	<div id="choice">
		<button onclick="window.location.href='apocalypse.php'">just watch</button>
		<button onclick="window.location.href='all_ok.php'">vaccination</button>
	</div>
</div>