var Col : Collider;
var Anim : Animator; 
function Start () {
	if (PlayerPrefs.GetInt("Boat") == 1) {
	Col.enabled = false;
	}
}

function Update () {
	if (Anim == null) {
	Anim = GameObject.Find("Map View3").GetComponent(Animator);
	}
}

function OnTriggerStay (hit : Collider) {
	if (hit.gameObject.tag == "OWPlayer" && PlayerPrefs.GetInt("Boat") == 1) {
	Anim.SetBool("Boat", true);
	}
}

function OnTriggerExit (hit : Collider) {
	if (hit.gameObject.tag == "OWPlayer") {
	Anim.SetBool("Boat", false);
	}
}