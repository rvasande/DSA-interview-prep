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
bubbleSortAc([3, 1, 5, 9, 8, 5, 4]);

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
