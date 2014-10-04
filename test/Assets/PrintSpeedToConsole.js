#pragma strict

function OnCollisionEnter(){
	
	var vel = this.rigidbody.velocity;
	Debug.Log(vel);
}