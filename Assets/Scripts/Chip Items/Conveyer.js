#pragma strict

function OnTriggerEnter(other : Collider) {
	print("hero on conveyer");
	other.transform.eulerAngles.y = transform.eulerAngles.y;
	//var toRotate int = transform.eulerAngles.y;
	other.GetComponent(BlockMovement).direction = parseInt(transform.eulerAngles.y);
	print("blocks rotation: " + transform.eulerAngles.y);
	print("heros rotation: " + other.transform.eulerAngles.y);
	other.GetComponent(Actions).Conveyer();

}