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

//3) check if array is sorted or not
function sorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) {
    } else {
      return false;
    }
  }
  return true;
}
// console.log(sorted([1, 2, 3, 4, 5, 6]));

// 4) remove duplicate element from an array

function rmDulicate(arr) {
  let result = new Set(arr);
  console.log(result);
}
// rmDulicate([1,2,3,3,4,4,5,5])

function minElement(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(min);
}
// minElement([9, 6, 5, 3, 2, 4, 8, 1]);

// left rotate array by one place
function leftRotate(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  console.log(arr);
}
// leftRotate([1,2,3,4,5,6,7,8,9])

// left rotation of array by k position
function rotationOfArray(arr, k) {
  let n = arr.length;
  k = k % n;
  let temp = arr.slice(0, k);

  for (let i = k; i < n; i++) {
    arr[i - k] = arr[i];
  }

  for (let i = n - k; i < n; i++) {
    arr[i] = temp[i - (n - k)];
  }
  console.log(arr);
}
// rotationOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);

// another approach to left rotate array ky k place
function anotherApproach(arr, k) {
  let n = arr.length;
  k = k % n;
  for (let i = 0; i < k; i++) {
    let temp = arr[0];
    for (let i = 1; i < n; i++) {
      arr[i - 1] = arr[i];
    }
    arr[n - 1] = temp;
  }
  console.log(arr);
}
// anotherApproach([1, 2, 3, 4, 5, 6, 7, 8], 3);

// OPTIMAL solution of left rotation of array bu k place
function optimalRotation(arr, k) {
  let n = arr.length;
  k = k % n;
  let a1 = arr.slice(0, k).reverse();
  let a2 = arr.slice(k, n).reverse();
  arr = a1.concat(a2).reverse();
  console.log(arr);
}
// optimalRotation([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);

// right rotate array by 1 place
function rightRotate(arr) {
  let n = arr.length;
  let temp = arr[n - 1];
  for (let i = n - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;
  console.log(arr);
}
// rightRotate([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// right rotation by k place
function rightRotationByKPlace(arr, k) {
  let n = arr.length;
  k = k % n;
  let temp = arr.slice(-k);
  for (let i = n - 1; i > 0; i--) {
    arr[i] = arr[i - k];
  }
  for (let i = 0; i < k; i++) {
    arr[i] = temp[i];
  }
  console.log(arr);
}
// rightRotationByKPlace([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);

// another approach of right rotation of array by k place
function anotherRightRotation(arr, k) {
  let n = arr.length;
  k = k % n;
  for (let i = 0; i < k; i++) {
    let temp = arr[n - 1];
    for (let i = n - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = temp;
  }
  console.log(arr);
}
// anotherRightRotation([1,2,3,4,5,6,7,8],2)

// moving zeros to end of the array
function movingZeros(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index] = arr[i];
      index++;
    }
  }
  for (let i = index; i < arr.length; i++) {
    arr[i] = 0;
  }
  console.log(arr);
}
// movingZeros([1,2,0,5,0,4,0,8,0,7,0,11])

// OPTIMAL solution for moving zeros
function optimalSolutionOfMoving0(arr) {
  let j = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }

  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
  console.log(arr);
}
// optimalSolutionOfMoving0([1, 2, 0, 5, 0, 4, 0, 8, 0, 7, 0, 11]);

// linear search
function linearSerach(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// console.log(linearSerach([1,4,2,3,5,6,5,4,55],525));

//union of 2 sorted array
function union(arr1, arr2) {
  let temp = [];
  let unique = new Set(arr1, arr2);
  for (let item of unique) {
    temp.push(item);
  }
  console.log(temp);
}
// union([1, 2, 2, 3, 4, 5, 6], [2, 3, 4, 5]);

// intersetion of two sorted array
function intersection(a1, a2) {
  // let temp = a1.concat(a2)
  let empty = [];
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a1[i + 1]) {
      for (let j = 0; j < a2.length; j++) {
        if (a1[i] === a2[j]) {
          empty.push(a1[i]);
        }
      }
    }
  }
  console.log(empty);
}
// intersection([1, 2, 2, 3, 4, 5, 6], [2, 2, 3, 4, 5]);

//find missing number
{
  // DOUBT
}

//find maximum consecutive ones
function maximum(arr) {
  let counter = 0;
  let maxi = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      counter++;
      maxi = Math.max(maxi, counter);
    } else {
      counter = 0;
    }
  }
  console.log(maxi);
}
// maximum([1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0]);

// find number which appear once and other appears twice
function once(arr) {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[cnt]) {
      // console.log(arr[i]);
      cnt++;
      if (cnt === 1) {
        return arr[i];
      }
    }
  }
}
// console.log(once([1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6]));


