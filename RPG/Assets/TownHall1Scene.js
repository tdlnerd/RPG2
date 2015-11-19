var THScene : float;
var Anim : Animator;
function Start () {
THScene = PlayerPrefs.GetFloat("THScene");
Debug.Log(THScene);
if (THScene == 0) {
	Run();
	}
}


function Run () {
Anim.SetBool("Execute", true);
yield WaitForSeconds(50);
PlayerPrefs.SetFloat("THScene", 1);
}


function Update () {
	if (Input.GetKeyDown("q")) {
	PlayerPrefs.DeleteAll();
	}
}