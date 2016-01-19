var Items : UI.Toggle[];



function Update () {
	for (var i : int = 0; i < 10; ++i )
 {
     if ( Input.GetKeyDown( "" + i ) )
     {
     		if (i > Items.Length) {
     		return;
     		}
         Items[i].isOn = true;
     }
 }
}