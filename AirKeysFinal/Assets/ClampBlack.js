#pragma strict

function Update () {
	if (transform.position.y > 0.6) {
		transform.position.y = 0.6;
	}
}