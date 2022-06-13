
const input = document.querySelector("#input")
const inputBtn = document.querySelector("#input-btn")
const todoList = document.querySelector(".todo-list")
// const newItem = document.createTextNode("hei. Dette er en test")

document.getElementById("input-btn").addEventListener("click", (e) => {
    console.log(e);
    console.log(input.value);
    // document.createElement("li").appendChild(newItem)
    console.log(todoList);
    const li = document.createElement("li")
    li.textContent = "li: test tekst"
    console.log(li);
    li.append(li)
})


// input1.addEventListener("click", (inputBtn) => {
//     console.log(inputBtn);
// })
 
// function testFunc1() {
//     console.log(input2.value);
//     input2.value = ""
// }