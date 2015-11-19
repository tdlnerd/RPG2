
var rb: Rigidbody2D;
 var playerSpeed : float = 10; //speed player moves
 var turnSpeed : float = 100; // speed player turns
 var thrust: float;
 var jump = true;
 function Update () 
 {
 
     MoveForward(); // Player Movement
 }
 
 function MoveForward()
 {
 	if(Input.GetKeyDown("up") && jump == true)//Press up arrow key to move forward on the Y AXIS
     {
      Jump();
     }
     if(Input.GetKey("left"))//Press up arrow key to move forward on the Y AXIS
     {
         transform.Translate(Vector2.right * Time.deltaTime * playerSpeed);
         transform.rotation = Quaternion.Euler(180,0,180);
     }
     if(Input.GetKey("right"))//Press up arrow key to move forward on the Y AXIS
     {
         transform.Translate(Vector2.right * Time.deltaTime * playerSpeed);
 
     }
 
 }
 
 function Jump() {
 jump = false;
 rb.AddForce(transform.up * thrust);
         transform.rotation = Quaternion.Euler(180,0,180);
}
 
 
 