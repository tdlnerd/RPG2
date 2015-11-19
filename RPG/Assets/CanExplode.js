var Replacement : GameObject;
var GOTO : Vector2;
function OnTriggerEnter2D (hit : Collider2D) {
	if (hit.gameObject.tag == "Explode") {
	var re = Instantiate(Replacement, transform.position, transform.rotation);
	re.gameObject.GetComponent(Door).Target = GOTO;
	Destroy(gameObject);
	}
}

