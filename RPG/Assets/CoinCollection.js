
var Cash : int;
var SFX : AudioClip;
var Save : SaveSystem;
function Start () {
Cash = PlayerPrefs.GetInt("Cash");
}
function OnTriggerEnter2D (hit : Collider2D) {
	if (hit.gameObject.tag == "coin") {
	var vscript = hit.GetComponent(Value);
	Cash += vscript.CoinValue;
	Destroy(hit.gameObject);
	GetComponent.<AudioSource>().PlayOneShot(SFX);
	}
}

