var damage : UI.Slider;

function Start () {
damage = GameObject.Find("Slider").GetComponent(UI.Slider);
}
function Restore () {
var Health = (50 / damage.value) * 10;
damage.value += Health;
Destroy(gameObject);
}