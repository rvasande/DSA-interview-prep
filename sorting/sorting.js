//bubble sort in acending order
function bubbleSortAc(arr){
for(let i=0; i<arr.length-1;i++){
  for(let j=0;j<arr.length-i-1; j++){
    if(arr[j] > arr[j+1]){
      let temp = arr[j]
      arr[j] = arr[j+1]
      arr[j+1] = temp
    }
  }
  }
console.log(arr);
}
bubbleSortAc([3,1,5,9,8,5,4])