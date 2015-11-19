var playerSpeed : float = 10; //speed player moves
 var turnSpeed : float = 100; // speed player turns
 var previous: Vector3;
var velocity: float;
var Anim : Animator;
 function Update () 
 {
 velocity = ((transform.position.x - previous.x)) / Time.deltaTime;
 Anim.SetFloat("Speed", Mathf.Abs(velocity));
AdjustTop();
 
     MoveForward(); // Player Movement
     TurnRightAndLeft();//Player Turning
 }
 
 function MoveForward()
 {
 
     if(Input.GetKey("up"))//Press up arrow key to move forward on the Y AXIS
     {
         transform.Translate(0,playerSpeed * Time.deltaTime,0);
     }
 
 }
 
 function TurnRightAndLeft()
 {
 
     if(Input.GetKey("right")) //Right arrow key to turn right
     {
         transform.Rotate(-Vector3.forward *turnSpeed* Time.deltaTime);
     }
 
     if(Input.GetKey("left"))//Left arrow key to turn left
     {
         transform.Rotate(Vector3.forward *turnSpeed* Time.deltaTime);
     }
 
 }
 
 function AdjustTop () {
yield WaitForSeconds (Time.deltaTime);
previous = transform.position;
}