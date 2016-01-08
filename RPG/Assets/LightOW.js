var Timed = false;
var TimedLightingNight : Color;
var TimedLightingEvening : Color;
var Hour = System.DateTime.Now.Hour;
var Directional : Light;

function Start () {
Hour = System.DateTime.Now.Hour;
yield WaitForSeconds (0.1);
	if (System.DateTime.Now.Hour > 19 && Timed == true) {
	Night();
	}
	if (System.DateTime.Now.Hour < 6 && Timed == true) {
	Night();
	}
	if (System.DateTime.Now.Hour < 20 && System.DateTime.Now.Hour > 14 && Timed == true) {
	Evening();
	}
}

function Night () {
Directional.intensity /= 2;
var arr : Renderer[] = FindObjectsOfType(Renderer) as Renderer[];
		for (var doit : Renderer in arr) {
			doit.GetComponent(Renderer).material.color = TimedLightingNight;
     }
     }

function Evening () {
var arr : Renderer[] = FindObjectsOfType(Renderer) as Renderer[];
		for (var doit : Renderer in arr) {
			doit.GetComponent(Renderer).material.color = TimedLightingEvening;
     }
     }