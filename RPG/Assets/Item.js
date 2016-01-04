var Text : String[];
var MessageBox : UI.Text;
var Name : String;
var line = 0;
var Disp = false;
var Yes : UI.Button;
var No : UI.Button;
var Con : Confirm;
var LL = false;
var CashS : CoinCollection;
var Price : int;
var Purchasing = false;
function OnTriggerStay2D () {

Disp = true;
}

function OnTriggerExit2D () {
Yes.gameObject.SetActive(false);
		No.gameObject.SetActive(false);
Disp = false;
MessageBox.text = " ";
line = 0;
LL = false;
}

function Update () {
	if (Disp == true) {
MessageBox.text = Text[line];
if (Input.GetKeyDown("down" && Purchasing == false) && line < Text.Length) {
	line = line + 1;
	}
	if (Input.GetKeyDown("down") && line == (Text.Length-1) && Purchasing == false) {
	LL = true;
	Yes.gameObject.SetActive(true);
	No.gameObject.SetActive(true);
	}
}
	if (Con.yes == true && LL == true){
		Con.yes = false;
		Yes.gameObject.SetActive(false);
		No.gameObject.SetActive(false);
		Purchase();
		MessageBox.text = "Processing...";
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
	}
	
}