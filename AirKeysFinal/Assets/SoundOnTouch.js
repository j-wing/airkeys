#pragma strict

function OnCollisionEnter(collision : Collision){
	// volume sensitivity on keypress
//	var vel = this.rigidbody.velocity;
//	var mag = vel.magnitude;
//	
//	var norm_mag = mag / 2; // needs fine tuning
//	Debug.Log(norm_mag);
	//if(collision.collider.tag != "MainCamera" && collision.collider.tag != "WhiteKey" && collision.collider.tag != "BlackKey"){
	if(collision.collider.tag == "Fingertip"){
		var speed = collision.relativeVelocity.magnitude;
		
		var norm_speed = speed/30;
		
		if (norm_speed >= 1) {
			norm_speed = 1;
		}
		
		audio.PlayOneShot(audio.clip, norm_speed);
//		audio.PlayOneShot(audio.clip, 1);
	}
}