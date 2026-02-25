// Data structures

// Array

let arr = [1,3,4,5]

// objects
let obj = {firstname : "bobby",
    lastname : "bobsterino"}


// challenge 4

function countTarget(arr, target){
    let count = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target){
            count++
        }}
    return{
        success: count > 0,
        count: count
    }}
countTarget([1,2,3,4,5,6,7,8], 5)   