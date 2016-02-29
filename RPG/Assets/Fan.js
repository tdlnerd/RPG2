var Force : int;
var Water = false;
var PS : EllipsoidParticleEmitter;
var Vert = false;
var Hor = true;
function OnTriggerEnter2D (hit: Collider2D) {
	if (hit.gameObject.tag == "Player" && Water == true) {
		if (Hor == true) {
	hit.GetComponent.<Rigidbody2D>().AddForce(Vector2(Force,0));
	}
	if (Vert == true) {
	hit.GetComponent.<Rigidbody2D>().AddForce(Vector2(0,Force));
	}
	}
	if (hit.gameObject.tag == "Water") {
	Water = true;
	PS.emit = true;
	GetComponent.<Animator>().SetBool("Turn", true);
	}
}

	function OnTriggerExit2D (hit : Collider2D) {
	if (hit.gameObject.tag == "Water") {
	Water = false;
	PS.emit = false;
	GetComponent.<Animator>().SetBool("Turn", false);
	}
	}