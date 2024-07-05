// extraction of numbers
function extract(n) {
  while (n > 0) {
    let last = n % 10;
    n = Math.floor(n / 10);
    console.log(last);
  }
}
// extract(7789)

function countDigit(n) {
  let counter = 0;
  while (n > 0) {
    let last = n % 10;
    n = Math.floor(n / 10);
    counter++;
  }
  console.log(counter);
}
// countDigit(9)

//reverse the number
function reverseNumber(n) {
  let reverse = 0;
  while (n > 0) {
    let last = n % 10;
    reverse = reverse * 10 + last;
    n = Math.floor(n / 10);
  }
  console.log(reverse);
}
// reverseNumber(77789)

//palindrom number 121 is reverse 121 is called pallindrom
function pallindrom(n) {
  let num = n;
  let reverse = 0;
  while (n > 0) {
    let last = n % 10;
    reverse = reverse * 10 + last;
    n = Math.floor(n / 10);
  }

  if (num === reverse) {
    console.log("number is pallindrom");
  } else {
    console.log("number is not pallindrom");
  }
}
// pallindrom(121)

// armstrong numbers
function armstrong(n) {
  let sum = 0;
  while (n > 0) {
    let last = n % 10;
    sum = sum + last * last * last;
    n = Math.floor(n / 10);
  }

  if (sum === n) {
    console.log("number is armstrong");
  } else {
    console.log("number is not armstrong");
  }
}
// armstrong(56565)

// print all divisiors of n
function divisor(n) {
for(let i=1; i<=n; i++){
    if(n % i === 0){
        console.log(i);
    }
}
}
divisor(1165)
