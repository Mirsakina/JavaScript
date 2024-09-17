// // Task-01
// console.log("My name is Murad")
// // Task-02
// const name = "Mirsakina";
// console.log(name)
// // Task-03
// // 2user          -
// // c@rt           -
// // person         +
// // title color    -
// // console        -
// // $add           +
// // Task-04
// let bookPrice = 750;
// let bookAmount = 14;
// console.log(bookAmount+bookPrice)
// // Task-05
// let kmhSpeed = 75;
// let msSpeed = 75/3.6;
// console.log(msSpeed)
// // Task-06
// let birthday = prompt("Zəhmət olmasa doğum tarixinizi qeyd edin!(MİSAL: 2007-01-16)");
// const today = Date.now();
// const birth = new Date(birthday);
// const age = today - birth;
// const dayage = Math.floor(age / 86400000);
// console.log(dayage)
// // Task-07
// let num = 22;
// let fivenum = 22**5;
// let threenum = fivenum % 3;
// console.log(threenum)
// // Task-08
// let firstName = 'Alan';
// let lastName = 'Turing';
// console.log("Sizin adınız " + firstName + " " + lastName + ".Tanışlığımıza çox şadam!")
// console.log(`Sizin adınız ${firstName} ${lastName}.Tanışlığımıza çox şadam!`)
// // Task-09
// let firstname = 'Alan';
// let lastname = 'Turing';
// console.log("Sizi bir daha görməyimizə şadıq," + firstName + " " + lastName + ".")
// console.log(`Sizi bir daha görməyimizə şadıq, ${firstName} ${lastName}.`)
// // Task-10
// let fullName = "Murad Orucov";
// console.log(fullName.length-1)
// // Task-11
// let full_Name = "Murad Orucov";
// console.log(full_Name[0]);
// console.log(full_Name[5 + 1]);
// // Task-12
// let full_name = prompt("Zəhmət olmasa ADINIZI və SOYADINIZI qeyd edin!")
// let spaceIndex = full_name.indexOf(" ")
// let first_name = full_name.slice(0, spaceIndex);
// let last_name = full_name.slice(spaceIndex + 1);
// console.log(`${last_name} ${first_name}`);
// // Task-13
// let yourname = prompt("Zəhmət olmasa ADINIZI qeyd edin!")
// console.log("Salam, " + yourname +"!");
// // Task-14
// let firstnumber = prompt("İlk rəqəmi qeyd edin:")
// let secondnumber = prompt("İkinci rəqəmi qeyd edin:")
// console.log(+firstnumber + +secondnumber);
// console.log(firstnumber - secondnumber);
// console.log(firstnumber * secondnumber);
// console.log(firstnumber / secondnumber);
// // Task-15
// let first_number = 12345
// let second_number = 98765
// let multiplication = first_number * second_number;
// let private = multiplication.toString().charAt(5);
// console.log(private);
// // Task-16
// // "" + 1 + 0 = 10
// // "" - 1 + 0 = -1
// // "true" - false = NaN
// // 6 / "3" = 2
// // 4 + 5 + "px" = 9px
// // "$" + 4 + 5 =  $45
// // "4" - 2 = 2
// // NaN + "px" = NaNpx
// // 7 / 0 = Infinity
// // "-9" + 5 = -95
// // "-9" - 5 = -14
// // null + 1 = 1
// // undefined + 1 = NaN
// // Task-17
// let fournumbers = prompt("Zəhmət olmasa dörd rəgəmli ədəd daxil edin:");
// let one = parseInt(fournumbers.charAt(0))
// let two = parseInt(fournumbers.charAt(1))
// let three = parseInt(fournumbers.charAt(2))
// let four = parseInt(fournumbers.charAt(3))
// console.log(one+two+three+four);
// // Task-18
// let user = prompt("Zəhmət olmasa SOYADINIZI və ADINIZI qeyd edin!")
// let your_name = user.slice(user.indexOf(" ") + 1);
// console.log(`Salam,${your_name}!`)
// // Task-19
// let price = prompt("Zəhmət olmasa qiymət yazın! Məsələn:530.90")
// let point = price.indexOf(".")
// let money = price.slice(0, point);
// let cent = price.slice(point + 1);
// console.log(`${money} manat ${cent} qəpik`);
// // Task-20
// let salary = prompt("Zəhmət olmasa maaşınızı yazın!")
// let tax = parseInt(salary)
// console.log(tax*0.87)
// // Task-21
// let fathername = prompt("Zəhmət olmasa SOYADINIZI,ADINIZI və ATA ADINIZI qeyd edin! Məsələn, «İvanov Pyotr Sergeevich»")
// let tab = fathername.indexOf(" ")
// let name1 = fathername.slice(0, tab);
// let name2 = fathername.slice(tab + 1);
// let letter = name2.charAt(0)
// let tb = fathername.lastIndexOf(" ")
// let name3 = fathername.slice(tb + 1);
// let letters = name3.charAt(0)
// console.log(`${name1}.${letter}.${letters}`)
// // Task-22
// let salarymoney = prompt("Sizdən əmanətin məbləğini, müddətini və faiz dərəcəsini daxil etməyiniz xahiş edirik: Məsələn: 3000 3 10")
// let pnt = salarymoney.indexOf(" ");
// let amount = parseInt(salarymoney.slice(0,pnt));
// let period = parseInt(salarymoney.slice(pnt+1));
// let dot = salarymoney.lastIndexOf(" ");
// let percentage = parseInt(salarymoney.slice(dot+1));
// console.log(amount+(amount*(period*percentage)/100))
// // Task-23
// let thenumber = 10;
// console.log(thenumber >= 10);
// console.log(thenumber != 12);
// console.log(thenumber > 9);
// console.log(thenumber <= 20);
// console.log(thenumber < 21);  
// Task-24
// let agename = prompt("Zəhmət olmasa yaşınızı qeyd edin:");
// if(agename <= 18){
//     alert("Access denied");
// }else{
//     alert("Access granted")
// }
// // Task-25
// let threenumbers = prompt("Zəhmət olmasa üç ikirəqəmli ədəd daxil edin:")
// let pointed = threenumbers.split(" ");
// let first = pointed[0];
// let second = pointed[1];
// let third = pointed[2];
// if(second>first&&second<third){
//     console.log(second)
// }else if(second>third&&second<first){
//     console.log(second)
// }else if(first>third&&first<second){
//     console.log(first)
// }else if(first>second&&first<third){
//     console.log(first)
// }else if(third>first&&third<second){
//     console.log(third)
// }else if(third>first&&third<second){
//     console.log(third)
// }else{
//     console.log("Xəta")
// }
// Task-26
let il = +prompt("Bir il geyd edin:")
if(il%4){
    console.log("İl uzun il deyil")
}else{
    console.log("İl uzun ildir")
}