//create a person object
const person = {
    id: 100,
    name: 'ravi',
    age: 21,
    city: "hyderabad"

}


// console.log("name is ",person.address)
// console.log("age is ",person.age)
// console.log("city is ",person['city'])

//add mobile 
person.mobile = 999999
//add designation
person.designation = 'manager'


//delete age
delete person.age


//modify name
person.name = 'ravi kumar'
//console.log(person)



//iterate person object
for (let k in person) {
    console.log(` ${k} is ${person[k]}`)
}