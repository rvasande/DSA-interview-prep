//1) reverse string 
function reverseStr(str){
    let revrs = str.split("")
    let result = revrs.reverse().join("")

    if(str === result){
        console.log(`string is pallindrom and reverse string is ===> ${result}`);

        }else{
            console.log(`string is not pallindrom and reverse string is  ===> ${result}`);

        }
        
}
// reverseStr('olo')

// another approach 
function anotherAppr(n){
    let str = ''
    for(let i=n.length-1; i>=0; i--){
        str = str.concat(n[i])
        }
    console.log(str)
}
// anotherAppr('vassu')


// 2) find largest number from array
{
    let arr = [1,2,3,4,5,64,9]

    function largestNo(arr){
        let largestNumber = arr[0]

        arr.forEach(element => {
            if(element > largestNumber){
                largestNumber = element
            }
        });
        console.log(largestNumber);
    }
    // largestNo(arr)
}

// 3) reverse an array 
function reverseArr(arr){
    let emptyArr = []
    for(let i = arr.length-1; i>=0; i--){
        emptyArr.push(arr[i])
        } 
    console.log(emptyArr);
}
// reverseArr([1,2,3,4,5,6])