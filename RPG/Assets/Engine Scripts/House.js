var L2L : String;
var Pos : Vector2;
var Hour : float = System.DateTime.Now.Hour;
var Timed = false;
var Closed = System.DateTime.Now.Hour;
var Open = System.DateTime.Now.Hour;
function OnTriggerStay2D (hit : Collider2D) {
if (hit.gameObject.tag == "Player" && Input.GetKeyDown("up") && Timed == false) {
Application.LoadLevel(L2L);
hit.gameObject.transform.position = Pos;
}
if (hit.gameObject.tag == "Player" && Input.GetKeyDown("up") && Timed == true) {
		if (Hour < Closed && Hour > Open) {
		Debug.Log("Open");
		}
	}
}

function Update () {
Hour = System.DateTime.Now.Hour;
 }  