var Knight : GameObject;
var PlayerSprite : GameObject;
var Lighting : Color32;

function Start () {
PlayerSprite = GameObject.Find("Knight Walking_0");
Knight = GameObject.Find("Knight");
PlayerSprite.GetComponent(Renderer).material.color = Lighting;

}
