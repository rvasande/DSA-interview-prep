"use strict";
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *

function pattern01(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// pattern01(5)

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
function pattern02(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// pattern02(5)

// 1
// 1 2
// 1 2 3
// 1 2 3 4
function pattern03(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}
// pattern03(5)

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6
function pattern04(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i + " ";
    }
    console.log(row);
  }
}

// pattern04(6)

// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
function pattern05(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
// pattern05(6)

// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
function pattern06(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}
// pattern06(10)

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// [space,star,space]
function pattern07(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += "*";
    }
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    console.log(row);
  }
}
// pattern07(5)

// ***********
//  *********
//   *******
//    *****
//     ***
//      *
function pattern08(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += " ";
    }
    for (let j = 1; j <= 2 * n - (2 * i + 1); j++) {
      row += "*";
    }
    for (let j = 1; j <= i; j++) {
      row += " ";
    }
    console.log(row);
  }
}
// pattern08(5)

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

function pattern09(n) {
  pattern07(n);
  pattern08(n);
}
// pattern09(5)

// *
// **
// ***
// ****
// *****
// ******
// *****
// ****
// ***
// **
// *

function pattern(n) {
  pattern02(n);
  pattern05(n);
}
// pattern(6)

// 1
// 01
// 101
// 0101
// 10101
// 010101
function pattern11(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let start = 1;
    if (i % 2 === 0) {
      start = 0;
    } else {
      start = 1;
    }
    for (let j = 1; j <= i; j++) {
      start = 1 - start;
      row += start + " ";
    }
    console.log(row);
  }
}
// pattern11(6);

// 1          1
// 12        21
// 123      321
// 1234    4321
// 12345  54321
// 123456654321
function pattern12(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    for (let j = 1; j <= 2 * n - 2 * i; j++) {
      row += " ";
    }
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
}
// pattern12(6);

// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11  12  13  14  15
// 16  17  18  19  20  21
function pattern13(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += num + " ";
      num = num + 1;
    }
    console.log(row);
  }
}
// pattern13(6);

// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F
function pattern14(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      let start = String.fromCharCode(64 + j);
      row += start + " ";
    }
    console.log(row);
  }
}
// pattern14(6);

// A B C D E F
// A B C D E
// A B C D
// A B C
// A B
// A
function pattern15(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += String.fromCharCode(64 + j + " ");
    }
    console.log(row);
  }
}
// pattern15(6);

// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *
function pattern16(n) {
  for (let i = 1; i < n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += "*";
    }
    for (let j = 1; j <= 2 * i; j++) {
      row += " ";
    }
    for (let j = 1; j <= n - i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
// pattern16(6);

// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************
function pattern17(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    for (let j = 1; j <= 2 * n - 2 * i; j++) {
      row += " ";
    }
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
// pattern17(6);

function pattern18(n) {
  pattern16(n);
  pattern17(n);
}
// pattern18(6);

// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *
function pattern19(n) {
  pattern17(n);
  pattern16(n);
}
// pattern19(6);

// ******
// *    *
// *    *
// *    *
// *    *
// ******
function pattern20(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0 || i == n - 1 || j == n - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}
// pattern20(6);

// 10101
// 01010
// 10101
// 01010
function pattern21(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let num = 1;
    if (i % 2 === 0) {
      num = 0;
    } else {
      num = 1;
    }
    for (let j = 1; j <= n; j++) {
      num = 1 - num;
      row += num + " ";
    }
    console.log(row);
  }
}
// pattern21(5);


// *
// 11
// ***
// 3333
// *****
// 555555
function pattern22(n){
for(let i= 1; i<=n; i++){
  let row = ""

  for(let j=1; j<=i; j++){
    if(i % 2 === 0){
      row += i
    }else{
      row += "*"
    }
  }
  console.log(row);
}
}
// pattern22(8)

// 43210
// 32100
// 21000
// 10000
// 00000

function pattern23(n) {
  for (let i = 0; i <= n; i++) {
    let row = '';
    for (let j = n - i; j >= 0; j--) {
      row += j;
    }
    for (let k = 1; k <= i; k++) {
      row += '0';
    }
    console.log(row);
  }
}

pattern23(4);
