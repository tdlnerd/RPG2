var previous: Vector3;
var velocity: float;
var Anim : Animator;
var Walk = false;
function Update () {
Anim.SetBool("WalkCycle", Walk);
velocity = Mathf.Abs((transform.position.x - previous.x) / Time.deltaTime);
Adjust();
}

function Adjust () {
yield WaitForSeconds (Time.deltaTime);
previous = transform.position;
}

