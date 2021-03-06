#pragma strict

var up : String = ",";
var down : String = "o";
var left : String = "a";
var right : String = "e";

var currentBlock : String;
var previousBlock : String;

var canMove : boolean = true;
enum Facing {Up = 0, Down = 180, Left = 270, Right = 90};
var direction : Facing;

function Start () {
}

function Update () {

	GetCurrentBlock();
	GetDirection();
	
}


function Look (dir : Vector3) {
		
	var ray : Ray = new Ray (transform.position,transform.TransformDirection (dir));
	var hit : RaycastHit;
	
	if (Physics.Raycast(ray,hit,1)) {
		print("something Ahead!");
	
		if (hit.collider.tag == "Impassible") {
			print("something solid in the way");
				
			hit.transform.gameObject.SendMessage("Activate",SendMessageOptions.DontRequireReceiver);		
			
			if (Physics.Raycast(ray,hit,1)) {
				print ("activating had no effect. object still there");		
		
				return false;
		
			}	
			
		}
				
	}
	//print("all clear");
	return true;

}

function GetDirection () {
	//print("Getting direction");
	  
	if (canMove && Input.anyKeyDown) {
				
		if (Input.inputString == up) {
		
			transform.eulerAngles.y = 0;
			direction = Facing.Up;
				
			if (Look(Vector3.forward)) {
					
				transform.Translate(Vector3.forward);
					
			} 
		}
			
		if (Input.inputString == down) {
		
			transform.eulerAngles.y = 180;
			direction = Facing.Down;

			if (Look(Vector3.forward)) {
					
				transform.Translate(Vector3.forward);
					
			} 
		}
			
		if (Input.inputString == left) {
		
			transform.eulerAngles.y = -90;
			direction = Facing.Left;

			if (Look(Vector3.forward)) {
				
				transform.Translate(Vector3.forward);
					
			} 
		}
			
		if (Input.inputString == right) {
		
			transform.eulerAngles.y = 90;
			direction = Facing.Right;

				if (Look(Vector3.forward)) {
					
					transform.Translate(Vector3.forward);
					
				} 
			}			
		}
}

function OnTriggerExit() {

	//currentBlock = "Floor";
	
	
	//print(currentBlock);
	//print(canMove);
	
}

function GetCurrentBlock() {

	var ray : Ray = new Ray (transform.position,transform.TransformDirection (Vector3.down));
	var hit : RaycastHit;
	
	if (Physics.Raycast(ray,hit,1)) {
	
		currentBlock = hit.collider.name;
		print(currentBlock);
	
	}
	
	GetRestrictions();
	
}

function OnTriggerEnter(other : Collider) {
	
	
	
	currentBlock = other.name;
	//print(currentBlock);
		//GetRestrictions();
	//print(canMove);
}



function GetRestrictions() {

	

	if (currentBlock == "Ice" || "Ice Corner") {
	
		canMove = false;
		
	}
	
	if (currentBlock == "Conveyer") {
		
		canMove = false;
	
	}
	
	if (currentBlock == "Floor") {
		
		canMove = true;
		
	}
	
}
