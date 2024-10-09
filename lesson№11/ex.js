// Destruction 
// //С массивом//
// let arr =["Ferit","Teyubov",17,true]
// let [firstName,lastName,age,isOnline]=arr;
// console.log(firstName)

// //С объектом
// let obj ={
// firstName:"Ferit",
// lastName:"Teyubov",
// age: 17,
// isOnline: true
// };

// let {firstName,lastName,age,isOnline}=obj;
// console.log(firstName)
// let arr =[1,2,3,4];
// let newArr = arr;
// console.log("arr",arr);
// console.log("newArr",newArr);eynisine basqa ad verir kopyalamir.

// let arr =[1,2,3,4];
// let newArr =arr.map(item=>item)
// newArr.pop()
// console.log("arr",arr);
// console.log("newArr",newArr)

// let arr =[1,2,3,4];
// let newArr =[...arr];
// console.log(...arr);
// newArr.pop()
// console.log("arr",arr);
// console.log("newArr",newArr)

// Spreat
// //Array//
// let arr = [1,2,3,4,5,6,7];
// let [first,second...digerleri] = arr; //Hem destruction hem spreat var//
// console.log(digerleri)


// // Rest(klonun iki curu olur shalow - dayaz "uzden klonlama" ve dip -"dibden klonlama")
// let arr =[1,2,3,4,["Murad","Elçin"]];
// let newArr =[...arr];//-shalow biri deyishende ikinciside deyishir
// arr[4].push("Ali")
// console.log(arr[4]); 
// newArr.pop()
// console.log("arr",arr)
// console.log("newArr",newArr)


// let arr =[1,2,3,4,["Murad","Elchin"]];
// let newArr = structuredClone (arr)
// let.str =JSON.stringify(arr)
// let.newArr =JSON.parse(str)
// console.log(str)
// arr[4].push("Ali")
// console.log("arr",arr)
// console.log("newArr",newArr)
let arr =[1,2,3,4,5,1,3,4]
let value = arr.some(item=>item<10)
console.log(value)

let obj ={}
console.log(Boolean({}))//-trudu icinde yazi olsada olmasada//
console.log(Boolean(Object.keys(obj)).length)//-icinde hecne yoxdu//
