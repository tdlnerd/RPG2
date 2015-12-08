var Anim : Animator;
var Player : GameObject;
var Dis : float;
var AttackCol : Collider;
var MoveSFX : AudioClip;
var AttackSFX : AudioClip;
var BiteSFX : AudioClip;
var Ack = false;
var Moving = false;
var ACol : Collider2D;
function Start () {
Player = GameObject.Find("Knight");
}

function Update () {
	Dis = Mathf.Abs((transform.position.x - Player.transform.position.x) + (transform.position.y - Player.transform.position.y));
	if (Dis < 7.5) {
	var Choice = Random.Range(0,2);
	Debug.Log("SNAKE IS GOING TO " + Choice);
	if (Choice == 0 && Moving == false && transform.position.z < 1 && Ack == false) {
	Attack();
	}
	if (Choice == 1 && Ack == false) {
	Move();
	}
	}
	if (Dis > 7.5 && transform.position.z!=0) {
	MoveBack();
	}
	if (transform.position.z < 0.8) {
	GetComponent.<Collider2D>().enabled = true;
	}
	if (transform.position.z > 0.8) {
	GetComponent.<Collider2D>().enabled = false;
	}

}

function Move () {
Moving = true;
if (transform.position.z > 5) {
	Anim.SetBool("Moving", false);
	Anim.SetBool("Return", false);
	GetComponent.<AudioSource>().Stop();
	Moving = false;
	return;
	}
	
	Anim.SetBool("Moving", true);
	Anim.SetBool("Return", false);	
	yield WaitForSeconds (0.1);
	transform.Translate(Vector3(0, 0, Time.deltaTime));
	if (GetComponent.<AudioSource>().isPlaying == true) {
	return;
	}
	GetComponent.<AudioSource>().Stop();
	GetComponent.<AudioSource>().volume = 0.15;
	GetComponent.<AudioSource>().clip = MoveSFX;
	GetComponent.<AudioSource>().Play();
}

function MoveBack () {
Moving = true;
if (transform.position.z < 1) {
	Anim.SetBool("Moving", false);
	Anim.SetBool("Return", false);
	GetComponent.<AudioSource>().Stop();
	Moving = false;
	return;
	}
	
	Anim.SetBool("Return", true);
	Anim.SetBool("Moving", false);	
	yield WaitForSeconds (0.1);
	transform.Translate(Vector3(0, 0, (Time.deltaTime * -3)));
	if (GetComponent.<AudioSource>().isPlaying == true) {
	return;
	}
	GetComponent.<AudioSource>().Stop();
	GetComponent.<AudioSource>().volume = 0.15;
	GetComponent.<AudioSource>().clip = MoveSFX;
	GetComponent.<AudioSource>().Play();
	
}

function Attack () {
Ack = true;
GetComponent.<AudioSource>().Stop();
	GetComponent.<AudioSource>().volume = 1;
	GetComponent.<AudioSource>().clip = AttackSFX;
	GetComponent.<AudioSource>().Play();
yield WaitForSeconds (Random.Range(0.5,2));
Bite();
Anim.SetBool("Attack", true);
yield WaitForSeconds (0.5);
GetComponent.<AudioSource>().Stop();
Anim.SetBool("Attack", false);
ACol.enabled = false;
Ack = false;
}

function Bite () {
yield WaitForSeconds (0.4);
GetComponent.<AudioSource>().Stop();
GetComponent.<AudioSource>().clip = BiteSFX;
GetComponent.<AudioSource>().Play();
ACol.enabled = true;
}