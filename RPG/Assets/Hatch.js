var Target : Vector3;
var RequireKey = false;
var Unlock = true;

function Start () {
}
function OnTriggerStay2D (hit : Collider2D) {
if (hit.gameObject.tag == "Player") {
	if (RequireKey == true && Unlock == false) {
	var Keys = hit.GetComponent.<ItemUse>().KeyCount;
		if (Keys > 0) {
		hit.GetComponent.<ItemUse>().KeyCount -= 1;
		Unlock = true;
	}
	}
if (Unlock == true) {
hit.transform.position = Target;
}

}
} 
