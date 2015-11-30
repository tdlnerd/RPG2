function Update () {
	if (transform.position.z < 1 && transform.position.z > -1) {
	GetComponent.<Collider2D>().enabled = true;
	}
	
	else {
	GetComponent.<Collider2D>().enabled = false;
	}
}