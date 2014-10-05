#pragma strict
var lastLoopStartTime = -1.0;
var volumes = new Array();

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
	
	var norm_speed = speed/15;
	
	if (norm_speed >= 1) {
		norm_speed = 1;
	}
	
	if (norm_speed >= 0.05) {
		audio.PlayOneShot(audio.clip, norm_speed);
	}
	
//	audio.Play();
//	audio.volume = norm_speed;
	
	}
	
	
//	volumes.Push(norm_speed);

}

//function OnCollisionExit(){
//	// while pressed, sustain note
//	//FadeAudio(0);
//	var t = Time.time;
//	lastLoopStartTime = t;
////	audio.volume = volumes.Shift();
//	FadeOut(t);
//	//audio.Stop();
//}
//
//// for fadein:  fadeType = 1
//// for fadeout: fadeType = 0
//function FadeOut(startTime) {
//	Debug.Log("start: " + audio.volume);
//	var decrement = audio.volume / 25;
//	for (var i=0; i < 25; i++) {
//		if (lastLoopStartTime != startTime) {
//			Debug.Log("llst: " + lastLoopStartTime + "; st: " + startTime); 
//			break;
//		}
//		audio.volume -= decrement;
//		Debug.Log("i is: " + i + ", vol is: " + audio.volume);
//		yield new WaitForSeconds(0.01);
//	}
//	Debug.Log("end: " + audio.volume);
//}	
