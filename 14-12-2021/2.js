

//create person obj
const person = {
    id: 100,
    name: 'ravi',
    age: 21,
    basic:20000,
    skills: ['html', 'css', 'bootstrap'],
    address: {
        street: 'KPHB',
        city: "hyderabad",
        pincode: 50079
    },
    getSalary:function(){
        //calculate hra
        let hra=this.basic*0.15
        //calculate da
        let da=this.basic*0.10
        //calculate salary
        let salary=this.basic+hra+da
        //return salary
        return salary
    }
}

console.log("skills",person.skills)
console.log("city",person.address.city)
console.log(person.getSalary())

//salary=basic+hra+da  (hra=15% of basic  da=10% of basic)