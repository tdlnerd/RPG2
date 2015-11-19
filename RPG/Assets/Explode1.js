
function OnTriggerEnter2D (hit : Collider2D) {
	if (hit.gameObject.tag == "Explode") {
	Destroy(gameObject);
}
}