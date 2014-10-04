#pragma strict

function OnCollisionEnter(){
	// volume sensitivity on keypress
	var vel = this.rigidbody.velocity;
	var mag = vel.magnitude;
	var norm_mag = mag / 5; // needs fine tuning
	Debug.Log(norm_mag);
	audio.PlayOneShot(audio.clip, norm_mag);
	// while pressed, sustain note
}

function OnCollisionExit(){
	// while pressed, sustain note
	audio.Stop();
}
