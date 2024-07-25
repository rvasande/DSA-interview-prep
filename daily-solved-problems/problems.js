//1) reverse string
function reverseStr(str) {
  let revrs = str.split("");
  let result = revrs.reverse().join("");

  if (str === result) {
    console.log(`string is pallindrom and reverse string is ===> ${result}`);
  } else {
    console.log(
      `string is not pallindrom and reverse string is  ===> ${result}`
    );
  }
}
// reverseStr('olo')

// another approach
function anotherAppr(n) {
  let str = "";
  for (let i = n.length - 1; i >= 0; i--) {
    str = str.concat(n[i]);
  }
  console.log(str);
}
// anotherAppr('vassu')

// 2) find largest number from array
{
  let arr = [1, 2, 3, 4, 5, 64, 9];

  function largestNo(arr) {
    let largestNumber = arr[0];

    arr.forEach((element) => {
      if (element > largestNumber) {
        largestNumber = element;
      }
    });
    console.log(largestNumber);
  }
  // largestNo(arr)
}

// 3) reverse an array
function reverseArr(arr) {
  let emptyArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    emptyArr.push(arr[i]);
  }
  console.log(emptyArr);
}
// reverseArr([1,2,3,4,5,6])

// 4) check given word is pallindrom or not
function pallindromWord(str) {
  let temp = str.split("");
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result.concat(temp[i]);
  }
  if (result === str) {
    console.log("given string is pallindrom");
  } else {
    console.log("given string is not pallindrom");
  }
}
// pallindromWord('madam')

// 5) average of number
function avgNo(arr) {
  let temp = arr.reduce((acc, el) => acc + el);
  let result = temp % arr.length;
  console.log(`average of number is ${result}`);
}
// avgNo([1, 2, 3, 4, 2]);

// 6) reverse a sentance
function reverseSen(str) {
  let newArr = str.split(" ");
  let result = [];
  for (let i = newArr.length - 1; i >= 0; i--) {
    result.push(newArr[i]);
  }
  result = result.join(" ");
  console.log(result);
}
// reverseSen("hello my name is vaasu");

// 7) return new array of even numbers
function evenNo(arr){
  let result = arr.filter((el) => el % 2 === 0)
  console.log(result);
}
// evenNo([,1,2,3,4,5,6,7,8,9])

// 8)
