using UnityEngine;
using System.Collections;

public class Rat_AI : MonoBehaviour
{
	public Transform target;
	public int moveSpeed;
	public int rotationSpeed;
	
	void Start()
	{
		target = GameObject.Find("Knight").transform;
		
	}
	
	void Update()
	{
		if (target != null) 
		{
			Vector2 dir = target.position - transform.position;
			

			if (dir != Vector2.zero)
			
			transform.position += (target.position - transform.position).normalized
				* moveSpeed * Time.deltaTime;
		}
		GetComponent<Rigidbody2D>().velocity = Vector2.zero;
		if (transform.position.x- target.position.x > 0) {
			transform.Rotate(0,180,0);
		}
		if (transform.position.x- target.position.x < 0) {
			transform.Rotate(0,0,0);
		}
	}

}