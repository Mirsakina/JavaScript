const inputElem = document.querySelector("#todo-input")
let todos = []
let id = 0
inputElem.addEventListener("keyup", (e) => {
    let val = e.target.value.trim()
    if (val !== "" && e.key === "Enter") {
        if (!todos.some(item => item.title === val)) {
            todos.push({
                id: ++id,
                title: e.target.value
            })
            console.log(todos);
        }else{
            alert("Bu todo artıq var!")
        }
    }
})