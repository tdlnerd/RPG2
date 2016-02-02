var Force : int;
function OnTriggerEnter2D (hit: Collider2D) {
	if (hit.gameObject.tag == "Player") {
	hit.GetComponent.<Rigidbody2D>().velocity.x = Force;
	}
}