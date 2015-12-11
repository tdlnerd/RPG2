var chestIsOpen = false;
var hit : RaycastHit;
var Item : GameObject;
function Update () {
print(chestIsOpen);
if (chestIsOpen == true && Input.GetKeyDown("up")) {
var prefab = Instantiate(Item, transform.position, transform.rotation);
Destroy(gameObject);
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