var MessageBox : UI.Text;

function OnTriggerEnter2D (hit: Collider2D) {
	if (hit.gameObject.tag ==  "Player") {
	MessageBox = GameObject.Find("MainTextBox").GetComponent(UI.Text);
	MessageBox.text = "You found the prophecy!";
	Application.LoadLevel("Main Cutscene");
	}
}