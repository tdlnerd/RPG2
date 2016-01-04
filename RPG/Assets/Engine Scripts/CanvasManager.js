function Awake () {
DontDestroyOnLoad (gameObject);
	if (FindObjectsOfType(GetType()).Length > 1)
         {
             Destroy(gameObject);
         }
         }
function Update () {
if (Application.loadedLevelName == "Title Screen") {
	Destroy(gameObject);
}
}