let counter = 0;
function recursion() {
  if (counter === 4) {
    return;
  } else {
    console.log(counter);
    counter++;
    recursion();
  }
}

// recursion();

{
  let counter = 0;
  function printName(n) {
    if (counter === n) {
      return;
    } else {
      console.log("rushikesh");
      counter++;
      printName(n);
    }
  }
  //   printName(6);
}

function print(i, n) {
  if (i > n) {
    return;
  } else {
    console.log(i);
    print(i + 1, n);
  }
}
// print(1,5)

function linerarPrint(i, n) {
  if (i > n) {
    return;
  } else {
    console.log(i);
    linerarPrint(i + 1, n);
  }
}
// linerarPrint(1,7)

function printOppositeOrder(i, n) {
  if (i > n) {
    return;
  } else {
    console.log(n);
    printOppositeOrder(i, n - 1);
  }
}
// printOppositeOrder(1, 6);

// n=3 --> 1,2,3
function backTrac(i, n) {
  if (i < 1) {
    return;
  } else {
    backTrac(i - 1, n);
    console.log(i);
  }
}
// backTrac(6,6)

// n=4 --> 4,3,2,1

// sum of n numbers (paramaterized approach)

function numberSum(i, sum) {
  if (i < 1) {
    console.log("sum", sum);
    return;
  } else {
    numberSum(i - 1, sum + i);
  }
}
// numberSum(3,0)

// functional approach
function sum(n) {
  if (n === 0) return 0;
  return n + sum(n - 1);
}
// console.log(sum(3));

// factorial of n

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// console.log(factorial(4));

function reverseArray(n) {
  let result = [];
  for (let i = n.length - 1; i >= 0; i--) {
    result.push(n[i]);
  }
  console.log(result);
}
reverseArray([11, 2, 3, 444, 21]);
