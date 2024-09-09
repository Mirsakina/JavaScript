// Task-01
console.log("My name is Murad")
// Task-02
const name = "Mirsakina";
console.log(name)
// Task-03
// 2user          -
// c@rt           -
// person         +
// title color    -
// console        -
// $add           +
// Task-04
let bookPrice = 750;
let bookAmount = 14;
console.log(bookAmount+bookPrice)
// Task-05
let kmhSpeed = 75;
let msSpeed = 75/3.6;
console.log(msSpeed)
// Task-06
let birthday = prompt("Zəhmət olmasa doğum tarixinizi qeyd edin!(MİSAL: 2007-01-16)");
const today = Date.now();
const birth = new Date(birthday);
const age = today - birth;
const dayage = Math.floor(age / 86400000);
console.log(dayage)
// Task-07
let num = 22;
let fivenum = 22**5;
let threenum = fivenum % 3;
console.log(threenum)
// Task-08
let firstName = 'Alan';
let lastName = 'Turing';
console.log("Sizin adınız " + firstName + " " + lastName + ".Tanışlığımıza çox şadam!")
console.log(`Sizin adınız ${firstName} ${lastName}.Tanışlığımıza çox şadam!`)
// Task-09
let firstname = 'Alan';
let lastname = 'Turing';
console.log("Sizi bir daha görməyimizə şadıq," + firstName + " " + lastName + ".")
console.log(`Sizi bir daha görməyimizə şadıq, ${firstName} ${lastName}.`)
// Task-10
let fullName = "Murad Orucov";
console.log(fullName.length-1)
// Task-11
let full_Name = "Murad Orucov";
console.log(full_Name[0]);
console.log(full_Name[5 + 1]);
// Task-12
let full_name = prompt("Zəhmət olmasa ADINIZI və SOYADINIZI qeyd edin!")
let spaceIndex = full_name.indexOf(" ")
let first_name = full_name.slice(0, spaceIndex);
let last_name = full_name.slice(spaceIndex + 1);
console.log(`${last_name} ${first_name}`);
// Task-13
let yourname = prompt("Zəhmət olmasa ADINIZI qeyd edin!")
console.log("Salam, " + yourname +"!");
// Task-14
let firstnumber = prompt("İlk rəqəmi qeyd edin:")
let secondnumber = prompt("İkinci rəqəmi qeyd edin:")
console.log(+firstnumber + +secondnumber);
console.log(firstnumber - secondnumber);
console.log(firstnumber * secondnumber);
console.log(firstnumber / secondnumber);
// Task-15
let first_number = 12345
let second_number = 98765
let multiplication = first_number * second_number;
let private = multiplication.toString().charAt(5);
console.log(private);