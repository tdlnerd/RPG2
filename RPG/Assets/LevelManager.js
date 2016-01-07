var Knight : GameObject;
var PlayerSprite : GameObject;
var Lighting : Color32;
var Cam : GameObject;
var Music : AudioClip;
var DisCamera = false;
var RequireDefeat = false;
var Exit : GameObject;
var Timed = false;
var TimedLightingNight : Color;
var NightSky : Material;
var TimedLightingEvening : Color;
var EveningSky : Material;
var Hour = System.DateTime.Now.Hour;
var Directional : Light;
function Start () {
Hour = System.DateTime.Now.Hour;
yield WaitForSeconds (0.1);
PlayerSprite.GetComponent(Renderer).material.color = Lighting;
Cam.GetComponent.<AudioSource>().clip = Music;
Cam.GetComponent.<AudioSource>().Play();
	if (DisCamera == true) {
	Cam.GetComponent.<Camera>().enabled = false;
	}
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

function Update () {
	if (Cam == null) {
Cam = GameObject.Find("Camera");
}
if (PlayerSprite == null) {
PlayerSprite = GameObject.Find("Knight Walking_0");
}
if (Knight == null) {
Knight = GameObject.Find("Knight");
}
	if (RequireDefeat == true && GameObject.FindGameObjectsWithTag("Enemy").Length < 1) {
	Exit.SetActive(true);
	}
}

function Night () {
Directional.intensity /= 2;
var arr : Renderer[] = FindObjectsOfType(Renderer) as Renderer[];
		for (var doit : Renderer in arr) {
			doit.GetComponent(Renderer).material.color = TimedLightingNight;
GetComponent.<RenderSettings>().skybox = NightSky;
     }
     }

function Evening () {
var arr : Renderer[] = FindObjectsOfType(Renderer) as Renderer[];
		for (var doit : Renderer in arr) {
			doit.GetComponent(Renderer).material.color = TimedLightingEvening;
GetComponent.<RenderSettings>().skybox = EveningSky;
     }
     }
