var Walking = false;
var Choose = false;
var Anim : Animator;
var speed : float;
function Update () {
if (Choose == false) {
Activity();
}
if (Walking == true) {
 transform.Translate(Vector2((0.1 * speed * Time.deltaTime),0));
 }
}

function Activity() {
Choose = true;
var choice = Random.Range(0,2);
	if (choice == 0) {
	Walk();
	}
	if (choice == 1) {
	Idle();
	}
	
}

function Walk () {
Walking = true;
speed = Random.Range(-3,3);
Anim.SetFloat("Speed", (Mathf.Abs(speed/3)));
Anim.SetBool("Walk", true);
	if (speed > 0) {
	transform.rotation.y = 180;
	}
	if (speed < 0) {
	transform.rotation.y = -180;
	}
yield WaitForSeconds (Random.Range(5,10));
Choose = false;
}

function Idle () {
Walking = false;
Anim.SetBool("Walk", false);
yield WaitForSeconds (Random.Range(5,10));
Choose = false;
}