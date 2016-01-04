var L2L : String[];
var Anim : Animator; 
var SFX : AudioClip;
function OnCollisionEnter (hit : Collision) {
Anim = GameObject.Find("Main Camera").GetComponent(Animator);
var choice = Random.Range(0,L2L.Length);
if (hit.gameObject.tag == "OWPlayer") {
Anim.SetBool("Trans", true);
var Cam = GameObject.Find("Main Camera");
Cam.GetComponent.<AudioSource>().Stop();
Cam.GetComponent.<AudioSource>().clip = SFX;
Cam.GetComponent.<AudioSource>().Play();
yield WaitForSeconds (0.9);
Application.LoadLevel(L2L[choice]);
}
}