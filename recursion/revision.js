// print n numbers

function print(n) {
  if (n < 1) {
    return;
  } else {
    print(n - 1);
    console.log(n);
  }
}
// print(4);

function sumOf(i,sum){
    if(i<1){
        console.log(sum);
        return
    }else{
        sumOf(i-1, sum+i)
    }
}
// sumOf(4,0)


function factorial(n){
    if(n===0){
        return 1
    }else{
        return n * factorial(n-1)
    }
}
// console.log(factorial(3));

function sumOfNumbers(n){
    if(n === 0){
        return 0
    }else{
        let result = n + sumOfNumbers(n-1)
        return result
    }
}
// console.log(sumOfNumbers(4));

// reverse a string 
function reverse(str){
    let x = str.split('')
    let result = x.reverse().join('')
    console.log(result);

}
// reverse('hello')

function reverseStr(str){
    if(str == ''){
        return ''
    }else{

    }
}
// reverseStr("hello")

function sumOfDigit(n){
    if(n === 0){
        return 0
    }else{
        return n % 10 + sumOfDigit(Math.floor(n /10))
    }

}
// console.log(sumOfDigit(7789));
