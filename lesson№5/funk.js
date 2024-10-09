// let first = prompt("Ədəd daxil edin")
// let second = prompt("Ədəd daxil edin")
// function pow(vur){
//     vur = first ** second
//     return vur;
// }
// console.log(pow())

let num = prompt("İki ədəd daxil edin")
let pointed = num.split(" ");
let first= pointed[0];
let second = pointed[1];
function pow(vur){
    vur = first ** second
    return vur;
}
console.log(pow())