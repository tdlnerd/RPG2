var L2L : String;
function OnTriggerEnter (hit : Collider) {
	if (hit.gameObject.tag == "OWPlayer") {
	Application.LoadLevel(L2L);
	}
	}