'use strict';
//Ejercicio 2
function mostrarCombinaciones(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        alert(nums[i] + "" + nums[j]);
      }
    }
  }


let nums = [0, 2, 4, 8];
mostrarCombinaciones(nums);
//Ejercicio 3

function mostrarCombinacionesSinRepetir(nums2) {
  for (let i = 0; i < nums2.length; i++) {
    for (let j = i + 1; j < nums2.length; j++) {
      alert(nums2[i] + "" + nums2[j]);
    }
  }
}

let nums2 = [0, 2, 4, 8];
mostrarCombinacionesSinRepetir(nums2);