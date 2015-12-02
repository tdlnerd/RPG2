var Anim : Animator;

function Start () {
}

function Update () {
	transform.Translate(Vector3(0, 0, Time.deltaTime));
	Anim.SetBool("Moving", true);	
}