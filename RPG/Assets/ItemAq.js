var Text : String;
var MessageBox : UI.Text;
var Collide = true;
var Trigger = false;

function Start () {
MessageBox = GameObject.Find("MainTextBox").GetComponent(UI.Text);
}

function OnCollisionEnter2D (hit : Collision2D) {
	if (hit.gameObject.tag == "Player" && Collide == true) {
	MessageBox.text = Text;
	gameObject.SetActive(false);
	}
}