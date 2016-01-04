var Knight : GameObject;

function Start () {
Knight = GameObject.Find("Knight");

}

function Update () {
if (transform.position.x- Knight.transform.position.x > 0) {
		transform.rotation.y = 0;
		}
		if (transform.position.x- Knight.transform.position.x < 0) {
		transform.rotation.y = 180;
		}
}