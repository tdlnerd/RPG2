
var target: Transform;
	// Speed in units per sec.
var speed: float;
var Pos : Vector3;
var distreq : float;
	function Start () {
	speed = Random.Range(0.75,2);
	}
	function Update () {
		if (target == null) {
	target = GameObject.FindGameObjectWithTag("Player").transform;
	}
		dist = Vector2.Distance(target.position, transform.position);
		var step = speed * Time.deltaTime;
			if (dist < distreq) {
		transform.position = Vector3.MoveTowards(transform.position, target.position, step);
		}

		if (transform.position.x- target.position.x > 0) {
		transform.rotation.y = 180;
		}
		if (transform.position.x- target.position.x < 0) {
		transform.rotation.y = 0;
		}
	}