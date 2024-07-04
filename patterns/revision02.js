"use strict";
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

function pattern01(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
// pattern01(5)

// 1
// 1 2
// 1 2 3
// 1 2 3 4
function pattern02(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}
// pattern02(5)

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6
function pattern03(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i + " ";
    }
    console.log(row);
  }
}
// pattern03(5)

// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

function pattern04(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
// pattern04(5)

// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function pattern05(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}
// pattern05(5)

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// [space,star,space]

function pattern06(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += "* ";
    }
    for (let j = 1; j <= n - i + 1; j++) {
      row += " ";
    }
    console.log(row);
  }
}
// pattern06(5)

// ***********
//  *********
//   *******
//    *****
//     ***
//      *
function pattern07(n) {
  for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += " ";
    }
    for (let j = 0; j <= 2 * n + 1 - (2 * i + 1); j++) {
      row += "* ";
    }
    for (let j = 0; j <= i; j++) {
      row += " ";
    }
    console.log(row);
  }
}
// pattern07(4)


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
// pattern06(4)
// pattern07(4)


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
function pattern08(n){
   pattern01(n)
   pattern04(n-1)
}
pattern08(10)