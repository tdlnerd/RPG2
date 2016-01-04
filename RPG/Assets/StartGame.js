var L2L : String;
function Load () {
	if (PlayerPrefs.GetInt("CS1") == 1) {
	Application.LoadLevel(L2L);
	}
	if (PlayerPrefs.GetInt("CS1") == 0) {
	Application.LoadLevel("FirstArea");
}
}