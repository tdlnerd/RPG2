var randomspot:Vector2;
 var speed:float;
 var timer:float;
 
 function Start () {
 
speed = Random.Range(0.75,2);

}
 function Update () {

 transform.Translate(Vector2.up * speed * Time.deltaTime);
 
 
 }