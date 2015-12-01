var Source : GameObject;
var Music : AudioClip;
function Start() {
Source = GameObject.Find("Main Camera");
}

function OnTriggerEnter (hit: Collider) {
if (hit.gameObject.tag == "OWPlayer") {
	if (Source.GetComponent.<AudioSource>().clip == Music) {
	return;
	}
Source.GetComponent.<AudioSource>().Stop();
Source.GetComponent.<AudioSource>().clip = Music;
Source.GetComponent.<AudioSource>().Play();
}
}