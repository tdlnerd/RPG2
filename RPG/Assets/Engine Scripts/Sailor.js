var Text : String[];
var MessageBox : UI.Text;
var NPC : String;
var line = 0;
var Disp = false;
var Speech : AudioClip[];
var Audio = true;
var Backtalk : Color;
var FS : float;
function OnTriggerStay2D (hit : Collider2D) {
	if (hit.gameObject.tag == "Player") {
Disp = true;
}
}

function OnTriggerExit2D (hit : Collider2D) {
if (hit.gameObject.tag == "Player") {
Disp = false;
MessageBox.text = " ";
line = 0;
}
}

function Update () {
	if (Disp == true) {
MessageBox.text = NPC + ": " + Text[line];
if (Input.GetKeyDown("down") && line < Text.Length) {
	Debug.Log("Correct Code");
	line = line + 1;
		if (Audio == true) {
		GetComponent.<AudioSource>().Stop();
		GetComponent.<AudioSource>().PlayOneShot(Speech[line]);
		}
	}
	if (Input.GetKeyDown("down") && line == Text.Length) {
	line = 0;
	MessageBox.text = " ";
	}
}

	if (line == 1) {
	MessageBox.color = Backtalk;
	MessageBox.fontSize = FS/2;
	}
	if (line != 1) {
	MessageBox.color = Color.black;
	MessageBox.fontSize = FS;
	}
		
}

function Start () {
MessageBox = GameObject.Find("MainTextBox").GetComponent(UI.Text);
FS = MessageBox.fontSize;
}