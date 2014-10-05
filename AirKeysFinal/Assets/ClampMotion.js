#pragma strict

function Update () {
	if (transform.position.y > .1) {
		transform.position.y = .1;
	}
	
	if (transform.position.y < -0.3) {
		transform.position.y = -0.3;
	}
}