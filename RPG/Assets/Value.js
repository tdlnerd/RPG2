var CoinValue : float;

function Start () {
	if (CoinValue < 6 && CoinValue > 1) {
	GetComponent.<SpriteRenderer>().color = Color.white;
}
	if (CoinValue == 1) {
	GetComponent.<SpriteRenderer>().color = Color.red;
}
}