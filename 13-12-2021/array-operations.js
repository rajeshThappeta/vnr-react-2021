let arr = [21, -98, 345, 76, 49]



//filter demo
//get elements greater than 70
// let valuesGreaterThan70 = arr.filter(function (element) {
//     return element > 70
// })

let valuesGreaterThan70 = arr.filter(element => element > 70)

console.log(valuesGreaterThan70)

//get elements between 50 and 200
// let elementsBetween50And200 = arr.filter(function (element) {
//     return element > 50 && element < 200
// })
let elementsBetween50And200 = arr.filter(element => element > 50 && element < 200)
console.log(elementsBetween50And200)

//modify data using filter method
//filter can be used only to filter or select,but not for modification
// let modifiedData=arr.filter(element=>element+10)
// console.log(modifiedData)


//map method to modify data
let modifiedData = arr.map(element => element + 10)
console.log("After modification ", modifiedData)


//to iterate array
arr.forEach((element, index) => {
    console.log(`value at index ${index} is ${element}`)
})



let arr2 = [10, 20, 30, 40]
//find sum of elements of array
let sumOfElements = arr.reduce((acc, element) => acc + element)
console.log("SUm is ", sumOfElements)

//find min value of arr
let minValue = arr.reduce((acc, element) => acc < element ? acc : element)
console.log("Min value is ", minValue)



//find element(search)
let result=arr.find(element=>element==176)

if(result==undefined){
    console.log("Search unsuccessful")
}
else{
    console.log("Element found")
}

//find index of search elelemnt
let result1=arr.findIndex(element=>element==76)

console.log("Index is ",result1)