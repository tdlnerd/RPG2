var Player : GameObject;
function Awake () {
DontDestroyOnLoad (Player);
         }
         

function Update () {
	if (Application.loadedLevelName == "Test") {
	Player.SetActive(false);
	}
	else {
	Player.SetActive(true);
	}
}