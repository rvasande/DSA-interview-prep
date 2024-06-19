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
    for (let j = 0; j < size - i - 1; j++) {
      row += " ";
    }
    //star
    for (let j = 0; j < 2 * i + 1; j++) {
      row += "* ";
    }
    //space
    for (let j = 0; j < size - i - 1; j++) {
      row += " ";
    }
    console.log(row);
  }
}
// pattern07(10);

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
    for (let j = 0; j < 2*size-(2*i + 1); j++) {
      row += "* ";
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
pattern07(5)
pattern08(5)