// extraction of numbers

function extraOfNumber(n) {
  let counter = 0;
  while (n > 0) {
    let lastDigit = n % 10;
    n = Math.floor(n / 10);
    counter++;
  }
  console.log("number of digit is ", counter);
}
// extraOfNumber(554);

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
// reverseNumber(7789);

//palindrom number 121 is reverse 121 is called pallindrom
function palindrom(n) {
  let num = n;
  let reverse = 0;
  while (n > 0) {
    let last = n % 10;
    reverse = reverse * 10 + last;
    n = Math.floor(n / 10);
  }

  if (num == reverse) {
    console.log("number is palindrom");
  } else {
    console.log("number is not palindrom");
  }
}
// palindrom(13167);

// armstrong numbers
// submission of n cube , suppose 371 = 3*3*3 + 7*7*7 + 1*1*1 = 371

function armstrongNumber(n) {
  let sum = 0;
  let dup = n;
  while (n > 0) {
    let last = n % 10;
    sum = sum + last * last * last;
    n = Math.floor(n / 10);
  }
  if (dup == sum) {
    console.log("number is armstrong ");
  } else {
    console.log("number is not armstrong");
  }
}
// armstrongNumber(371);

// print all divisiors of n
function divisior(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}
// divisior(65);

// check number is prime or not
function prime(n) {
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      counter++;
    }
  }

  if (counter === 2) {
    console.log("number is prime");
  } else {
    console.log("number is even");
  }
}
// prime(790);

// GCD greatest common divisor of two numbers
function GCD(n1, n2) {
  let gcd = 1;
  for (let i = 1; i <= n1; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcd = i;
    }
  }
  console.log(gcd);
}

GCD(11, 150);
