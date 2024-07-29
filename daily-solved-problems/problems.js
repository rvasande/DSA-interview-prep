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
function evenNo(arr) {
  let result = arr.filter((el) => el % 2 === 0);
  console.log(result);
}
// evenNo([,1,2,3,4,5,6,7,8,9])

// 8) counter numbers of vowels
function vowel(str) {
  let vowels = "aeiouAEIOU";
  let counter = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      counter++;
    }
  }
  console.log(counter);
}
// vowel("rushikesh vasande");

//9) reverse array without using another array
function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
  }
  console.log(arr);
}
// reverseArr([8, 6, 9, 0, 2, 1, 3, 4]);

//10) find largest difference between two numbers in array
function largestDifference(arr) {
  let dif = [];
  for (let i = 0; i < arr.length - 1; i++) {
    dif.push(arr[i] - arr[i + 1]);
  }
  console.log(dif);
}
// largestDifference([2, 3, 6, 8, 1, 10]);

//11) swap the case of each character of string
function swapCharacter(str) {
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      temp = temp.concat(str[i].toLowerCase());
    } else if (str[i] === str[i].toLowerCase()) {
      temp = temp.concat(str[i].toUpperCase());
    }
  }
  console.log(temp);
}
// swapCharacter("rusHikesH vAsAnDE");

//12) remove special characters from given string
function removeSpecialChar(str) {
  let remove = "";
  for (let char of str) {
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      char === ""
    ) {
      remove += char;
    }
  }
  console.log(remove);
}
// removeSpecialChar("rus@#hi!kesh$%");

// 13) sort the sentence on the basis of length of words
function sortWord(str) {

}
sortWord("rushikesh is a");
