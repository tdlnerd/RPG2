var Force : int;
var Water = false;
var PS : EllipsoidParticleEmitter;
function OnTriggerEnter2D (hit: Collider2D) {
	if (hit.gameObject.tag == "Player" && Water == true) {
	hit.GetComponent.<Rigidbody2D>().AddForce(Vector2(Force,0));
	hit.GetComponent.<Rigidbody2D>().AddTorque(Force);
	}
	if (hit.gameObject.tag == "Water") {
	Water = true;
	PS.emit = true;
	}
}

	function OnTriggerExit2D (hit : Collider2D) {
	if (hit.gameObject.tag == "Water") {
	Water = false;
	PS.emit = false;
	}
	}