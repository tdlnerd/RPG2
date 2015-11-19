var L2L : String;
var Pos : Vector2;
function OnCollisionEnter2D (hit : Collision2D) {
if (hit.gameObject.tag == "Player"){
Application.LoadLevel(L2L);
hit.gameObject.transform.position = Pos;
}
}  