var L2L : String;
var Anim : Animator; 
function OnTriggerStay (hit : Collider) {
if (hit.gameObject.tag == "OWPlayer" && Input.GetKeyDown("space")) {
Anim.SetBool("Trans", true);
PlayerPrefs.SetFloat("MapScreenX", hit.transform.position.x);
PlayerPrefs.SetFloat("MapScreenY", hit.transform.position.y);
yield WaitForSeconds (0.9);
Application.LoadLevel(L2L);
}
}