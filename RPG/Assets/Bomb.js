var Smoke : GameObject;
function Start () {
yield WaitForSeconds(3);
var b = Instantiate(Smoke, transform.position, transform.rotation);
Destroy(gameObject);
}