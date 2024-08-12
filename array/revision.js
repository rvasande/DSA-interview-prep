// 1) largest element in an array
function largestEl(arr) {
  let temp = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > temp) {
      temp = arr[i];
    }
  }
  console.log(temp);
}
// largestEl([1, 2, 33, 22, 43, 11]);

function largestElUsingSorting(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  // console.log(arr[5]);
}
// largestElUsingSorting([2, 3, 55, 21, 23, 4]);

// 2) second largest element in an array
function secondLargest(arr) {
  let temp = arr[0];
  let second = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > temp) {
      temp = arr[i];
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > second && arr[i] != temp) {
      second = arr[i];
    }
  }
  console.log(second);
}
// secondLargest([1, 2, 33, 22, 43, 11]);

// 3) check array is sorted or not
function arrSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) {
    } else {
      return false;
    }
  }
  return true;
}
// console.log(arrSorted([2, 3, 5,  8, 9]));


function common(a,b){
let temp = ''
for(let i=0; i<a.length; i++){
  for (let j = 0; j < b.length; j++) {
if(a[i] === b[j]){
  temp += a[i]
}    
  }
}
console.log(temp);

}
// common('aaabcs','tttsbct')




