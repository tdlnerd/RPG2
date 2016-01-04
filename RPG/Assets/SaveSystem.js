var Mon : int;
var BC : int;
var KC : int;
var IU : ItemUse;
var CS : CoinCollection;
var BombCounter : UI.Text;
var KeyCounter : UI.Text;
var CoinCounter : UI.Text;

function Quit () {
PlayerPrefs.SetInt("Bomb", BC);
PlayerPrefs.SetInt("Key", KC);
PlayerPrefs.SetInt("Cash", Mon);
}

function Update () {
Mon = CS.Cash;
BC = IU.BombCount;
KC = IU.KeyCount;
BombCounter.text = "x " + BC.ToString();
KeyCounter.text = "x " + KC.ToString();
CoinCounter.text = "$" + Mon.ToString();
}