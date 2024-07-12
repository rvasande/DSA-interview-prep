// 1) largest element in an array
function largestEl(arr) {
  let largestNo = arr[0];
  arr.map((el) => {
    if (el > largestNo) {
      largestNo = el;
    }
  });
  console.log(largestNo);
}
// largestEl([3,21,4,5,6])

// 2) second largest element in an array 
function secondLargest(arr) {
  let largest = arr[0];
  let second = -1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > second && arr[i] != largest) {
      second = arr[i];
    }
  }
  console.log(second);
}

// secondLargest([1, 2, 45, 53, 1, 9]);

// 3) check array is sorted or not 
function sorted(arr){
    for(let i=0; i<arr.length -1; i++){
        if(arr[i] <= arr[i+1]){

        }else{
            return false
        }
    }
    return true
}
// console.log(sorted([11,2,3,4,5,6,7]));