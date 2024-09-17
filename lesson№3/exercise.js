// Task-1
let i = +prompt("Zəhmət olmasa ikirəqəmli ədəd daxil edin:");
while (i < 100){
    alert (i);
    i = i + 7;
}
// Task-2
let v = 0
let n = prompt("Bir ədəd daxil edin:")
while (v < n){
    alert ("I know how to use cycles");
    v++;
}
// Task-3
let s = 100
while (s < 1000){
    console.log (s);
    s=s+10;
}
// Task-4
let m = 11;
let sum = 11;
while(m < 100){
    console.log(sum);
    m = m + 2;
    sum = sum + m
}
// Task-5
let u = prompt("Zəhmət olmasa ədəd daxil edin:");
const number = parseInt(u, 10);
if (u > 0) {
    let add = 0;
    let sn = 100;
    while (sn <= 999) {
        if (sn % number === 0) {
            add += sn;
        }
        sn++;
    }
    console.log(add);
} else {
    console.log("Yazı sehvdir!");
}
// Task-6
let x = prompt("N ədədini daxil edin:")
while (x >= 0) {
    if(x===2 || x===3 || x===5){
        console.log(x);
        x--;
    }else if (x % 2 && x % 3 && x % 5) {
        console.log(x);
        x--;
    } else {
        x--;
    }
}
// Task-7
let l = 1;
for(let a = 1; a < 10; a++){
    l*=a
    console.log(l)
}
// Task-8
let string = prompt("Zəhmet olmasa metn daxil edin!");
let newString = "";
for (let k = string.length - 1; k >= 0; k--) {
    newString += string[k];
}
console.log(newString);
// Task-9
let num = prompt("Zəhmət olmasa metn yazın:")
for(let x = 0; x < num.length; x++){
  if(num[x] === "."){
    console.log(num.indexOf("."))
  }else{
    x++;
  }
}
// Task-10
let z = prompt("Zəhmət olmasa metn daxil edin:")
for (let t = 0; t < z.length; t++) {
  if (z[t] >= "0" && z[t] <= "9") {
    console.log("Mətndə rəqəm var!")
  } else {
    console.log("Mətndə rəqəm yoxdur!")
  }
}