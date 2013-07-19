#pragma strict

function OnTriggerEnter(other : Collider) {

	other.GetComponent(Actions).Ice();

}

function OnTriggerExit(other : Collider) {
	
	other.GetComponent(Actions).IceExit();

}