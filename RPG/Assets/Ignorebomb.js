

function Update () {
	if (GameObject.FindGameObjectsWithTag("Bomb").length > 1) {
Physics2D.IgnoreCollision(GameObject.FindWithTag("Bomb").GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
	}
}