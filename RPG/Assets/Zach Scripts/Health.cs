using UnityEngine;
using System.Collections;

public class Health : MonoBehaviour {
	public float max_Health = 100f;
	public float cur_Health = 0f;
	public float MeleeResistence = 0.5f;
	public float FireResistence = 0.5f;
	public TextMesh  HealthBar;
	public SpriteRenderer SR;
	public GameObject coin;
	// Use this for initialization
	void Start () {
		cur_Health = max_Health;
		
	}
	

	


	public void OnTriggerEnter2D  (Collider2D hit) {
		if (hit.gameObject.tag == "Sword") {
			cur_Health -= max_Health * MeleeResistence;
		}
	}

	public void Update () {
			if (cur_Health < 1) {
			 GameObject prefab = (GameObject) Instantiate(coin, transform.position, transform.rotation);
			Destroy(gameObject);
		}
	}

}

