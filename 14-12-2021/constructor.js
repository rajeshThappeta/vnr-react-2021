//50 person objs=50x10=500 lines
//10+50=60

//create Person constructor
function Person(id, name, age, skills, address, basic) {
    //an empty obj is created and ref by this    
    //object initialization logic
    this.id = id;
    this.name = name;
    this.age = age;
    this.skills = skills;
    this.address = address
    this.basic = basic;
    this.getSalary = function () {
        let hra = this.basic * 0.15;
        let da = this.basic * 0.10;
        let salary = this.basic + hra + da
        return salary
    }

}

//create person1 obj
let person1 = new Person(100, 'ravi', 21, ['html', 'css'], { street: "KPHB" }, 2000)
console.log(person1)
let person2 = new Person(200, 'bhanu', 22, ['bootstrap', 'js'], { street: "Nizampet" }, 3000)
console.log(person2)