function OnTriggerStay2D (hit: Collider2D) {
	if (hit.gameObject.tag == "Player") {
	GameObject.Find("Knight Walking_0").GetComponent.<Animator>().SetBool("Water", true);
	GameObject.Find("Camera").GetComponent.<UnityStandardAssets.ImageEffects.Fisheye>().enabled = true;
	}
}

function OnTriggerExit2D (hit: Collider2D) {
	if (hit.gameObject.tag == "Player") {
	GameObject.Find("Knight Walking_0").GetComponent.<Animator>().SetBool("Water", false);
	GameObject.Find("Camera").GetComponent.<UnityStandardAssets.ImageEffects.Fisheye>().enabled = false;
	}
}