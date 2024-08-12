// linear search
function linearSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) {
      return i;
    }
  }
  return -1;
}
let result = linearSearch([2, 3, 4, 5, 6, 7, 8, 22], 5);
// console.log(result)

//binary search
// perform only an sorted array

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middle = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middle]) {
      return middle;
    }

    if (target <= arr[middle]) {
      rightIndex = middle - 1;
    } else {
      leftIndex = middle + 1;
    }
  }
  return -1;
}

let out = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1);
console.log(out);
