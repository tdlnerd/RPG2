var Anim : Animator;
function OnCollisionEnter2D (hit : Collision2D) {
if (hit.gameObject.tag == "Player") {
Anim.SetBool("Trig", true);
}
}