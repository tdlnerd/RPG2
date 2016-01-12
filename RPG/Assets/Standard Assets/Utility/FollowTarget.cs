using System;
using UnityEngine;


namespace UnityStandardAssets.Utility
{
    public class FollowTarget : MonoBehaviour
    {
        public Transform target;
        public Vector3 offset = new Vector3(0f, 7.5f, 0f);
		public bool Knight;



        private void LateUpdate()
        {
			if (target == null && Knight == true) {
					target = GameObject.Find("Knight").transform;
			}
            transform.position = target.position + offset;
        }
    }
}
