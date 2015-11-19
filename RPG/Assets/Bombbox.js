var Bomb : float;
var MessageBox : UI.Text;
var Collected = false;

function Start () {
MessageBox = GameObject.Find("MainTextBox").GetComponent(UI.Text);
}

function OnCollisionStay2D (hit : Collision2D) {
	Debug.Log("Hit chest " + hit.gameObject.tag);
	if (hit.gameObject.tag == "Player") {
	var Man = hit.gameObject.GetComponent(ItemUse);
		if (Input.GetKeyDown("up") && Collected == false && Man.BombCount < 15) {
	Collected = true;
	Man.BombCount += Bomb;
	MessageBox.text = "Acquired " + Bomb + " bombs!";
	yield WaitForSeconds (1.5);
	MessageBox.text = " ";
	Collected = false;
	}
	}

}