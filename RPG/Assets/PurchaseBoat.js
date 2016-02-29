var CashS : CoinCollection;
var Cost : int;
var MB : UI.Text;
function Start () {
	if (PlayerPrefs.GetInt("Boat") == 1) {
	Destroy(gameObject);
	}
CashS = GameObject.Find("Knight").GetComponent(CoinCollection);
MB = GameObject.Find("MainTextBox").GetComponent(UI.Text);
}
function OnTriggerStay2D (hit : Collider2D) {
	if (hit.gameObject.tag == "Player") {
		if (Input.GetKeyDown("y") && CashS.Cash >= Cost) {
			MB.text = "Thank you for your purchase!";
			Boat();
			}
		if (Input.GetKeyDown("y") && CashS.Cash <= Cost) {
			MB.text = "You don't have enough money!";
			}
		if (Input.GetKeyDown("n")) {
			MB.text = "Alright. Never mind.";
			}
	}
}

function Update () {
	if (CashS == null) {
	CashS = GameObject.Find("Knight").GetComponent(CoinCollection);
	}
	if (MB == null) {
	MB = GameObject.Find("MainTextBox").GetComponent(UI.Text);
	}
}

function Boat () {
PlayerPrefs.SetInt("Boat", 1);
yield WaitForSeconds (0.5);
Destroy(gameObject);
}