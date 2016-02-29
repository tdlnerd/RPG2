var MinBound : Vector2;
var target: Transform;
var MaxBound : Vector2;
	// Speed in units per sec.
var speed: float;
var Pos : Vector3;
var distreq : float;
var PosReset : Transform;
	function Start () {
	target = GameObject.FindGameObjectWithTag("Player").transform;
	PosReset = gameObject.transform;
	}
	function Update () {
		if (target == null) {
		target = GameObject.FindGameObjectWithTag("Player").transform;
		}
		
		dist = Vector2.Distance(target.position, transform.position);
		distTar = Vector2.Distance(PosReset.position, transform.position);
		var step = speed * Time.deltaTime;
		if (dist > 2.5) {
		transform.position = Vector3.MoveTowards(transform.position, target.position, step);
		}

		if (transform.position.x- target.position.x > 0) {
		transform.rotation.y = 180;
		}
		if (transform.position.x- target.position.x < 0) {
		transform.rotation.y = 0;
		}
	}