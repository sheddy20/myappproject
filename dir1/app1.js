const users = ['welcome', 'two'];

const user = users.find(u=> u === 'two');
console.log(user);


//promise in javascript;

let myAge = new Promise((resolve, reject)=>{
    let age = 2020 - 1999;
    if (age === 22){
        resolve('access allowed age is verify');
    } else {
        reject('access deny age not verify.....');
    }
})

myAge.then((m)=>{
    console.log(`${m}`);
}).catch((e)=>{
    console.log(`${e}`);
})