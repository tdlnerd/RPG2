var Anim : Animator;
function OnTriggerStay2D(hit : Collider2D) {
Anim.SetBool("Grounded", true);
Debug.Log("ONGROUND");
}

function OnTriggerExit2D (hit : Collider2D) {
Debug.Log("OFFGROUND");
}