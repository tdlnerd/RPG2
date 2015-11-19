var Anim : Animator;
var Para : String;
function OnCollisionEnter2D (hit : Collision2D) {
	Debug.Log("Collision");
	if (hit.gameObject.tag == "Player") {
	Anim.SetBool(Para, true);
	}
}