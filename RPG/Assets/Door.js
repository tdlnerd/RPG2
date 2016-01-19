var Target : Vector3;
var RequireKey = false;
var Unlock = true;
var KeyHole : GameObject;
var Pos = true;
var Level = false;
var L2L : String;
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
if (Unlock == true && Pos == true) {
hit.transform.position = Target;
}
if (Unlock == true && Level == true) {
Application.LoadLevel(L2L);
hit.transform.position = Target;
}
}
} 
