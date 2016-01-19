var Hour = System.DateTime.Now.Hour;
var On =   System.DateTime.Now.Hour;
var Off = System.DateTime.Now.Hour;

function Start () {
Hour = System.DateTime.Now.Hour;
	if (Hour > Off && Hour < On) {
	gameObject.SetActive(true);
	}
	else {
	gameObject.SetActive(false);
	}
}

function Update () {

}