var previous: Vector3;
var velocity: float;
var Anim : Animator;
function Update () {
velocity = ((transform.position.x - previous.x)) / Time.deltaTime;
Adjust();
Anim.SetFloat("Speed", Mathf.Abs(velocity));
	if (Input.GetKeyDown("space")) {
	Anim.SetBool("Grounded", false);
	}
}

function Adjust () {
yield WaitForSeconds (Time.deltaTime);
previous = transform.position;
}

