// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];
// arr.forEach((item, index)=> console.log(`Episode ${index+4}: ${item}`))

// const min = ['Michael','Trevor','Franklin','Laman','Limay']
// min.forEach((item, index)=> console.log(`${index} - ${item}`))

// let price = [10, 15, 100, 500, 34];
// let list = price.map(item => item *82/100);
// console.log (list);

// let userAge = [17, 15, 34, 56, 20, 14]
// let filteredList = userAge.filter(item => item !== 18)
// console.log (filteredList)
// {
//     if(item >= 18){
//         return true
//     }else{
//         return false
//     }
// })
// console.log (filteredList)

// let userAge = [17, 15, 34, 56, 20, 14];
// let foundUser = userAge.find(item => item === 56);
// console.log(foundUser);
// let products = [
//    {
//       id: 1,
//       title: "Iphone 16",
//       price: 3200
//    },
//    {
//       id: 2,
//       title: "Iphone 16 Pro Max",
//       price: 500
//    },
//    {
//       id: 3,
//       title: "Xiaomi Note 8",
//       price: 385
//    },
//    {
//       id: 4,
//       title: "Samsung S24 Ultra",
//       price: 2780
//    }
// ]
// let list = products.map(item => item.price*90/100);
// console.log(list)

// let filteredList = products.filter(item => item.price > 1000)
// console.log(filteredList)

// let foundUser = products.filter(item => item.id !== 2)
// console.log(foundUser)

// let main = products.find(item => item.title.includes("Samsung"));
// console.log(main)
let arr = [
   {
      id: 1,
      price: 345,
   },
   {
      id: 2,
      price: 400,
   },
   {
      id: 3,
      price: 450,
   }
]
let result = arr.reduse((acc,item)=>acc += item.price,0)
console.log(result)

let sum = 0
arr.forEach(item => {
   sum = item.price + sum
});
console.log(sum);
