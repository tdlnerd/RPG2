var Text : String[];
var MessageBox : UI.Text;
var line = 0;
var Disp = false;
var movedright = false;
function Update () {
	if (Disp == true) {
MessageBox.text = "Tutorial: " + Text[line];
if (Input.GetKeyDown("down") && line < Text.Length) {
	Debug.Log("Correct Code");
	line = line + 1;
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