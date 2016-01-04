var Text : String[];
var MessageBox : UI.Text;
var NPC : String;
var line = 0;
var Disp = false;
var Speech : AudioClip[];
var Audio = true;

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
}

function Start () {
MessageBox = GameObject.Find("MainTextBox").GetComponent(UI.Text);
}