#pragma strict
 var Slot : GameObject;
 var Items : GameObject[];
 function Save () {
 var Spot = 0;
 	 Items = GameObject.FindGameObjectsWithTag("Icon");
     for (var ArrData : GameObject in Items) {
    PlayerPrefs.SetString(("Item" + Spot.ToString()), ArrData.name);
    Spot +=1;
     }
 }
 
function Start () {
var ReNum = 0;
var allChildren = Slot.GetComponentsInChildren(Transform);
for (var child : Transform in allChildren) {
		if (child.childCount == 0 && child.gameObject.name == "SLOT") {
		var GameObjectName = PlayerPrefs.GetString(("Item" + ReNum.ToString()));
			Debug.Log(PlayerPrefs.GetString(("Item" + ReNum.ToString())));
			if (PlayerPrefs.GetString(("Item" + ReNum.ToString())) == null) {
			return;
			}
		var ItemID = Resources.Load(("items/" + GameObjectName), GameObject) as GameObject;
			if (ItemID == null) {
			return;
			}
		Debug.Log(ItemID);
		var Icon = Instantiate(ItemID, transform.position, Quaternion.identity);
		Icon.transform.SetParent(child, false);
		Icon.GetComponent.<RectTransform>().anchoredPosition.x = 0;
		Icon.GetComponent.<RectTransform>().anchoredPosition.y = 0;
		Icon.name = Icon.name.Replace("(Clone)","").Trim();
		PlayerPrefs.SetString(("Item" + ReNum.ToString()), null);
		ReNum += 1;
}
}
}