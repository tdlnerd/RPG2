var MinBound : Vector2;
var target: Transform;
var MaxBound : Vector2;
	// Speed in units per sec.
var speed: float;
var Pos : Vector3;
var Anim : Animator;
var distreq : float;
	function Start () {
	target = GameObject.FindGameObjectWithTag("Player").transform;
	}
	function Update () {
		dist = Vector2.Distance(target.position, transform.position);
		var step = speed * Time.deltaTime;
			if (transform.position.x > MinBound.x && transform.position.x < MaxBound.x && dist < distreq) {
		transform.position = Vector3.MoveTowards(transform.position, target.position, step);
		Anim.SetBool("WalkCycle", true);
		}
			if (dist > distreq) {
			Anim.SetBool("WalkCycle", false);
			}
		if (transform.position.x- target.position.x > 0) {
		transform.rotation.y = 180;
		}
		if (transform.position.x- target.position.x < 0) {
		transform.rotation.y = 0;
		}
	}