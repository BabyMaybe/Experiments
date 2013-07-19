#pragma strict

var up : String = ",";
var down : String = "o";
var left : String = "a";
var right : String = "e";
var hit : RaycastHit;

function Start () {

}

function Update () {
	
	GetDirection();
	

}

function Look (dir : Vector3, ray : Ray) {
	
	//var oneAhead : 
	var hit : RaycastHit;
	
	//print("looking...");
	if (Physics.Raycast(transform.position,dir,1)) {
		print("looking at something...");
		
		Physics.Raycast(ray,hit,1);
		print(hit);
		//return hit;
	}
	
	return hit;
}


function GetDirection () {
	
	var fwd = transform.TransformDirection (Vector3.forward);
	var bck = transform.TransformDirection (Vector3.back);
	var lft = transform.TransformDirection (Vector3.left);
	var rgt = transform.TransformDirection (Vector3.right);
		
	var fClear : boolean = true;
	var bClear : boolean = true;
	var lClear : boolean = true;
	var rClear : boolean = true;
	
	var fRay : Ray = new Ray (transform.position,fwd);
	var bRay : Ray = new Ray (transform.position,bck);
	var lRay : Ray = new Ray (transform.position,lft);
	var rRay : Ray = new Ray (transform.position,rgt);
	
	var fHit : RaycastHit;
	var bHit : RaycastHit;
	var lHit : RaycastHit;
	var rHit : RaycastHit;
	
	
// X //check all directions
	fHit = Look(fwd,fRay);
print(fHit);

	bHit = Look(bck,bRay);
	lHit = Look(lft,lRay);
	rHit = Look(rgt,rRay);
// X //if object present check tag
  //obj present
  //	impassable
  //	passable
  //obj not present
  //	passable

	  if (fHit != null && fHit.collider.tag == "Wall") {
// X //if impassable setflag
		print("something ahead");
	  	fClear = false;
	  
	  } else {
	  	print("nothing ahead");
	  	fClear = true;
	  }
	  print("doing anything???");
	  
	  if (bHit != null && bHit.collider.tag == "Wall") {
	  
	  	bClear = false;
	  
	  } else {
	  
	  	bClear = true;
	  }
	  
	  if (lHit != null && lHit.collider.tag == "Wall") {
	  
	  	lClear = false;
	  
	  } else {
	  
	  	lClear = true;
	  }
	  
	  if (rHit != null && rHit.collider.tag == "Wall") {
	  
	  	rClear = false;
	  
	  } else {
	  
	  	rClear = true;
	  }
	 
	  
// X //if movement raise warning
	  
	if (Input.anyKeyDown) {
			
		if (Input.inputString == up) {
			print("going up!");
				if (fClear) {
					transform.Translate(0,0,1);
				} else {
					print("THOU SHALL NOT PASS");
				}
			}
			
		if (Input.inputString == down) {	
				if (bClear) {
					transform.Translate(0,0,-1);
				} else {
					print("You must find another way around");
				}
			}
			
		if (Input.inputString == left) {
				if (lClear) {
					transform.Translate(-1,0,0);
				} else {
					print("I'm sorry dave I cant let you go that way");
				}
			}
			
		if (Input.inputString == right) {
				if (rClear) {
					transform.Translate(1,0,0);	
				} else {
					print("None shall pass");
				}
			}			
	}
	
		
	
	
//	if (Input.anyKeyDown) {
//			
//		if (Input.inputString == up) {
//				transform.Translate(0,0,1);
//				
//				ray = new Ray (transform.position,fwd);
//				if (Look(fwd,ray)) print("Something Ahead");
//			}
//			
//		if (Input.inputString == down) {	
//				transform.Translate(0,0,-1);
//				
//				ray = new Ray (transform.position,bck);
//				if (Look(bck,ray)) print("Something Behind");
//			}
//			
//		if (Input.inputString == left) {
//				transform.Translate(-1,0,0);
//				
//				ray = new Ray (transform.position,lft);
//				if (Look(lft,ray)) print("Something To The Left");
//			}
//			
//		if (Input.inputString == right) {
//				transform.Translate(1,0,0);	
//				
//				ray = new Ray (transform.position,rgt);	
//				if (Look(rgt,ray)) print("Something To The Right");
//			}
//			
//			//Physics.Raycast(ray,hit,1);
//			
//			//var theBlock : GameObject = hit.collider.gameObject;
//		
//			
//	}
}
