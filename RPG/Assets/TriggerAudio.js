var Source : GameObject;
var Music : AudioClip;
function Start() {
Source = GameObject.Find("Camera");
}

function OnTriggerEnter2D (hit: Collider2D) {
if (hit.gameObject.tag == "Player") {
	if (Source.GetComponent.<AudioSource>().clip == Music) {
	return;
	}
Source.GetComponent.<AudioSource>().Stop();
Source.GetComponent.<AudioSource>().clip = Music;
Source.GetComponent.<AudioSource>().Play();
}
}