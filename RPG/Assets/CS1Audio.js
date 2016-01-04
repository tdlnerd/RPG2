
function Awake () {
DontDestroyOnLoad (gameObject);
}
function Start () {
yield WaitForSeconds (28);
Application.LoadLevel("FirstAreaPlayable");
Destroy(gameObject);
}

