var Anim : Animator;
function OnTriggerStay2D(hit : Collider2D) {
Anim.SetBool("Grounded", true);

}

function OnTriggerExit2D (hit : Collider2D) {

}