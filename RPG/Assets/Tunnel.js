var Target : Vector3;
var Anim : Animator;
var mode = true;
var Cam : float;
function OnTriggerStay2D (hit : Collider2D) {
if (hit.gameObject.tag == "Player" && Input.GetKeyDown("up")) {
hit.transform.position = Target;
yield WaitForSeconds(0.5);
Anim.SetBool("Front", mode);
hit.transform.rotation.y = Cam;
}
}  