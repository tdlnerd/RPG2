var MinRange : float;
var MaxRange : float;
var On = false;
var Player : GameObject;
var FB : GameObject;
var Distance : float;
var Reload = false;
function Start () {
Pos();
}

function Update () {
Distance = transform.position.x - Player.transform.position.x;
	if (Mathf.Abs(Distance) < 5 && Reload == false) {
	Fire();
	}
	if (On == false) {
	Pos();
	}
}

function Pos () {
On = true;
transform.position.x = Random.Range(MinRange,MaxRange);
yield WaitForSeconds (Random.Range(3,10));
On = false;
}

function Fire () {
	Reload = true;
	var Ball = Instantiate(FB, transform.position, transform.rotation);
	yield WaitForSeconds (Random.Range(3,6));
	Reload = false;
	}
	