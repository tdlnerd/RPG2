var L2L : String;
var Anim : Animator; 
function OnTriggerStay (hit : Collider) {
if (hit.gameObject.tag == "OWPlayer" && Input.GetKeyDown("space")) {
Anim.SetBool("Trans", true);
yield WaitForSeconds (0.9);
Application.LoadLevel(L2L);
}
}