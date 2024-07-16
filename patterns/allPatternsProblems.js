"use strict";
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
function pattern01(size) {
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
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
function pattern02(size) {
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
// pattern02(6);

// 1
// 1 2
// 1 2 3
// 1 2 3 4
function pattern03(size) {
  for (let i = 1; i < size; i++) {
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
function pattern04(size) {
  for (let i = 1; i < size; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i + " ";
    }
    console.log(row);
  }
}
// pattern04(5)

// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
function pattern05(size) {
  for (let i = 1; i < size; i++) {
    let row = "";
    for (let j = 1; j < size - i + 1; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
// pattern05(5)

// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
function pattern06(size) {
  for (let i = 1; i < size; i++) {
    let row = "";
    for (let j = 1; j < size - i + 1; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}
// pattern06(6)

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// [space,star,space]
function pattern07(size) {
  for (let i = 0; i < size; i++) {
    let row = "";
    //space
    for (let j = 0; j < size - i + 1; j++) {
      row += " ";
    }
    //star
    for (let j = 0; j < 2 * i + 1; j++) {
      row += "*";
    }
    //space
    for (let j = 0; j < size - i + 1; j++) {
      row += " ";
    }
    console.log(row);
  }
}
// pattern07(4);

// ***********
//  *********
//   *******
//    *****
//     ***
//      *
function pattern08(size) {
  for (let i = 0; i < size; i++) {
    let row = "";
    //space
    for (let j = 0; j < i; j++) {
      row += " ";
    }
    //star
    for (let j = 0; j < 2 * size - (2 * i + 1); j++) {
      row += "*";
    }
    for (let j = 0; j < i; j++) {
      row += " ";
    }
    console.log(row);
  }
}
// pattern08(10);

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
// pattern07(5)
// pattern08(5)

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
function pattern09(size) {
  for (let i = 1; i <= 2 * size - 1; i++) {
    let row = "";
    let star = i;
    if (i > size) star = 2 * size - i;
    for (let j = 1; j <= star; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
// pattern09(5)

// 1
// 01
// 101
// 0101
// 10101
// 010101

function pattern10(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let start = 1;
    if (i % 2 === 0) {
      start = 1;
    } else {
      start = 0;
    }

    for (let j = 1; j <= i; j++) {
      start = 1 - start;
      row += start + " ";
    }
    console.log(row);
  }
}
// pattern10(5);

// 1          1
// 12        21
// 123      321
// 1234    4321
// 12345  54321
// 123456654321

function pattern11(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += j;
    }

    for (let k = 0; k < 2 * n - 2 * i; k++) {
      row += " ";
    }

    for (let j = i; j >= 1; j--) {
      row += j;
    }

    console.log(row);
  }
}

// pattern11(9);

// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11  12  13  14  15
// 16  17  18  19  20  21

function pattern12(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += num + " ";
      num++;
    }
    console.log(row);
  }
}
// pattern12(4);

// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F

function pattern13(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += String.fromCharCode(64 + j + " ");
    }
    console.log(row);
  }
}
// pattern13(5)

// A B C D E F
// A B C D E
// A B C D
// A B C
// A B
// A

function pattern14(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += String.fromCharCode(64 + j + " ");
    }
    console.log(row);
  }
}
// pattern14(6)

// A
// B B
// C C C
// D D D D
// E E E E E
// F F F F F F

function pattern15(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += String.fromCharCode(64 + i + " ");
    }
    console.log(row);
  }
}
// pattern15(5)

//      A
//     ABA
//    ABCBA
//   ABCDCBA
//  ABCDEDCBA
// ABCDEFEDCBA

function pattern16(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += String.fromCharCode(64 + j + " ");
    }
    for (let j = 1; j <= n - i + 1; j++) {
      row += " ";
    }
    console.log(row);
  }
}
// pattern16(4);

// F
// E F
// D E F
// C D E F
// B C D E F
// A B C D E F

function pattern17(n) {
  let last = 65 + n;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += String.fromCharCode(last - i);
    }
    console.log(row);
  }
}
// pattern17(5);

// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *
// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************
function pattern18(n) {
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
// pattern18(6);

function pattern19(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    for (let k = 0; k < 2 * n - 2 * i; k++) {
      row += " ";
    }

    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    console.log(row);
  }
}
// pattern19(6);

function pattern20(n) {
  pattern18(n);
  pattern19(n);
}

// pattern20(6);

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

function pattern21(n) {
  pattern19(n);
  pattern18(n);
}
// pattern21(6)

// ******
// *    *
// *    *
// *    *
// *    *
// ******
function pattern22(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (i == 0 || j == 0 || i == n - 1 || j == n - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}
// pattern22(6);

//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *

function pattern23(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (j === n - i + 1 || j === n + i - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }

  for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (j === n - i + 1 || j === n + i - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

pattern23(5);
