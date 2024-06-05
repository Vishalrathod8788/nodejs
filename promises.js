const myPro = new Promise((resolve, reject) => {
    // setTimeout (() => {
    //     resolve('success')
    // }, 1000)

    setTimeout(() => {
        resolve('Success')
    }, 2000)
})

// console.log(myPro)

// myPro.then((result) => {
//     console.log(result)
// })

// Arow function Sytax
let res = 10;
const myArrow = ((res) => {
    console.log(res);
})