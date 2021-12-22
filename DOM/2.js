let btn1=document.querySelector(".btn1")
let inp1=document.querySelector("#inp1")

btn1.addEventListener('click',()=>{
    //read value from input
    let v1=inp1.value
    //create h1 element
    let h1=document.createElement("h1")
    //assign content
    h1.textContent=v1;
    //add to dom
    document.body.appendChild(h1)
})