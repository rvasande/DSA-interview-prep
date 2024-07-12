//1) find largest element in array

function largest(arr) {
  let largestEle = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > largestEle) {
      largestEle = arr[i];
    }
  }
  console.log(largestEle);
}
// largest([1,2,3,45,5])

function largeNo(arr) {
  let largeEl = [0];
  arr.map((el) => {
    if (el > largeEl) {
      largeEl = el;
    }
  });
  console.log(largeEl);
}
// largeNo([1,2,33,4,5])

// 2) second largest element in an array
function secondLargest(arr) {
  let largest = arr[0];
  let secondLrg = -1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > secondLrg && arr[i] != largest) {
      secondLrg = arr[i];
    }
  }
  console.log(secondLrg);
}
// secondLargest([1, 2, 3, 8, 6, 4, 9, 7]);
