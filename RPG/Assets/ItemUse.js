var BombMenu : UI.Toggle;
var SwordMenu : UI.Toggle;
var BombCounter : UI.Text;
var Bomb : GameObject;
var BombCount : int;
var Anim : Animator;
function Update () {
	if (Input.GetKeyDown("x")) {
		if (SwordMenu.isOn == true) {
		Attack();
		}
		if (BombMenu.isOn == true && BombCount > 0) {
		var b = Instantiate(Bomb, transform.position, transform.rotation);
		BombCount -= 1;
		}
	}
	if (BombCount > 15) {
	BombCount = 15;
	}
	BombCounter.text = "x " + BombCount.ToString();
}

function Attack() {
Anim.SetBool("Sword", true);
yield WaitForSeconds(0.5);
Anim.SetBool("Sword", false);
}