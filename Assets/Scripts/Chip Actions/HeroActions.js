#pragma strict

class HeroActions extends Actions {

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

	//print("Wheeeeee!!!");
	Invoke("Move",.1);

}

function Ice() {
	
	//StopMove();
	Invoke("Move",.1);
	

}

function IceExit() {
	
}

function StopMove() {

	GetComponent(BlockMovement).canMove = false;
	
}

function StartMove() {

	GetComponent(BlockMovement).canMove = true;
	
}


//End of Class definition//
}