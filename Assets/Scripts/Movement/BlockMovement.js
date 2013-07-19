#pragma strict

var up : String = ",";
var down : String = "o";
var left : String = "a";
var right : String = "e";

var canMove : boolean = true;
enum Facing {Up = 0, Down = 180, Left = 270, Right = 90};
var direction : Facing;

function Start () {
}

function Update () {
	
	GetDirection();
	
}


function Look (dir : Vector3) {
		
	var ray : Ray = new Ray (transform.position,transform.TransformDirection (dir));
	var hit : RaycastHit;
	
	if (Physics.Raycast(ray,hit,1)) {
		if (hit.collider.tag == "Impassible") {
			//print("something in the way");
				
			hit.transform.gameObject.SendMessage("Activate",SendMessageOptions.DontRequireReceiver);		
			
		if (Physics.Raycast(ray,hit,1)) {		
		
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

				if (Look(Vector3.forward)) {
					transform.eulerAngles.y = 0;
					transform.Translate(Vector3.forward);
					direction = Facing.Up;
				} 
			}
			
		if (Input.inputString == down) {

				if (Look(Vector3.back)) {
					transform.eulerAngles.y = 180;
					transform.Translate(Vector3.forward);
					direction = Facing.Down;
				} 
			}
			
		if (Input.inputString == left) {

				if (Look(Vector3.left)) {
					transform.eulerAngles.y = -90;
					transform.Translate(Vector3.forward);
					direction = Facing.Left;
				} 
			}
			
		if (Input.inputString == right) {

				if (Look(Vector3.right)) {
					transform.eulerAngles.y = 90;
					transform.Translate(Vector3.forward);
					direction = Facing.Right;
				} 
			}			
		}
}

