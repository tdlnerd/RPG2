var Anim : Animator;
var Text : String[];
var MessageBox : UI.Text;
var NPC : String;
var Prop : Color;
var PropObj : GameObject;
var PP : float;
function Start () {
PP = PlayerPrefs.GetFloat("THScene");
Debug.Log(PP);
if (PP == 0) {
	RunText();
	}
}

function RunText () {
MessageBox = GameObject.Find("MainTextBox").GetComponent(UI.Text);
yield WaitForSeconds(10);
MessageBox.text = NPC + ": " + Text[0];
Anim.SetBool("Speak", true);
yield WaitForSeconds(2);
Anim.SetBool("Speak", false);
MessageBox.text = " ";
yield WaitForSeconds(0.5);
Anim.SetBool("Speak", true);
MessageBox.text = NPC + ": " + Text[1];
yield WaitForSeconds(3);
MessageBox.text = NPC + ": " + Text[2];
yield WaitForSeconds(4);
MessageBox.text = NPC + ": " + Text[3];
yield WaitForSeconds(4);
MessageBox.text = NPC + ": " + Text[4];
yield WaitForSeconds(4);
MessageBox.text = NPC + ": " + Text[5];
yield WaitForSeconds(4);
MessageBox.text = NPC + ": " + Text[6];
yield WaitForSeconds(4);
Anim.SetBool("Read", true);
MessageBox.text = NPC + ": " + Text[7];
yield WaitForSeconds(3);
MessageBox.color = Color.red;
MessageBox.text = "Prophecy" + ": " + Text[8];
yield WaitForSeconds(3);
MessageBox.text = "Prophecy" + ": " + Text[9];
yield WaitForSeconds(3);
MessageBox.color = Color.black;
MessageBox.text = NPC + ": " + Text[10];
var PropCloth = Instantiate(PropObj, transform.position, transform.rotation);
PropCloth.transform.position = Vector3(-1.4, 3.25, 5);
PropCloth.GetComponent.<Rigidbody>().AddForce(-40,200,0);
Anim.SetBool("Read", false);
Anim.SetBool("Throw", true);
yield WaitForSeconds (1);
Anim.SetBool("Throw", false);
yield WaitForSeconds(2);
MessageBox.text = NPC + ": " + Text[11];
yield WaitForSeconds(3);
MessageBox.text = " ";
}