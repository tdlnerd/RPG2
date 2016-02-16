var Text : String[];
var MessageBox : UI.Text;
var Name : String;
var line = 0;
var Disp = false;
var LL = false;
var CashS : CoinCollection;
var Price : int;
var Purchasing = false;
var Slot : GameObject;
var Item : GameObject;
var Added = false;
function OnTriggerStay2D () {

Disp = true;
}

function OnTriggerExit2D () {
Disp = false;
MessageBox.text = " ";
line = 0;
LL = false;
Purchasing = false;
}

function Update () {
	if (Disp == true && Purchasing == false) {
MessageBox.text = Text[line];
if (Input.GetKeyDown("down") && Purchasing == false && line < Text.Length && LL == false) {
	line = line + 1;
	}
	if (Input.GetKeyDown("down") && line == (Text.Length-1) && Purchasing == false) {
	LL = true;
	}
}
	if (Input.GetKeyDown("y") && LL == true){
		Purchase();
		Added = false;
		}	
	if (Input.GetKeyDown("n") && LL == true){
		Cancel();
		}
}


function Start () {
MessageBox = GameObject.Find("MainTextBox").GetComponent(UI.Text);
Con = GameObject.Find("Canvas").GetComponent(Confirm);
CashS = GameObject.Find("Knight").GetComponent(CoinCollection);
}

function Purchase() {
	Purchasing = true;
	if (CashS.Cash < Price) {
	MessageBox.text = "You don't have enough cash for this.";
	return;
	}
	MessageBox.text = "Thank you for your purchase!";
	var allChildren = Slot.GetComponentsInChildren(Transform);
	for (var child : Transform in allChildren) {
		if (child.childCount == 0 && child.gameObject.name == "SLOT" && Added == false) {
		var Icon = Instantiate(Item, transform.position, Quaternion.identity);
		Icon.transform.SetParent(child, false);
		Added = true;
		CashS.Cash -= Price;
}
}
}

function Cancel () {
Purchasing = true;
MessageBox.text = "Alright. Feel free to look around for anything else!";
}