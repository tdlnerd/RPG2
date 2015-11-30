var CoinCounter : UI.Text;
var Cash : float;
var SFX : AudioClip;
function OnTriggerEnter2D (hit : Collider2D) {
	if (hit.gameObject.tag == "coin") {
	var vscript = hit.GetComponent(Value);
	Cash += vscript.CoinValue;
	Destroy(hit.gameObject);
	GetComponent.<AudioSource>().PlayOneShot(SFX);
	}
}

function Update () {
CoinCounter.text = "$" + Cash.ToString();
}