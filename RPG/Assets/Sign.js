var Text : String;
var MessageBox : UI.Text;
var Name : String;
function Start () {
MessageBox = GameObject.Find("MainTextBox").GetComponent(UI.Text);
}
function OnTriggerEnter2D (Hit : Collider2D) {
	if (Hit.gameObject.tag == "Player") {
MessageBox.text = Name + ": " + Text;
}
}

function OnTriggerExit2D () {
MessageBox.text = " ";
}