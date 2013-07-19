#pragma strict
var kill : KillScript;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider) {

	other.GetComponent(Actions).Fire();
	
}