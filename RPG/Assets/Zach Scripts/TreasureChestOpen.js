var chestIsOpen = false;
var hit : RaycastHit;
var Item : GameObject;
var Open : Sprite;
var Complete = false;
function Update () {
print(chestIsOpen);
if (chestIsOpen == true && Input.GetKeyDown("up") && Complete == false) {
var prefab = Instantiate(Item, transform.position, transform.rotation);
GetComponent.<Renderer>().sprite = Open;
Complete = true;
}
}

function OnTriggerEnter2D (hit : Collider2D) {
	if (hit.gameObject.tag == "Player") {
	chestIsOpen = true;
	}
	}

function OnTriggerExit2D (hit : Collider2D) {
	if (hit.gameObject.tag == "Player") {
	chestIsOpen = false;
	}
	}