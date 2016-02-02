var MinRange : Vector2;
var MaxRange : Vector2;
var Redo = true;
var Speed : float;
var choicex : float;
var choicey : float;
var Water = false;
function Update () {
	
	if (Redo == true) {
	AdjustDir();
	}
		if (Water == true) {
	transform.position = Vector2.MoveTowards(transform.position, Vector2(choicex,choicey),   Speed* Time.deltaTime);
	}
}

function AdjustDir () {
Redo = false;
choicex = Random.Range(MinRange.x,MaxRange.x);
choicey = Random.Range(MinRange.y,MaxRange.y);
yield WaitForSeconds(Random.Range(2,4));
Redo = true;
}

function OnTriggerEnter2D (hit : Collider2D) {
	if (hit.gameObject.tag == "Water") {
	InWater = true;
	GetComponent.<Animator>().SetBool("Water", true);
	GetComponent.<Rigidbody2D>().gravityScale = 0;
	transform.rotation.z = 0;
	}
	}
function OnTriggerExit2D (hit : Collider2D) {
	if (hit.gameObject.tag == "Water") {
	InWater = false;
GetComponent.<Animator>().SetBool("Water", false);
	GetComponent.<Rigidbody2D>().gravityScale = 3;
	transform.rotation.z = 180;
	}
	}