// Task-1
const item = document.querySelector("ul li:nth-child(1)");
console.log(item)


// Task-2
// First condition
const h1Elem = document.querySelector("h1")
h1Elem.remove()
// Second condition
const ulElem = document.querySelector("ul")
const newLi = document.createElement("li")
newLi.textContent = "TITAN RTX"
ulElem.append(newLi)


// Task-3
// First condition
const lem = document.querySelector("h1")
lem.remove()
const Elem = document.querySelector("body")
const h1Element = document.createElement("h1")
h1Element.textContent = "GeForce 20 Series"
Elem.before(h1Element)
// Second condition
const PrimaryLi = document.querySelectorAll(".primary")
PrimaryLi.forEach(item => item.style.backgroundColor = "#ebebeb")


// Task-4
const PrimaryClass = document.querySelectorAll("ul li.primary")
PrimaryClass.forEach(item => console.log(item))


// Task-5
// First condition
const UlList = document.querySelectorAll("li")
UlList.forEach(item => item.classList.add("item"))
// Second condition
const Primary = document.querySelectorAll(".primary")
Primary.forEach(item => item.classList.add("secondary"))