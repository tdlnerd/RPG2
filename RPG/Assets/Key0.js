var Ground : GameObject;
var flasher = false;

function Start() {
	if (PlayerPrefs.GetInt("Key0") == 1) {
	Destroy(gameObject);
	}
	}
function OnCollisionEnter2D (hit : Collision2D) {
Debug.Log("Collision");
	if (hit.gameObject.tag == "Player" ) {
	flasher = true;
	yield WaitForSeconds (2);
	flasher = false;
	Destroy(Ground);
	}
}

function Flash () {
	if (Ground == null) {
	return;
	}
	flasher = false;
	Ground.GetComponent.<Renderer>().enabled = false;
	yield WaitForSeconds (0.1);
	Ground.GetComponent.<Renderer>().enabled = true;
	flasher = true;
}

function Update () {
	if (flasher == true) {
	Flash();
	}
}