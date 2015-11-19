var L2L : String;
var Pos : Vector2;
function OnTriggerStay2D (hit : Collider2D) {
if (hit.gameObject.tag == "Player" && Input.GetKeyDown("up")) {
Application.LoadLevel(L2L);
hit.gameObject.transform.position = Pos;
}
}  