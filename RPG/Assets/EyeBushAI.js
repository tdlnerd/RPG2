var MinRange : float;
var MaxRange : float;
var On = false;
var Player : GameObject;
function Start () {
Pos();
}

function Update () {
var Distance = transform.position.x - Player.transform.position.x;
Debug.Log(Distance);
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