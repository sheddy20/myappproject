//filter method in javascript:
const users = ['shedrack', 'andrew', 'keith', 'drew', 'jake', 'julia', 'mao'];

const user = users.filter(u=> u.length <= 4);

console.log(user);

//Map method in javascript;
const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];

const numbers = evenNumbers.map(x=> x*2);
console.log(numbers);
