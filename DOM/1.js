//access h1 element from DOM
let headingElement = document.getElementById("heading")
let btn = document.querySelector("button")



let arr = [10, 20, 30, 40]

for (let v of arr) {
    //create h2 element
    let h2 = document.createElement('h2')
    //assign content
    h2.textContent = v
    //add these element to DOM
    document.body.appendChild(h2)
}


//add event listener to btn
btn.addEventListener('click', () => {
    //styles to headingElement
    headingElement.style.color = 'red'
    headingElement.style.backgroundColor = 'yellow'
    headingElement.textContent = "welcome to DOM"

    document.body.style.backgroundColor = "green"
})


