var ReSpawn : Vector2;
function OnTriggerEnter2D (hit : Collider2D) {
	if (hit.gameObject.tag == "Player") {
	hit.transform.position = ReSpawn;

}
}