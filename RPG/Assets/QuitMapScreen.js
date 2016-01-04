var X : float;
var Y : float;
function Start () {
transform.position.x = PlayerPrefs.GetFloat("MapScreenX");
transform.position.y = PlayerPrefs.GetFloat("MapScreenY");

}
function SaveDataMap () {
X = transform.position.x;
Y = transform.position.y;
PlayerPrefs.SetFloat("MapScreenX", X);
PlayerPrefs.SetFloat("MapScreenY", Y);
}