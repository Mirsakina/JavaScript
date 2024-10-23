// // Task-1
// const item = document.querySelector("ul li:nth-child(1)");
// console.log(item)


// // Task-2
// // First condition
// const h1Elem = document.querySelector("h1")
// h1Elem.remove()
// // Second condition
// const ulElem = document.querySelector("ul")
// const newLi = document.createElement("li")
// newLi.textContent = "TITAN RTX"
// ulElem.append(newLi)


// // Task-3
// // First condition
// const lem = document.querySelector("h1")
// lem.remove()
// const Elem = document.querySelector("body")
// const h1Element = document.createElement("h1")
// h1Element.textContent = "GeForce 20 Series"
// Elem.before(h1Element)
// // Second condition
// const PrimaryLi = document.querySelectorAll(".primary")
// PrimaryLi.forEach(item => item.style.backgroundColor = "#ebebeb")


// // Task-4
// const PrimaryClass = document.querySelectorAll("ul li.primary")
// PrimaryClass.forEach(item => console.log(item))


// // Task-5
// list.forEach(li=>{
//     console.log(li.classList);
//     li.classList.add("item")
//     if(!li.classList.contains("primary")){
//         li.classList.add("secondary")
//     }
// })


// // Task
// let arr=[4,6,3,8]
// let product=1;
// let sum=0;
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2==0){
//     product*=arr[i];
//   }else{
//     sum+=arr[i];
//   }

// }
// console.log(sum);
// console.log(product);

// // Task-Weeksday
// let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]
// function weekdayText(weekdays){
//     return function getText(num){
//     if (num >= 0 || num < weekdays.length) {
//         return weekdays[num]
//     }else{
//         return Error("Invalid weekday number");
//     }
// }
// }
// function getDayIndex(index) {
//     const getTextFunction = weekdayText(weekdays);
//     return getTextFunction(index);
// }
// let otvet = weekdayText(weekdays)
// console.log(otvet(4))
