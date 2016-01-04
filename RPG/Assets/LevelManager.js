var Knight : GameObject;
var PlayerSprite : GameObject;
var Lighting : Color32;
var Cam : GameObject;
var Music : AudioClip;
var DisCamera = false;
var RequireDefeat = false;
var Exit : GameObject;

function Start () {
yield WaitForSeconds (0.1);
PlayerSprite.GetComponent(Renderer).material.color = Lighting;
Cam.GetComponent.<AudioSource>().clip = Music;
Cam.GetComponent.<AudioSource>().Play();
	if (DisCamera == true) {
	Cam.GetComponent.<Camera>().enabled = false;
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
