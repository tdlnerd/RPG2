var damage : UI.Slider;

function Start () {
damage = GameObject.Find("Slider").GetComponent(UI.Slider);
}
function Restore () {
var Health = damage.value / 0.25;
damage.value += Health;
Destroy(gameObject);
}