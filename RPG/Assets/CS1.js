var Cam : GameObject;
var Col : Color;
function Start () {
PlayerPrefs.SetInt("CS1", 1);
Cam = GameObject.Find("Camera");
yield WaitForSeconds (12);
RedLighting();
yield WaitForSeconds (2);
InvokeRepeating("Shake", 0, 0.05);
yield WaitForSeconds (4);
InvokeRepeating("Zoom", 0, 0.05);
yield WaitForSeconds (2);
Application.LoadLevel("Opening");
}

function Update () {

}

function Shake () {
Cam.transform.position.x += Random.Range(-0.20, 0.20);
Cam.transform.position.y += Random.Range(-0.20, 0.20);
}

function RedLighting () {
var arr : Renderer[] = FindObjectsOfType(Renderer) as Renderer[];
		for (var doit : Renderer in arr) {
			doit.GetComponent(Renderer).material.color = Col;
     }
}

function Zoom () {
Cam.GetComponent.<Camera>().fieldOfView -= 1;
}