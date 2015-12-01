var Source : GameObject;
var Music : AudioClip;
function Start() {
Source = GameObject.Find("Main Camera");
}

function OnTriggerEnter (hit: Collider) {
if (hit.gameObject.tag == "OWPlayer") {
Source.GetComponent.<AudioSource>().Stop();
Source.GetComponent.<AudioSource>().clip = Music;
Source.GetComponent.<AudioSource>().Play();
}
}