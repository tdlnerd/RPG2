var BombMenu : UI.Toggle;
var SwordMenu : UI.Toggle;
var BombCounter : UI.Text;
var KeyCounter : UI.Text;
var Bomb : GameObject;
var BombCount : int;
var KeyCount : int;
var Anim : Animator;
var Sword : Collider2D;

function Start () {
BombCount = PlayerPrefs.GetFloat("Bomb");
KeyCount = PlayerPrefs.GetFloat("Key");
BombMenu = GameObject.Find("Bomb").GetComponent(UI.Toggle);
SwordMenu = GameObject.Find("Sword").GetComponent(UI.Toggle);
}
function Update () {
	KeyCounter.text = "KEY x " + KeyCount;
	if (Input.GetKeyDown("x")) {
		if (SwordMenu.isOn == true) {
		Attack();
		}
		if (BombMenu.isOn == true && BombCount > 0 && GameObject.FindGameObjectsWithTag("Bomb").Length < 2) {
		var b = Instantiate(Bomb, transform.position, transform.rotation);
		BombCount -= 1;
		}
	}
	if (BombCount > 15) {
	BombCount = 15;
	}
}

function Attack() {
Anim.SetBool("Sword", true);
Sword.enabled = true;
yield WaitForSeconds(0.5);
Anim.SetBool("Sword", false);
Sword.enabled = false;
}

function OnCollisionEnter2D (hit : Collision2D) {
	if (hit.gameObject.tag == "GenKey") {
	KeyCount += 1;
	Destroy(hit.gameObject);
	}
}