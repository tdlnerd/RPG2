var damage : UI.Slider;
function OnCollisionEnter2D (hit: Collision2D) {
	if (hit.gameObject.tag == "Enemy") {
	damage.value -= hit.gameObject.GetComponent(EnemyDamage).Dam;
}
}
