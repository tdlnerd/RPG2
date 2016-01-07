var Check : String;
var Unlocked : String;
var Text : String;
var MessageBox : UI.Text;
var Message : String;
var Fence : GameObject;
var Bool : int;
var UnlockedBool : int;
function Start () {
	MessageBox = GameObject.Find("MainTextBox").GetComponent(UI.Text);
	Bool = PlayerPrefs.GetInt(Check);
	UnlockedBool = PlayerPrefs.GetInt(Unlocked);
	if (Bool == 1 && UnlockedBool == 1 ) {
	Fence.SetActive(false);
	}
}

function OnCollisionEnter2D (hit : Collision2D) {
	if (hit.gameObject.tag == "Player" && Bool == 1) {
	PlayerPrefs.SetInt(Unlocked, 1);
	MessageBox.text = Message;
	yield WaitForSeconds (1);
	MessageBox.text = " ";
	Fence.SetActive(false);
	}
}