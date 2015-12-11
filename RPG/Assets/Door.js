var Target : Vector3;
var RequireKey = false;
var Unlock = true;
var KeyHole : GameObject;
function Start () {
	if (RequireKey == true) {
	KeyHole.SetActive(true);
	}
}
function OnTriggerStay2D (hit : Collider2D) {
if (hit.gameObject.tag == "Player" && Input.GetKeyDown("up")) {
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
