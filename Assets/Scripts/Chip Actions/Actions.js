#pragma strict

function Kill() {
	
	Destroy(gameObject);
	
}

function Fire() {

	Kill();

}

function Water() {

	Kill();

}

function Conveyer() {

	print("Wheeeeee!!!");

}

function Ice() {

	//transform.Translate(Vector3.forward);

}

function Move() {

	transform.Translate(Vector3.forward);

}