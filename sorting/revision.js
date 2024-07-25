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
