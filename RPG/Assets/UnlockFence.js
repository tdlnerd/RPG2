var Check : String;
var Unlocked : String;
var Text : String;
var MessageBox : UI.Text;
var Message : String;
function Start () {
	MessageBox = GameObject.Find("MainTextBox").GetComponent(UI.Text);
	PlayerPrefs.GetInt(Check);
	if (Check == 1 && Unlocked == 1 ) {
	gameObject.SetActive(false);
	}
}

function OnCollisionEnter2D (hit : Collision2D) {
	if (hit.gameObject.tag == "Player" && Check == 1) {
	PlayerPrefs.SetInt(Unlocked, 1);
	MessageBox.text = Message;
	yield WaitForSeconds (1);
	MessageBox.text = " ";
	gameObject.SetActive(false);
	}
}