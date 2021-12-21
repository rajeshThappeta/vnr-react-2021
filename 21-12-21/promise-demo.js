
// let condition = true;

// //create a promise
// let probj = new Promise((fulfilled, rejected) => {

//     if (condition == true) {
//         setTimeout(() => {
//             fulfilled("promise is resolved")
//         }, 5000);

//     }
//     else {
//         setTimeout(() => {
//             rejected("promise is rejected")
//         }, 5000);

//     }

// })

// //consume above promise
// probj
//     .then((message) => { console.log("message from then is", message) })
//     .catch((err) => { console.log("err is ", err) })




let isSongReady = true;
//A music director promised to his fans about 
//release of his lates music album

let promiseOfMusicDirector = new Promise((fulfilled, rejected) => {

    if (isSongReady === true) {
        setTimeout(() => {
            fulfilled("hurry..song is out now...")
        }, 5000);
    }
    else {
        setTimeout(() => {
            rejected("sorry guys..new date will be announced soon")
        }, 5000);
    }

})


//fans that consuming the promise
promiseOfMusicDirector
    .then((message) => console.log(message))
    .catch(err => console.log("err :", err))


console.log(promiseOfMusicDirector)