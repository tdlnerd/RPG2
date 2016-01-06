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

function Start () {
yield WaitForSeconds (0.1);
PlayerSprite.GetComponent(Renderer).material.color = Lighting;
Cam.GetComponent.<AudioSource>().clip = Music;
Cam.GetComponent.<AudioSource>().Play();
	if (DisCamera == true) {
	Cam.GetComponent.<Camera>().enabled = false;
	}
	if (System.DateTime.Now.Hour > 17 && Timed == true) {
	Night();
	}
	if (System.DateTime.Now.Hour < 6 && Timed == true) {
	Night();
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
var arr : Renderer[] = FindObjectsOfType(Renderer) as Renderer[];
		for (var doit : Renderer in arr) {
			doit.GetComponent(Renderer).material.color = TimedLightingNight;
GetComponent.<RenderSettings>().skybox = NightSky;
     }
     }
