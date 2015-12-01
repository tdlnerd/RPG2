var previous: Vector3;
var velocity: float;
var Anim : Animator;
var Jump : AudioClip;
function Update () {
velocity = ((transform.position.x - previous.x)) / Time.deltaTime;
Adjust();
Anim.SetFloat("Speed", Mathf.Abs(velocity));
	if (Input.GetKeyDown("space")) {
	Anim.SetBool("Grounded", false);
		if (GetComponent.<AudioSource>().isPlaying == false) {
	GetComponent.<AudioSource>().PlayOneShot(Jump);
		}
	}
}

function Adjust () {
yield WaitForSeconds (Time.deltaTime);
previous = transform.position;
}

