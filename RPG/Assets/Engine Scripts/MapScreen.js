var L2L : String;
var MessageBox : UI.Text;
function Start () {
MessageBox = GameObject.Find("MainTextBox").GetComponent(UI.Text);
}

function OnCollisionStay2D (hit : Collision2D) {
MessageBox.text = "Press UP to return to OVERWORLD";
if (hit.gameObject.tag == "Player" && Input.GetKeyDown("up")) {
Application.LoadLevel(L2L);
}
}

function OnCollisionExit2D (hit : Collision2D) {
MessageBox.text = " ";
}