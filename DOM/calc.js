let inp1 = document.querySelector("#fn")
let inp2 = document.querySelector("#sn")
let addBtn = document.querySelector(".addBtn")
let diffBtn = document.querySelector(".diffBtn")
let result = document.querySelector(".result")


//find and display sum
addBtn.addEventListener('click', () => {
    //read value sfrom two inputs
    let fn = inp1.value;
    let sn = inp2.value;

    //find sum
    let sum = (+fn) + (+sn);
    //display result
    result.textContent = sum
})