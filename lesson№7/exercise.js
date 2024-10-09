// let sentences = prompt("Cümlə daxil edin:")
// let point = sentences.split(" ");
// let sam = point[0];
// for(let i = 1; i < point.length; i++){
//     if(i.length > sam.length){
//         sam = i;
//     }
// }
// console.log(sam)
 

let user = "Aycin, Səkinə, Fatime";
let newString = "";
for(let i = 0; i < user.length; i++){
    if(user[i] !== " "){
        newString += user[i].trim()
    }else{
        console.log(newString)
        newString=" "
    }
}
console.log(newString)