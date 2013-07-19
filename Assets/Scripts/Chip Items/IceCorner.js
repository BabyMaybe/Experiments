#pragma strict

var PrimaryEntryDirection : Facing = Facing.Up;
var PrimaryExitDirection : Facing = Facing.Right;
var SecondaryEntryDirection: Facing = Facing.Left;
var SecondaryExitDirection : Facing = Facing .Down;

function OnTriggerEnter (other : Collider) {

	var dir : Facing = other.GetComponent(BlockMovement).direction;
//	print(dir);
//	print("primary " + PrimaryEntryDirection);
//	print("secondary " + SecondaryEntryDirection);

	if (dir == PrimaryEntryDirection) {
		print("Entered Primary");
	
		other.transform.eulerAngles.y = parseInt(PrimaryExitDirection); 
		other.GetComponent(BlockMovement).direction = PrimaryExitDirection;
		other.GetComponent(Actions).Ice();
		
	}  else if (dir == SecondaryEntryDirection) {
		
		print("Entered Secondary");
		other.transform.eulerAngles.y = parseInt(SecondaryExitDirection);
		other.GetComponent(BlockMovement).direction = SecondaryExitDirection;
		other.GetComponent(Actions).Ice();
		
		} else {
			print("Entered illegal");
			other.transform.Rotate(0,180,0);
			other.GetComponent(Actions).Ice();
			
		}
	
}
