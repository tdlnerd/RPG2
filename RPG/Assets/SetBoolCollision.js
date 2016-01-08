var Setting : String;
function OnCollisionEnter2D (hit : Collision2D) {
	if (hit.gameObject.tag == "Player") {
	PlayerPrefs.SetInt(Setting, 1);
	}
}