var L2L : String;
var Pos : Vector2;
var Hour : float = System.DateTime.Now.Hour;
var Timed = false;
var Closed = System.DateTime.Now.Hour;
var Open = System.DateTime.Now.Hour;
var Text : UI.Text;

function Start () {
yield WaitForSeconds (0.05);
Text = GameObject.Find("MainTextBox").GetComponent(UI.Text);
}
function OnTriggerStay2D (hit : Collider2D) {
if (hit.gameObject.tag == "Player" && Input.GetKeyDown("up") && Timed == false) {
Application.LoadLevel(L2L);
hit.gameObject.transform.position = Pos;
}
if (hit.gameObject.tag == "Player" && Input.GetKeyDown("up") && Timed == true) {
		if (Hour < Closed && Hour > Open) {
		Application.LoadLevel(L2L);
		hit.gameObject.transform.position = Pos;
		}
		if (Hour > Closed) {
		Text.text = "This building is open from " + Open + " to " + Closed + ".";
		}
		if (Hour < Open) {
		Text.text = "This building is open from " + Open + ":00 to " + Closed + ":00.";
		}
	}
}

function Update () {
Hour = System.DateTime.Now.Hour;
 }  