var Walking = false;
var Choose = false;
var Anim : Animator;
var speed : float;
var Timed = true;
var StartH = System.DateTime.Now.Hour;
var EndH = System.DateTime.Now.Hour;
var Hour = System.DateTime.Now.Hour;
var corrected = false;

function Start () {
Hour = System.DateTime.Now.Hour;
	if (Hour > StartH && Hour < EndH) {
	gameObject.SetActive(true);
	}
	else {
	gameObject.SetActive(false);
	}
}

function Update () {
if (Choose == false) {
Activity();
}
if (Walking == true) {
 transform.Translate(Vector2((0.1 * speed * Time.deltaTime),0));
 }
 if (Walking == true && speed == 0) {
 Idle();
 }
 Debug.Log(speed);
 if (speed > 0) {
	transform.localScale.x = Mathf.Abs(transform.localScale.x);
	corrected = false;
	}
if (speed < 0 && corrected == false) {
	transform.localScale.x *= -1;
	corrected = true;
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
Choose = true;
speed = Random.Range(-3,3);
Walking = true;
Anim.SetBool("WalkR", true);
Anim.SetFloat("Speed", (Mathf.Abs(speed/3)));
yield WaitForSeconds (Random.Range(5,10));
Choose = false;
}

function Idle () {
Choose = true;
Anim.SetBool("WalkR", false);
Walking = false;
yield WaitForSeconds (Random.Range(5,10));
Choose = false;
}