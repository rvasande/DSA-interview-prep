function bubbleSort(arr) {
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
// bubbleSort([9,8,7,6,5,4,2,1])

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let small = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[small] > arr[j]) {
        small = j;
      }
    }
    let temp = arr[small];
    arr[small] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
}
// selectionSort([9, 8, 7, 6, 5, 4, 2, 1]);

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let small = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > small) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = small;
  }
  console.log(arr);
}
// insertionSort([9, 8, 7, 6, 5, 4, 2, 1]);

{
  let arr = [9, 8, 7, 6, 2, 3, 4, 5];
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
  console.log(arr);
}
