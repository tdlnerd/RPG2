
function Start () {
	if (PlayerPrefs.GetFloat("THScene") == 0) {
gameObject.SetActive(false);
yield WaitForSeconds (40);
gameObject.SetActive(true);
}
}