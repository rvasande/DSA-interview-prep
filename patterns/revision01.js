"use strict";
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *

function pattern01(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
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
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
// pattern02(10)

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
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
// pattern05(6);

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
    //space
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    //star
    for(let j=1; j<=2*i-1; j++){
        row += '* '
    }
    //space
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    console.log(row);
  }
}
// pattern07(6)

// ***********
//  *********
//   *******
//    *****
//     ***
//      *
function pattern08(n){
    for(let i=1; i<=n; i++){
        let row =''
        //space
        for(let j=1; j<=i; j++){
            row += ' '
        }
        //star
        for(let j=1; j<=2*n - (2*i - 1); j++){
            row += '* '
        }
        //space
        for(let j=1; j<=i; j++){
            row += ' '
        }
        console.log(row);
    }
}
// pattern08(6)

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
function pattern09(n){
    for(let i=1; i<=2*n-1; i++){
        let row =''
        let stars = i
        if(i > n) stars = 2*n - i
        for(let j=1; j<=stars; j++){
            row += '* '
        }
        console.log(row);
    }
}
pattern09(6)