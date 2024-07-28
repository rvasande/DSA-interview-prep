//bubble sort in acending order
function bubbleSortAc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}
// bubbleSortAc([3, 1, 5, 9, 8, 5, 4]);

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallest] > arr[j]) {
        smallest = j;
      }
    }
    let temp = arr[smallest];
    arr[smallest] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
}
// selectionSort([6, 7, 8, 4, 3, 2, 1]);

// insertion sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  console.log(arr);
}
// insertionSort([8, 7, 4, 5, 6, 1, 2, 3]);

//Quik sort
{
  let arr = [3, 1, 5, 9, 8, 5, 4];
  let lb = 0;
  let ub = arr.length - 1;

  function partition(arr, lb, ub) {
    let pivot = arr[lb];
    let start = lb;
    let end = ub;

    while (start < end) {
      while (arr[start] <= pivot) {
        start++;
      }
      while (arr[end] > pivot) {
        end--;
      }

      if (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
      }
    }

    let temp = arr[lb];
    arr[lb] = arr[end];
    arr[end] = temp;
    return end;
  }

  function quikSort(arr, lb, ub) {
    if (lb < ub) {
      let loc = partition(arr, lb, ub);
      quikSort(arr, lb, loc - 1);
      quikSort(arr, loc + 1, ub);
    }
  }
  quikSort(arr, lb, ub);
  // console.log("sorted Array is ", arr);
}

//merge sort
{

  let arr = [9, 7, 8, 6, 3, 4, 5, 1];
  let lb = 0;
  let ub = arr.length - 1;

  function mergeSort(arr, lb, ub){
    if (lb < ub){
      let mid = (lb + ub) / 2;
      mergeSort(arr, lb, mid);
      mergeSort(arr, mid + 1, ub);
    }
  }
  // mergeSort(arr, lb, ub);
}

