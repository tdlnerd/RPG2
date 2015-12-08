using UnityEngine;
using System.Collections;

public class Health : MonoBehaviour {
	public float max_Health;
	public float cur_Health;
	public float MeleeResistence = 0.5f;
	public float FireResistence = 0.5f;
	public TextMesh  HealthBar;
	public SpriteRenderer SR;
	public GameObject coin;
	public Color Col;
	// Use this for initialization
	void Start () {
		cur_Health = max_Health;
		Col = GetComponent<SpriteRenderer> ().color;
		
	}
	

	


	public void OnTriggerEnter2D  (Collider2D hit) {
		if (hit.gameObject.tag == "Sword") {
			cur_Health -= max_Health * MeleeResistence;
			Damage();
		}
			if (hit.gameObject.tag == "Ex") {
				cur_Health -= max_Health * FireResistence;
			Damage();
			}
		}

	public void Update () {
			if (cur_Health < 1) {
			 GameObject prefab = (GameObject) Instantiate(coin, transform.position, transform.rotation);
			Destroy(gameObject);
		}
	}
	public IEnumerator Damage() {
		GetComponent<SpriteRenderer>().color = Color.red;
		yield return new WaitForSeconds (0.5f);
		GetComponent<SpriteRenderer>().color = Col;
	}

}



