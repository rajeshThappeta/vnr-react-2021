//outer functions
function test() {

    let outside = 100;
    //inner function to write private logic
    function testInner() {
        let inside = 123;
        let sum = outside + inside;
        return sum;
        // console.log("outside is ", outside)
        // console.log("inside is ", inside)
    }

    return testInner
}

let result = test();
console.log(result())















//import userDetails from './users.js'
//import { products ,prodObj} from './products.js'


//console.log(("users", userDetails.userObj))
//console.log("products",products)
//console.log(prodObj)