
function Start () {
	if (PlayerPrefs.GetFloat("THScene") == 0) {
GetComponent.<Collider>().enabled = false;
yield WaitForSeconds (50);
GetComponent.<Collider>().enabled = true;
}
}