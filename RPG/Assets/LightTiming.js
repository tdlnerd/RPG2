var StartH = System.DateTime.Now.Hour;
var EndH = System.DateTime.Now.Hour;
var Hour = System.DateTime.Now.Hour;

function Start () {
Hour = System.DateTime.Now.Hour;
	if (Hour > StartH) {
	gameObject.SetActive(true);
	}
	else {
	gameObject.SetActive(false);
	}
}