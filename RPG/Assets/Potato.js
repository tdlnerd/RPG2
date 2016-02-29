var Knight : Damage2D;
var Colors : Color32[];
var KS : SpriteRenderer;
var Done = false;
var NRM : Color32;
function Start () {
}
function Select () {
if (Done == false) {
ItemPotato();
}
}

function ItemPotato () {
InvokeRepeating("ColorObj", 0.05, 0.05);
Done = true;
Knight = GameObject.Find("Knight").GetComponent(Damage2D);
Knight.Mortal = false;
yield WaitForSeconds (Random.Range(10,20));
Knight.Mortal = true;
CancelInvoke("ColorObj");
KS.color = NRM;
Destroy(gameObject);
}

function ColorObj () {
var Choice = Random.Range(0,Colors.Length);
KS.color = Colors[Choice];
}
function Update () {
if (KS == null) {
KS = GameObject.Find("Knight Walking_0").GetComponent(SpriteRenderer);
NRM = KS.color;
}
}