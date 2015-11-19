var Target : Vector3;
function OnTriggerStay2D (hit : Collider2D) {
if (hit.gameObject.tag == "Player" && Input.GetKeyDown("up")) {
hit.transform.position = Target;
}
}  