//Task-1
function getName(name){
    console.log(`${name} is active now`)
}
getName("Mirsəkinə")
getName("Ülkər")
getName("Fidan")
//Task-2
let num = prompt("Üç ədəd daxil edin:")
let pointed = num.split(" ");
let a = pointed[0];
let b = pointed[1];
let c = pointed[2];
let d = ("Bərabərlik var!")
function comparison(a, b, c, d) {
    if (a > b && a > c) {
        return a ;
    }else if (b > a && b > c) {
        return b;
    }else if (c > b && c > a) {
        return c;
    }else{
        return d;
    }
}
console.log(comparison(a, b, c, d));
//Task-3
var rubl = prompt("Zəhmət olmasa rubl üçün qiymət daxil edin:")
var dollar = prompt("Zəhmət olmasa dollar üçün qiymət daxil edin:")
function getrubl(sum){
    sum = +rubl +(+dollar * 75);
    return `Bütün depozitlər üzrə məbləğ: ${sum} rubl.`
}
console.log(getrubl())
//Task-4
function getDigitOne(DigitOne) {
    switch (DigitOne) {
        case "1":
            return "On";
        case "2":
            return "İyirmi";
        case "3":
            return "Otuz";
        case "4":
            return "Qırx";
        case "5":
            return "Əlli";
        case "6":
            return "Altmış";
        case "7":
            return "Yetmiş";
        case "8":
            return "Həşdat";
        case "9":
            return "Doxsan";
        default:
            return "";
    }
}

function getDigitTwo(DigitTwo) {
    switch (DigitTwo) {
        case "1":
            return "bir";
        case "2":
            return "iki";
        case "3":
            return "üç";
        case "4":
            return "dört";
        case "5":
            return "beş";
        case "6":
            return "altı";
        case "7":
            return "yeddi";
        case "8":
            return "səkkiz";
        case "9":
            return "doqquz";
        default:
            return "";
    }
}
function getNumberName(NumberName) {
    if (NumberName.length === 1) {
        return getDigitTwo(NumberName);
    } else if (NumberName.length === 2) {
        return getDigitOne(NumberName[0]) + " " + getDigitTwo(NumberName[1]);
    } else {
        return "Yazı səhvdir"
    }
}
console.log(getNumberName(prompt("1-99 qədər ədəd daxil edin")));
//Task-5
let smallNumber= prompt("İki ədəd daxil edin:")
let space = smallNumber.split(" ");
let first = space[0];
let second = space[1];
let third = ("Rəqəmlər bərabərdir!")
function min(first, second) {
    if (first < second) {
        return first;
    } else if (first > second) {
        return second;
    }else{
        return third;
    }
}
console.log(min(first, second));
//Task-6
function calc(k, l, m) {
    switch (m) {
        case "+":
            return k + l;
        case "-":
            return k - l;
        case "/":
            return k / l;
        case "*":
            return k * l;
    }
}
console.log(calc(4, 6, '+'));
//Task-7
function isLucky(no) {
    let SumFirstThree = +no[0] + +no[1] + +no[2];
    let SumSecondThree = +no[3] + +no[4] + +no[5];
    if (SumFirstThree === SumSecondThree) {
        return true;
    }else if (SumFirstThree !== SumSecondThree) {
        return false;
    }
}
console.log(isLucky(prompt("Altı ədədli rəgəm daxil edin:")));
//Task-8
function capitalizeWords(text) {
    let smallText = text.split(" ");
    for (i = 0; i < smallText.length; i++) {
        smallText[i] = smallText[i][0].toUpperCase() + smallText[i].slice(1);
    }
    return smallText.join(" ");
}

console.log(capitalizeWords(prompt("Balaca bir metn yazın:")));
//Task-9
function isEven(oneNo) {
    if (oneNo % 2 == 0) {
        return true;
    } else if (oneNo % 2 !== 0) {
        return false;
    }
}
console.log(isEven(prompt("Bir ədəd daxil edin:")));
//Task-10
function isvalidnumber(phonenumber) {
    if (phonenumber[0] === "+" && phonenumber[1] === "7" && phonenumber.length == 12) {
        return true;
    }else{
        return false;
    }
}
console.log(isvalidnumber(prompt("Zəhmət olmasa +7 ile başlayan 11 ədədli telefon nömrəsi daxil edin: Misal:+71234567890")));
// Task-11
function numCounter(txt) {
    let regex = /[a-zA-Z]/g;
    let letter = txt.match(regex);
    if(letter){
        return letter.length
    }else{
    return 0;
    }
}
console.log(numCounter(prompt("Mətn daxil edin")));
