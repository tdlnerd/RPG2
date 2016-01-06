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
if (speed > 0) {
	transform.localScale.x = Mathf.Abs(transform.localScale.x);
	}
	if (speed < 0) {
	transform.localScale.x *= -1;
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
	if (Walking == false) {
speed = Random.Range(-3,3);
}
Walking = true;
Anim.SetBool("WalkR", true);
Anim.SetFloat("Speed", (Mathf.Abs(speed/3)));
yield WaitForSeconds (Random.Range(5,10));
Choose = false;
}

function Idle () {
Anim.SetBool("WalkR", false);
Walking = false;
yield WaitForSeconds (Random.Range(5,10));
Choose = false;
}