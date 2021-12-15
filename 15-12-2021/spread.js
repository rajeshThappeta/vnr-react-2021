//merging of arrays
let arr1 = [10, 20]
let arr2 = [30, 40]
let arr3 = [50, 60]

let mergedArray = [...arr1, ...arr2, ...arr3]
//console.log(mergedArray)

//merging objects
let obj1 = {
    a: 10,
    b: 20
}

let obj2 = {
    x: 100,
    y: 200
}

let mergedObject = { ...obj1, ...obj2 }
//console.log(mergedObject)



//creating copy of array
let skills = ['html', 'css'] 

let copySkills=[...skills]

//chanhe skills
skills.push("bootstrap")
console.log("skills array",skills)
console.log("copy of skills",copySkills)

//creating copy of object
let person={
    id:100,
    name:'ravi'
}

let copyPerson={...person}

person.city="hyd"
console.log("person",person)
console.log("copy person",copyPerson)