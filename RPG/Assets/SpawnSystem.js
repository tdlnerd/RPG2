 var prefab : GameObject;
 var dec : GameObject[];
 var trees : GameObject[];
 var gos : GameObject[];
 var Min = 1;
 var max = 5;
 var xmin = 0;
 var xmax = 0;
 var zmin = 0;
 var zmax = 0;
 function Awake()
 {
     gos = new GameObject[Random.Range(Min,max)];
     for(var i : int = 0; i < gos.Length; i++)
     {
         var clone = Instantiate(prefab, Vector3.zero, Quaternion.identity);
         clone.transform.position.x = Random.Range(xmin,xmax);
         gos[i] = clone;
     }
     trees = new GameObject[Random.Range(Min,max)];
     for(var t : int = 0; t < gos.Length; t++)
     {
     	var choice = Random.Range(0,dec.Length);
         var clonet = Instantiate(dec[choice], Vector3.zero, Quaternion.identity);
         clonet.transform.position.x = Random.Range(xmin,xmax);
         clonet.transform.position.z = Random.Range(zmin,zmax);
         clonet.transform.position.y = 4;
         clonet.GetComponent.<Renderer>().sortingOrder = (Mathf.RoundToInt(transform.position.z * -1));
         gos[t] = clone;
     }
 }