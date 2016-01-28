﻿var MinRange : Vector2;
var MaxRange : Vector2;
var Redo = true;
var Speed : float;
var choicex : float;
var choicey : float;
var InWater = false;
function Update () {
	
	if (Redo == true) {
	AdjustDir();
	}
		if (InWater == true) {
	transform.position = Vector2.MoveTowards(transform.position, Vector2(choicex,choicey),   Speed* Time.deltaTime);
	}
}

function AdjustDir () {
Redo = false;
choicex = Random.Range(MinRange.x,MaxRange.x);
choicey = Random.Range(MinRange.y,MaxRange.y);
yield WaitForSeconds(Random.Range(2,4));
Redo = true;
}

function OnTriggerEnter2D(hit : Collider2D) {
	if (hit.gameObject.tag == "Water") {
	InWater = true;
	}
	}
function OnTriggerExit2D (hit : Collider2D) {
	if (hit.gameObject.tag == "Water") {
	InWater = false;
	}
	}