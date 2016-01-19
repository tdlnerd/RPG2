var damage : UI.Slider;
function OnCollisionEnter2D (hit: Collision2D) {
	if (hit.gameObject.tag == "Enemy") {
	damage.value -= hit.gameObject.GetComponent(EnemyDamage).Dam;
}
}

function OnTriggerEnter2D (hit: Collider2D) {
	if (hit.gameObject.tag == "Enemy") {
	damage.value -= hit.gameObject.GetComponent(EnemyDamage).Dam;
}
}


function Update () {
if (damage.value < 1) {
Application.LoadLevel("GO");
var Can = GameObject.Find("Canvas");
Destroy(Can);
Destroy(gameObject);
}
}