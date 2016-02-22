var Knight : Damage2D;
function Start () {
Knight = GameObject.Find("Knight").GetComponent(Damage2D);
Knight.enabled = false;
yield WaitForSeconds (Random.Range(10,20));
Knight.enabled = true;
}

function Update () {

}