// 1) longest word in sentance
function longestWord(str) {
  let string = str.split(" ");
  let firstEl = string[0];
  for (let i = 0; i < string.length; i++) {
    //  console.log(string[i]);
    if (string[i].length > firstEl.length) {
      firstEl = string[i];
    }
  }
  console.log(firstEl);
}
// longestWord('hello from rushikesh')

// 2) reverse sentance
function reverseSentance(str) {
  let arr = str.split(" ");
  let emptyString = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    emptyString = emptyString.concat(arr[i] + " ");
  }
  console.log(emptyString);
}
// reverseSentance("hi rushi");

// 3) capitalize first word of sentance
function capitalize(str) {
  let arr = str.split(" ");
  const capitalize = arr.map((el) => {
    return el[0].toUpperCase() + el.slice(1);
  });
  console.log(capitalize.join(" "));
}
// capitalize('hello my name is vassu')

// 4) count number of vowels
function vowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let char of str) {
    if (vowels.indexOf(char) !== -1) {
      count++;
    }
  }
  console.log(count);
}
// vowels("hello ");
